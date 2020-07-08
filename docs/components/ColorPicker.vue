<template>
  <div>
    <SContainerRow>
      <SContainerColumn narrow>
        <div
          class="color-picker__preview"
          :style="previewStyle"
        />
      </SContainerColumn>

      <SContainerColumn>
        <SFormField>
          <SSelect
            :id="`${$attrs.id}-color-mode`"
            v-model="colorMode"
            :name="`${$attrs.id}-color-mode`"
            label="Color mode"
            :select-options="colorSpaces"
            is-inline
            style="width: 100%;"
            @change="() => {
              emitInput()
              displayColor = convertedColors[colorMode]
            }"
          />
        </SFormField>
      </SContainerColumn>
    </SContainerRow>

    <SFormField>
      <SContainerRow justify="between">
        <SContainerColumn narrow>
          <canvas
            ref="colorPalette"
            class="color-picker__palette color-picker__canvas"
            height="200"
            width="200"
            @touchstart="startFollow('picker', $event)"
            @touchmove="followInput('picker', $event)"
            @touchend="endFollow('picker')"
            @touchcancel="endFollow('picker')"
            @mousedown="startFollow('picker', $event)"
            @mousemove="followInput('picker', $event)"
            @mouseup="endFollow('picker')"
            @mouseleave="endFollow('picker')"
          />
        </SContainerColumn>

        <SContainerColumn narrow>
          <canvas
            ref="hues"
            class="color-picker__canvas"
            height="200"
            width="20"
            @mousedown="startFollow('hue', $event)"
            @mousemove="followInput('hue', $event)"
            @mouseup="endFollow('hue')"
            @mouseleave="endFollow('hue')"
            @touchstart="startFollow('hue', $event)"
            @touchmove="followInput('hue', $event)"
            @touchend="endFollow('hue')"
            @touchcancel="endFollow('hue')"
          />
        </SContainerColumn>

        <SContainerColumn v-if="colorMode === 'hex'">
          <SFormField>
            <SInput
              :id="`${$attrs.id}-val-hex`"
              v-model="displayColor"
              :name="`${$attrs.id}-val-hex`"
              :label="colorMode.toUpperCase()"
              is-fullwidth
              is-inline
              @input="debounceInput"
            />
          </SFormField>

          <SFormField>
            <SCallout>
              Input will be converted to six-character hex if it is a valid color.
            </SCallout>
          </SFormField>
        </SContainerColumn>

        <SContainerColumn
          v-else
          style="display: flex; flex-direction: column; justify-content: space-between;"
        >
          <SFormField
            v-for="(v, k) in 3"
            :key="k"
          >
            <SInput
              :id="`${$attrs.id}-val-${k}`"
              v-model="displayColor[k]"
              :name="`${$attrs.id}-val-${k}`"
              :label="colorMode[k].toUpperCase()"
              min="0"
              :max="colorMaxes[colorMode][k]"
              type="number"
              is-inline
              is-fullwidth
              :is-invalid="displayColor[k] > colorMaxes[colorMode][k]"
              @input="debounceInput"
            />
          </SFormField>
        </SContainerColumn>
      </SContainerRow>
    </SFormField>
  </div>
</template>

<script>
import { convert, parse } from 'pure-color';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

// used as method and filter
const stringifyColor = (color, mode) => {
  if (!Array.isArray(color)) return color;
  if (mode === 'rgb') return `${mode}(${color.join(', ')})`;
  if (mode === 'hsl') return `${mode}(${color[0]}, ${color[1]}%, ${color[2]}%)`;
};

const defaultCanvasProperties = {
  x: 0,
  y: 0,
  ctx: null,
  rect: null,
  shouldFollow: false,
};

export default {
  name: 'ColorPicker',

  filters: {
    stringifyColor,
  },

  model: {
    event: 'input',
    prop: 'color',
  },

  props: {
    color: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      pickedColor: 'rgb(0, 0, 0)',
      picker: { ...defaultCanvasProperties },
      hue: { ...defaultCanvasProperties },
      colorSpaces: [
        'rgb',
        'hex',
        'hsl',
      ],
      colorMode: 'rgb',
      displayColor: [],
      hsl: {
        h: 0,
        s: 100,
        l: 50,
      },
      value: null,
      colorMaxes: {
        rgb: [
          255,
          255,
          255,
        ],
        hsl: [
          360,
          100,
          100,
        ],
      },
    };
  },

  computed: {
    previewStyle () {
      const { h, s, l } = this.hsl;

      return {
        backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
      };
    },

    convertedColors () {
      const hsl = Object.values(this.hsl);
      const rgb = this.roundColorValues(convert.hsl.rgb(hsl));

      return {
        rgb,
        hex: this.roundColorValues(convert.rgb.hex(rgb)),
        hsl: this.roundColorValues(hsl),
      };
    },
  },

  watch: {
    color (val) {
      if (val) this.pickedColor = val;

      this.displayColor = this.convertedColors[this.colorMode];
    },

    displayColor (val) {
      const colorModes = {
        rgb: () => {
          const [
            h,
            s,
            l,
          ] = convert.rgb.hsl(val);
          return { h, s, l };
        },
        hsl: () => {
          const [
            h,
            s,
            l,
          ] = val;
          return { h, s, l };
        },
        hex: () => {
          if (val.replace('#', '').length >= 3) {
            const toParse = val.includes('#') ? val : `#${val}`;
            const rgb = parse(toParse);
            const [
              h,
              s,
              l,
            ] = convert.rgb.hsl(rgb);

            return { h, s, l };
          } else {
            return this.hsl;
          }
        },
      };

      this.hsl = colorModes[this.colorMode]();
    },

    pickedColor (val) {
      this.$emit('input', val);
    },

    'hsl.h' (val) {
      this.applyHue(this.picker.ctx);
      this.buildLightnessGradient(this.picker.ctx);
      this.buildSaturationGradient(this.picker.ctx);
    },
  },

  mounted () {
    if (!this.color) this.$emit('input', this.pickedColor);

    if (this.color) {
      const rgbColor = parse(this.color);
      const [
        h,
        s,
        l,
      ] = convert.rgb.hsl(rgbColor);
      this.hsl.h = h;
      this.hsl.s = s;
      this.hsl.l = l;
      this.pickedColor = this.stringifyColor(this.convertedColors[this.colorMode], this.colorMode);
    }

    this.buildColorPalette();
    this.displayColor = this.convertedColors[this.colorMode];
  },

  methods: {
    buildColorPalette () {
      this.hue.ctx = this.$refs.hues.getContext('2d');
      this.hue.rect = this.$refs.hues.getBoundingClientRect();
      this.picker.ctx = this.$refs.colorPalette.getContext('2d');
      this.picker.rect = this.$refs.colorPalette.getBoundingClientRect();
      // color gradient
      this.buildHueGradient(this.hue.ctx);
      // set the base color
      this.applyHue(this.picker.ctx);
      // apply lightness and saturation gradients
      this.buildLightnessGradient(this.picker.ctx);
      this.buildSaturationGradient(this.picker.ctx);
    },

    buildHueGradient (context) {
      const colorGradient = context.createLinearGradient(0, 0, 0, context.canvas.height);
      colorGradient.addColorStop(0, 'rgb(255, 0, 0)'); // red
      colorGradient.addColorStop(0.84, 'rgb(255, 255, 0)'); // yellow
      colorGradient.addColorStop(0.67, 'rgb(0, 255, 0)'); // green
      colorGradient.addColorStop(0.49, 'rgb(0, 255, 255)'); // cyan
      colorGradient.addColorStop(0.33, 'rgb(0, 0, 255)'); // blue
      colorGradient.addColorStop(0.15, 'rgb(255, 0, 255)'); // magenta
      colorGradient.addColorStop(1, 'rgb(255, 0, 0)'); // red
      // apply color gradient
      context.fillStyle = colorGradient;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },

    applyHue (context) {
      context.fillStyle = `hsl(${this.hsl.h}, 100%, 50%)`;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },

    buildLightnessGradient (context) {
      const lightGradient = context.createLinearGradient(0, 0, context.canvas.width, 0);
      lightGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      lightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      // Apply `lightGradient` to canvas
      context.fillStyle = lightGradient;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },

    buildSaturationGradient (context) {
      const darkGradient = context.createLinearGradient(0, 0, 0, context.canvas.height);
      darkGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      darkGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      // Apply `darkGradient` to canvas
      context.fillStyle = darkGradient;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },

    startFollow (canvas, event) {
      this[canvas].shouldFollow = true;
      this.setCoordinates(canvas, event);
    },

    followInput: throttle(function (canvas, event) {
      if (!this[canvas].shouldFollow) return;

      this.setCoordinates(canvas, event);
      this.pickColor(canvas);
    }, 50),

    endFollow (canvas) {
      this[canvas].shouldFollow = false;
    },

    setCoordinates (canvas, event) {
      const { pageX, pageY } = event.touches ? event.touches[0] : event;
      // get coordinates relative to canvas bounding box
      if ({}.hasOwnProperty.call(this[canvas], 'x')) {
        this[canvas].x = pageX - this[canvas].rect.left;
      }

      if ({}.hasOwnProperty.call(this[canvas], 'y')) {
        this[canvas].y = pageY - this[canvas].rect.top;
      }
    },

    pickColor (canvas) {
      const { data } = this[canvas].ctx.getImageData(this[canvas].x, this[canvas].y, 1, 1);
      const [
        h,
        s,
        l,
      ] = convert.rgb.hsl(data);

      if (canvas === 'hue') {
        this.hsl.h = Math.round(h);
      } else {
        this.hsl.s = Math.round(s);
        this.hsl.l = Math.round(l);
      }

      this.emitInput();
    },

    emitInput () {
      const { colorMode: mode } = this;
      this.pickedColor = this.stringifyColor(this.convertedColors[mode], mode);
      this.$emit('input', this.pickedColor);
    },

    roundColorValues (values) {
      return Array.isArray(values) ? values.map(val => Math.round(val)) : values;
    },

    stringifyColor,

    debounceInput: debounce(function () {
      this.emitInput();
    }, 300),
  },
};
</script>

<style lang="scss">
.color-picker {
  &__canvas {
    cursor: crosshair;
    display: block;
    margin: 0;
    padding: 0;
  }

  &__preview {
    border: 1px solid color('night', 'lighter');
    border-radius: border-radius('small');
    height: spacing('triple');
    margin-right: spacing('half');
    width: spacing('triple');
  }
}
</style>

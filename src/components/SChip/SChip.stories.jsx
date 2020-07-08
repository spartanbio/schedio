import { SChip } from '@/components/SChip';
import { SChipGroup } from '@/components/SChipGroup';
import { SHeading } from '@/components/SHeading';
import { SCallout } from '@/components/SCallout';
import PropList from '@@/docs/components/PropList';
import { boolean, select, text } from '@storybook/addon-knobs';
import { colors } from './options';
import { SContainerColumn } from '@/components/SContainerColumn';
import { SContainerRow } from '@/components/SContainerRow';
import { generateHeading } from '@/utils/stories/render-functions';

export default {
  title: 'Components/Chips/SChip',

  parameters: {
    jest: 'SChip',
  },
};

export const chip = () => ({
  props: {
    props: {
      default: {
        color: select('color', ['', ...colors], '', 'Optional Props'),
        isClosable: boolean('is-closable', false, 'Optional Props'),
        closeAriaLabel: text('close-aria-label', 'Close toast', 'Optional Props'),
      },
    },
    slots: {
      default: {
        defaultSlot: text('default', 'Some content', '$slots'),
      },
    },
  },

  render (h) {
    const { props, slots } = this.$props;

    return (
      <div>
        <SHeading level="1">Chip</SHeading>
        <p>Chips can be used to convey small bits of information.</p>

        <SHeading level="2">Example</SHeading>
        <SContainerRow>
          <SContainerColumn>
            <SChip {...{ props }}>{slots.defaultSlot}</SChip>
          </SContainerColumn>
        </SContainerRow>

        <SContainerRow>
          <SContainerColumn>
            <SCallout type="warning">
              <code>v-model</code> must be set for a <code>is-closable</code> to work.
            </SCallout>
          </SContainerColumn>
        </SContainerRow>

        {SChip.props && <PropList component={SChip} />}
      </div>
    );
  },
});

chip.story = {
  name: 'Chip',

  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const closableChip = () => ({
  data () {
    return {
      showComponentCode: false,
      chips: {
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true,
        chip5: true,
      },
    };
  },

  methods: {
    handleClose (evt, chip) {
      this.chips[chip] = evt;
      console.log(`[SChip]: ${chip} is ${evt} now`);
    },
    resetChips () {
      for (const chip in this.chips) {
        if ({}.hasOwnProperty.call(this.chips, chip)) this.chips[chip] = true;
      }
    },
  },

  render (h) {
    return (
      <div>
        <SHeading level="1">Closable Chip</SHeading>
        <p>
          Chips can be closed with <code>is-closable</code> and <code>v-model</code>. Set{' '}
          <code>is-closable</code> to <code>true</code> and bind <code>v-model</code> to the
            property you want to control the chip's visibility. <code>SChip</code> emits a{' '}
          <code>@close</code> event you can listen to when it is closed.
        </p>

        <SHeading level="2">Example</SHeading>
        <SButton
          icon-left={this.showComponentCode ? 'minus-circle' : 'plus-circle'}
          color="night"
          is-outlined
          size="small"
          style="margin-bottom: 1em;"
          onClick={() => {
            this.showComponentCode = !this.showComponentCode;
          }}
        >
          {this.showComponentCode ? 'Hide' : 'Show'} component code
        </SButton>

        {this.showComponentCode && (
          <pre>
            {`\
import { SChip } from 'schedio-design'

export default {
name: 'SomeComponent',

components: { SChip }

data() {
return {
  chips: {...}
}
},

methods: {
handleClose(evt, chip) {
  // do more...
  console.log(\`[SChip]: \${chip} is \${evt} now\`)
}
},

template: \`
<div>
  <SChip
    v-for="(val, chip) in chips"
    v-model="chip"
    is-closable
    @close="handleClose($event, chip)"
  >
    {{ chip }}
  </SChip>
</div>
\`
}
`}
          </pre>
        )}

        <SHeading level="3">Output</SHeading>

        <SChipGroup>
          {Object.keys(this.chips).map(chip => (
            <SChip
              is-closable
              key={chip}
              onClose={evt => this.handleClose(evt, chip)}
              is-active={this.chips[chip]}
              style="text-transform: capitalize;"
            >
              {chip}
            </SChip>
          ))}
        </SChipGroup>

        <pre>{JSON.stringify(this.chips, null, 2)}</pre>

        <SButton
          color="night"
          size="small"
          is-outlined
          onClick={this.resetChips}
          disabled={Object.values(this.chips).every(v => v)}
        >
          Reset Chips
        </SButton>
      </div>
    );
  },
});

closableChip.story = {
  name: 'Closable Chip',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const chipColors = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Chip Colors</SHeading>

        {['', ...colors].map(color => generateChips(h, color))}
      </div>
    );
  },
});

chipColors.story = {
  name: 'Chip Colors',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};

function generateChips (h, color) {
  const chipName = `${color || ''} chip`;

  return h(SContainerRow, [
    h(SContainerColumn, [
      generateHeading(h, { level: 2, content: color || 'Base' }),
      h(SChipGroup, [
        h(SChip, { props: { color } }, chipName),
        h(SChip, { props: { color, isClosable: true } }, `Closable ${chipName}`),
      ]),
    ]),
  ]);
}

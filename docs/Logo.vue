<template>
  <div>
    <SHeading>
      Logo Usage
    </SHeading>

    <SHeading level="2">
      Clear Space
    </SHeading>

    <SLazyImage
      :src="require('@@/docs/assets/images/logo-space.png')"
      width=""
      style="display: block; margin: 0 auto 3em;"
    />

    <p>
      Clear space around the logo should be equal to the x-height on all sides of the logo.
    </p>

    <SHeading level="2">
      Do's and Don'ts
    </SHeading>

    <p>
      The Spartan logo should always be used appropriately. Here are various usage scenarios that
      must be avoided.
    </p>

    <div class="logo-usage-grid">
      <div
        v-for="({ text, image }) in images"
        :key="image"
        class="logo-usage-grid__item"
      >
        <SLazyImage
          :src="require(`@@/docs/assets/images/${image}`)"
          width=""
        />

        <p
          v-for="(p, i) in text"
          :key="i"
        >
          {{ p }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { SLazyImage } from '@/components/SLazyImage'

export default {
  name: 'Logo',

  components: {
    SLazyImage,
  },

  data () {
    return {
      images: [
        {
          text: [
            'The logo should be used, unedited, on light backgrounds.',
          ],
          image: 'logo-good.png',
        },
        {
          text: [
            'Do not use gradients on the logo.',
          ],
          image: 'logo-bad-1.png',
        },
        {
          text: [
            'Do not change the colors of the logo.',
          ],
          image: 'logo-bad-2.png',
        },
        {
          text: [
            'Do not use the word mark alone.',
          ],
          image: 'logo-bad-3.png',
        },
        {
          text: [
            'Do not use the logo on busy patterns.',
          ],
          image: 'logo-bad-4.png',
        },
        {
          text: [
            'Do not warp or skew the logo.',
          ],
          image: 'logo-bad-5.png',
        },
        {
          text: [
            'Do not rotate the logo.',
          ],
          image: 'logo-bad-6.png',
        },
        {
          text: [
            'Do not use the full color logo on dark backgrounds.',
          ],
          image: 'logo-bad-7.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.logo-usage-grid {
  --min-size: #{10 * spacing()};

  @include after-breakpoint('md') {
    --min-size: #{20 * spacing()};
  }

  display: grid;
  gap: spacing('double');
  grid-template-columns: repeat(auto-fill, minmax(var(--min-size), 1fr));
  margin-top: spacing('double');

  &__item {
    @include font-size(6);

    text-align: center;
  }
}
</style>

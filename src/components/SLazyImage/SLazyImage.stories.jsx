import { SLazyImage } from '@/components/SLazyImage';
import { SHeading } from '@/components/SHeading';
import { text, object } from '@storybook/addon-knobs';
import PropList from '@@/docs/components/PropList';

export default {
  title: 'Components/SLazyImage',
  component: SLazyImage,
  parameters: {
    jest: 'SLazyImage',
  },
};

const defaultImage = 'https://source.unsplash.com/a7XPK-oDsMk';
const intersectionOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

export const LazyImage = () => ({
  props: {
    props: {
      default: {
        src: text('src', defaultImage, 'Optional Props'),
        placeholder: text('placeholder', `${defaultImage}/16x25`, 'Optional Props'),
        placeholderHeight: text('placeholder-height', '150%', 'Optional Props'),
        width: text('width', '330px', 'Optional Props'),
        intersectionOptions: object('instersection-options', intersectionOptions, 'Optional Props'),
      },
    },
  },

  render (h) {
    const { props } = this.$props;

    return (
      <div>
        <SHeading>Lazy Image</SHeading>
        <p>
          <code>&lt;SLazyImage /&gt;</code> provides lazy loading for images. This component is
          based on the <code>IntersectionObserver</code> API.
        </p>
        <p>
          <code>placeholder-height</code> works best when set to a percentage representing the
          aspect ratio of the image.
        </p>

        <SHeading level="2">Example</SHeading>
        <p>There are two images 500px apart. Change any knobs now to see their effects.</p>
        <SLazyImage {...{ props }} />
        <div style="height: 500px;"></div>
        <SLazyImage {...{ props }} />

        {/* This doesn't work if props are only generated through a mixin */}
        {SLazyImage.props && <PropList component={SLazyImage} />}
      </div>
    );
  },
});

LazyImage.story = {
  name: 'Lazy Image',
};

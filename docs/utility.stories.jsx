import * as weights from '@spartanbio/schedio-tokens/dist/js/module-js/font-weight.module';
import { colorNames as colors } from '@/utils/component-options';
import { SHeading } from '@/components/SHeading';

export default {
  title: 'Utilities/Typography/$3',

  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const alignment = () => ({
  render (h) {
    const alignments = ['center', 'left', 'right', 'justify'];

    return (
      <div>
        <SHeading>Alignment</SHeading>
        <p>
          You can change text alignment witht the following classes:
          <ul>
            {alignments.map(alignment => (
              <li>
                <code>{`.text--align-${alignment}`}</code>
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  },
});

alignment.story = {
  name: 'Alignment',
};

export const color = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Color</SHeading>
        <p>
          The following classes exist to change the color of the text:
          <ul>
            {colors.map(color => (
              <li>
                <code>{`.text--color-${color}`}</code>
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  },
});

color.story = {
  name: 'Color',
};

export const italicAndWeight = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Italic and Weight</SHeading>
        <p>
          <code>.text--italic</code> will make text italic and the following classes can change its
          weight:
          <ul>
            {Object.keys(weights).map(weight => (
              <li>
                <code>{`.text--weight-${weight}`}</code>
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  },
});

italicAndWeight.story = {
  name: 'Italic and Weight',
};

export const size = () => ({
  render (h) {
    const sizes = Array.from({ length: 7 });

    return (
      <div>
        <SHeading>Size</SHeading>
        <p>
          You can change text size witht the following classes:
          <ul>
            {sizes.map((v, idx) => (
              <li>
                <code>{`.text--size-${idx + 1}`}</code>
              </li>
            ))}
          </ul>
        </p>
      </div>
    );
  },
});

size.story = {
  name: 'Size',
};

export const markdown = () => ({
  render (h) {
    return (
      <div>
        <SHeading>Markdown</SHeading>
        <p>
          To format markdown converted to HTML, add the <code>.markdown</code> class to its
          container.
        </p>
      </div>
    );
  },
});

markdown.story = {
  name: 'Markdown',
};

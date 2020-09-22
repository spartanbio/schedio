import { SHeading } from '@/components/SHeading';
import Color from '@@/docs/Color';
import ColorAccessibility from '@@/docs/Color/ColorAccessibility.vue';
import Graphics from '@@/docs/Graphics.vue';
import Interaction from '@@/docs/InteractionStates.vue';
import Logo from '@@/docs/Logo.vue';
import Spacing from '@@/docs/Spacing.vue';
import TypographyBase from '@@/docs/Typography/TypographyBase.vue';
import TypographyHeadings from '@@/docs/Typography/TypographyHeadings.vue';
import TypographyPrint from '@@/docs/Typography/TypographyPrint.vue';
import markdownContent from '@@/README.md';
import { storiesOf } from '@storybook/vue';
import 'highlight.js/styles/nord.css';
import './reset-pre.css';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

const hideAddons = {
  options: {
    showPanel: false,
  },
};
const converter = new showdown.Converter({
  extensions: [showdownHighlight],
});
const readme = converter.makeHtml(markdownContent);

storiesOf('* Design/Library', module)
  .addParameters(hideAddons)
  .add('README', () => ({
    template: `\
<div class="markdown">
  ${readme}
</div>\
`,
  }));

storiesOf('* Design/Logo', module)
  .addParameters(hideAddons)
  .add('Logo Usage', () => ({ render: h => <Logo /> }));

storiesOf('* Design/Color', module)
  .addParameters(hideAddons)
  .add('Color', () => ({ render: h => <Color /> }))
  .add('Accessibility', () => ({ render: h => <ColorAccessibility /> }), hideAddons);

storiesOf('* Design/Interaction', module)
  .addParameters(hideAddons)
  .add('Interaction', () => ({ render: h => <Interaction /> }));

storiesOf('* Design/Graphics', module)
  .addParameters(hideAddons)
  .add('Graphics', () => ({ render: h => <Graphics /> }));

storiesOf('* Design/Spacing', module)
  .addParameters(hideAddons)
  .add('Spacing', () => ({ render: h => <Spacing /> }));

storiesOf('* Design/Typography', module)
  .addParameters(hideAddons)
  .add('Base', () => ({ render: h => <TypographyBase /> }))
  .add('Headings & Displays', () => ({ render: h => <TypographyHeadings /> }))
  .add('Print', () => ({ render: h => <TypographyPrint /> }));

storiesOf('* Design/Assets', module)
  .addParameters(hideAddons)
  .add('Design Assets', () => ({
    render (h) {
      return (
        <div>
          <SHeading>Design assets</SHeading>

          <p>
            The latest version of that file can be found on Spartan's server at{' '}
            <code>S:\Sales & Marketing\Marketing and UI\</code>
          </p>
        </div>
      );
    },
  }));

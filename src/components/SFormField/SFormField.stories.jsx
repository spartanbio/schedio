import { SFormField } from '@/components/SFormField';
import { SHeading } from '@/components/SHeading';
import PropList from '@@/docs/components/PropList';

export default {
  title: 'Components/Forms/SFormField',

  parameters: {
    jest: 'SFormField',
  },
};

export const formField = () => ({
  render (h) {
    const submitHandler = (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-alert
      alert('You submitted the form');
    };

    return (
      <div>
        <SHeading level="1">Form Field</SHeading>
        <p>This is a simple wrapper component to group and space form elements.</p>

        <SHeading level="2">Example</SHeading>
        <form onsubmit={submitHandler}>
          <SFormField>
            <SInput id="input" name="input" label="input" required={false} />
          </SFormField>

          <SFormField>
            <SInput id="input-two" name="input-two" label="input-two" required={false} />
          </SFormField>

          <SFormField>
            {['1', '2', '3'].map(r => (
              <SRadio
                name="radios"
                id={`radio-${r}`}
                label={`radio-${r}`}
                required={false}
                hideOptional={true}
                checked={r === '1'}
              />
            ))}
          </SFormField>

          <SFormField>
            <SButton color="green">Submit</SButton>
          </SFormField>
        </form>

        {SFormField.props && <PropList component={SFormField} />}
      </div>
    );
  },
});

formField.story = {
  name: 'Form Field',
};

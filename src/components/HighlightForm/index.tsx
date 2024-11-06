import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Textarea from 'react-textarea-autocomplete';
import './styles.scss'; // Add your styles here

const HighlightForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Highlight Keywords in Textarea</h2>
      <Controller
        name="highlightedTextarea"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Textarea
            {...field}
            trigger={{
              '@': {
                dataProvider: (token) => {
                  const keywords = ['possible', 'magic'];
                  return keywords.filter((word) =>
                    word.toLowerCase().startsWith(token.toLowerCase())
                  );
                },
                component: (item) => (
                  <div style={{ color: 'blue' }}>{item}</div>
                ),
                output: (item) => `@${item} `,
              },
            }}
            loadingComponent={() => <span>Loading...</span>}
            containerStyle={{
              border: '1px solid #ccc',
              padding: '10px',
              width: '100%',
              minHeight: '100px',
              outline: 'none',
              fontFamily: 'monospace',
            }}
            style={{
              width: '100%',
              minHeight: '100px',
              border: 'none',
              outline: 'none',
              resize: 'none',
            }}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HighlightForm;

import React, { useState, useRef } from 'react';
import ContentEditable from 'react-contenteditable';

const highlightedContent = ({ text, keywords }) => {
  const highlightKeywords = (text) => {
    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });
    return highlightedText;
  };

  return highlightKeywords(text);
};

const KeywordHighlighter = () => {
  const [text, setText] = useState('');
  const [keywords, setKeywords] = useState(['highlight']);
  const contentEditableRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleContentChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        style={{ width: '100%', height: '100px' }}
      />
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '100px',
          overflowY: 'auto',
        }}
      >
        <ContentEditable
          innerRef={contentEditableRef}
          html={highlightedContent({ text, keywords })}
          disabled={false}
          onChange={handleContentChange}
          tagName="div"
        />
      </div>
    </div>
  );
};

export default KeywordHighlighter;

// src/HighlightTextarea.js
import React, { useRef, useState, useEffect } from 'react';
import './styles.scss'; // Import your CSS file for styling

const HighlightTextarea = ({ value, onChange, keywords }) => {
  const textareaRef = useRef(null);
  const [highlightedText, setHighlightedText] = useState('');

  useEffect(() => {
    const highlightKeywords = (text) => {
      if (!keywords.length) return text;
      const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    };

    setHighlightedText(highlightKeywords(value));
  }, [value, keywords]);

  useEffect(() => {
    const textarea = textareaRef.current;
    const updateScroll = () => {
      const { scrollTop, scrollLeft } = textarea;
      document.querySelector('.highlight-overlay').scrollTop = scrollTop;
      document.querySelector('.highlight-overlay').scrollLeft = scrollLeft;
    };
    textarea.addEventListener('scroll', updateScroll);
    return () => textarea.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="highlight-container">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type something..."
      />
      <div
        className="highlight-overlay"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      />
    </div>
  );
};

export default HighlightTextarea;

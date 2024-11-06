import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';

const HighlightTextarea = () => {
  const [inputText, setInputText] = useState(
    "The two words above are highlighted in this textarea. Such a thing isn't actually possible with HTML, but we can fake it with some CSS and JS magic. Go ahead, type some stuff in here or change the words above to see the real-time highlighting in action."
  );
  const [blueWords, setBlueWords] = useState(['possible']);
  const [pinkWords, setPinkWords] = useState(['magic']);

  const textareaRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const syncScroll = () => {
      if (highlightRef.current && textareaRef.current) {
        highlightRef.current.scrollTop = textareaRef.current.scrollTop;
        highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    };

    const syncSizeAndPadding = () => {
      if (highlightRef.current && textareaRef.current) {
        const computedStyle = window.getComputedStyle(textareaRef.current);
        highlightRef.current.style.width = `${textareaRef.current.clientWidth}px`;
        highlightRef.current.style.height = `${textareaRef.current.clientHeight}px`;

        // Copy padding from textarea to highlighted-text div
        highlightRef.current.style.paddingTop = computedStyle.paddingTop;
        highlightRef.current.style.paddingRight = computedStyle.paddingRight;
        highlightRef.current.style.paddingBottom = computedStyle.paddingBottom;
        highlightRef.current.style.paddingLeft = computedStyle.paddingLeft;

        // Copy font styles
        highlightRef.current.style.fontFamily = computedStyle.fontFamily;
        highlightRef.current.style.fontSize = computedStyle.fontSize;
        highlightRef.current.style.lineHeight = computedStyle.lineHeight;
      }
    };

    const textareaElement = textareaRef.current;
    if (textareaElement) {
      textareaElement.addEventListener('scroll', syncScroll);
    }
    window.addEventListener('resize', syncSizeAndPadding);
    syncSizeAndPadding(); // Initialize sizes and padding

    return () => {
      if (textareaElement) {
        textareaElement.removeEventListener('scroll', syncScroll);
      }
      window.removeEventListener('resize', syncSizeAndPadding);
    };
  }, []);

  const highlightText = (text, blueWords, pinkWords) => {
    let highlightedText = text;

    if (blueWords.length > 0) {
      const blueRegex = new RegExp(`(${blueWords.join('|')})`, 'gi');
      highlightedText = highlightedText.replace(
        blueRegex,
        '<span class="blue">$1</span>'
      );
    }

    if (pinkWords.length > 0) {
      const pinkRegex = new RegExp(`(${pinkWords.join('|')})`, 'gi');
      highlightedText = highlightedText.replace(
        pinkRegex,
        '<span class="pink">$1</span>'
      );
    }

    return highlightedText;
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleBlueWordsChange = (e) => {
    setBlueWords(e.target.value.split(',').map((word) => word.trim()));
  };

  const handlePinkWordsChange = (e) => {
    setPinkWords(e.target.value.split(',').map((word) => word.trim()));
  };

  return (
    <div className="wrapper">
      <h1>Highlight Within Textarea</h1>
      <p>
        Highlight words in blue (comma-separated):{' '}
        <input
          type="text"
          value={blueWords.join(', ')}
          onChange={handleBlueWordsChange}
        />
      </p>
      <p>
        Highlight words in pink (comma-separated):{' '}
        <input
          type="text"
          value={pinkWords.join(', ')}
          onChange={handlePinkWordsChange}
        />
      </p>
      <div className="highlight-container">
        <div
          className="highlighted-text"
          ref={highlightRef}
          dangerouslySetInnerHTML={{
            __html: highlightText(inputText, blueWords, pinkWords),
          }}
        ></div>
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={handleInputChange}
          spellCheck="false"
        ></textarea>
      </div>
    </div>
  );
};

export default HighlightTextarea;

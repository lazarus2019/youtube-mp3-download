// src/components/Editor.tsx
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import KeywordHighlight from './KeywordHighlight'; // Adjust path as needed

const Editor: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      KeywordHighlight.configure({
        keywords: ['highlight', 'text'], // Add the keywords you want to highlight
        color: '#ffeb3b',
      }),
    ],
    content: '<p>This is some text with keywords to highlight.</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;

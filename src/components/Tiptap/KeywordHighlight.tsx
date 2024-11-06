// src/extensions/KeywordHighlight.ts
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';

interface KeywordHighlightOptions {
  keywords: string[];
  color: string;
}

const KeywordHighlight = Extension.create<KeywordHighlightOptions>({
  name: 'keywordHighlight',

  addOptions() {
    return {
      keywords: [], // Default to an empty array
      color: '#ffeb3b',
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('keywordHighlight'),

        props: {
          decorations(state) {
            const { doc } = state;
            const decorations: Decoration[] = [];

            const keywords = this.options.keywords; // Ensure options are accessed correctly
            if (!keywords || keywords.length === 0) return DecorationSet.empty;

            doc.descendants((node, pos) => {
              if (node.isText) {
                keywords.forEach((keyword) => {
                  const regex = new RegExp(`(${keyword})`, 'gi');
                  let match;
                  while ((match = regex.exec(node.text)) !== null) {
                    const start = match.index;
                    const end = start + match[0].length;
                    decorations.push(
                      Decoration.inline(pos + start, pos + end, {
                        class: 'highlight',
                      })
                    );
                  }
                });
              }
            });

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});

export default KeywordHighlight;

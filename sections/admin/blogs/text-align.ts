import { Extension } from "@tiptap/core";
import { Attributes } from "html-react-parser/lib/attributes-to-props";

export interface TextAlignOptions {
  types: string[];
  alignments: string[];
  defaultAlignment: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    textAlign: {
      /**
       * Set the text align attribute
       */
      setTextAlign: (alignment: string) => ReturnType;
      /**
       * Unset the text align attribute
       */
      unsetTextAlign: () => ReturnType;
    };
  }
}

export const TextAlign = Extension.create<TextAlignOptions>({
  name: "textAlign",

  addOptions() {
    return {
      types: ["paragraph", "heading"],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: "left",
    };
  },

  addAttributes() {
    return {
      textAlign: {
        default: this.options.defaultAlignment,
        parseHTML: (element: HTMLElement) => element.style.textAlign || this.options.defaultAlignment,
        renderHTML: (attributes: Attributes) => {
          if (attributes.textAlign === this.options.defaultAlignment) {
            return {};
          }

          return { style: `text-align: ${attributes.textAlign}` };
        },
      },
    };
  },

  addCommands() {
    return {
      setTextAlign:
        (alignment: string) =>
        ({ commands }) => {
          if (!this.options.alignments.includes(alignment)) {
            return false;
          }

          return this.options.types.every((type) => commands.updateAttributes(type, { textAlign: alignment }));
        },
      unsetTextAlign:
        () =>
        ({ commands }) => {
          return this.options.types.every((type) => commands.resetAttributes(type, "textAlign"));
        },
    };
  },
});

import { Editor } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Underline, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, List, ListOrdered, Code, Quote, Undo, Redo, AlignLeft, AlignCenter, AlignRight, AlignJustify, Highlighter, Link, Unlink, Subscript, Superscript } from "lucide-react";

interface ToolbarProps {
  editor: Editor;
  isBubbleMenu?: boolean;
}

const Toolbar = ({ editor, isBubbleMenu = false }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  const toolbarItems = [
    {
      icon: <Bold size={18} />,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: <Italic size={18} />,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: <Strikethrough size={18} />,
      title: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: <Underline size={18} />,
      title: "Underline",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("underline"),
    },
    {
      icon: <Heading1 size={18} />,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Heading2 size={18} />,
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <Heading3 size={18} />,
      title: "Heading 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <Heading4 size={18} />,
      title: "Heading 4",
      action: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor.isActive("heading", { level: 4 }),
    },
    {
      icon: <Heading5 size={18} />,
      title: "Heading 5",
      action: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor.isActive("heading", { level: 5 }),
    },
    {
      icon: <Heading6 size={18} />,
      title: "Heading 6",
      action: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor.isActive("heading", { level: 6 }),
    },
    {
      icon: <List size={18} />,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: <ListOrdered size={18} />,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: <Code size={18} />,
      title: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      icon: <Quote size={18} />,
      title: "Blockquote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      icon: <Highlighter size={18} />,
      title: "Highlight",
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive("highlight"),
    },
    {
      icon: <Link size={18} />,
      title: "Link",
      action: () => {
        const url = window.prompt("Enter the URL");
        if (url) {
          editor.chain().focus().setLink({ href: url }).run();
        }
      },
      isActive: () => editor.isActive("link"),
    },
    {
      icon: <Unlink size={18} />,
      title: "Unlink",
      action: () => editor.chain().focus().unsetLink().run(),
      isActive: () => editor.isActive("link"),
    },
    {
      icon: <Subscript size={18} />,
      title: "Subscript",
      action: () => editor.chain().focus().toggleSubscript().run(),
      isActive: () => editor.isActive("subscript"),
    },
    {
      icon: <Superscript size={18} />,
      title: "Superscript",
      action: () => editor.chain().focus().toggleSuperscript().run(),
      isActive: () => editor.isActive("superscript"),
    },
  ];

  const alignmentItems = [
    {
      icon: <AlignLeft size={18} />,
      title: "Align Left",
      action: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: () => editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <AlignCenter size={18} />,
      title: "Align Center",
      action: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: () => editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <AlignRight size={18} />,
      title: "Align Right",
      action: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: () => editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <AlignJustify size={18} />,
      title: "Align Justify",
      action: () => editor.chain().focus().setTextAlign("justify").run(),
      isActive: () => editor.isActive({ textAlign: "justify" }),
    },
  ];

  return (
    <div
      className={`flex flex-wrap gap-2 p-2 ${
        isBubbleMenu
          ? "bg-background shadow-lg rounded-lg" // Dynamically adapt background
          : "border-b border-border"
      }`}
    >
      {!isBubbleMenu && (
        <>
          <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} className="p-2 rounded bg-secondary hover:bg-secondary-hover disabled:opacity-50 text-secondary-foreground">
            <Undo size={18} />
          </button>
          <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} className="p-2 rounded bg-secondary hover:bg-secondary-hover disabled:opacity-50 text-secondary-foreground">
            <Redo size={18} />
          </button>
        </>
      )}
      {toolbarItems.map((item, index) => (
        <button key={index} onClick={item.action} className={`p-2 rounded bg-secondary hover:bg-secondary-hover text-secondary-foreground ${item.isActive() ? "bg-primary text-primary-foreground" : ""}`} title={item.title}>
          {item.icon}
        </button>
      ))}
      {!isBubbleMenu &&
        alignmentItems.map((item, index) => (
          <button key={index} onClick={item.action} className={`p-2 rounded bg-secondary hover:bg-secondary-hover text-secondary-foreground ${item.isActive() ? "bg-primary text-primary-foreground" : ""}`} title={item.title}>
            {item.icon}
          </button>
        ))}
      {!isBubbleMenu && (
        <input
          type="color"
          onInput={(event) =>
            editor
              .chain()
              .focus()
              .setColor((event.target as HTMLInputElement).value)
              .run()
          }
          value={editor.getAttributes("textStyle").color}
          className="w-8 h-8 p-1 rounded bg-secondary text-secondary-foreground border border-border"
          title="Text Color"
        />
      )}
      {!isBubbleMenu && (
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="p-2 rounded bg-secondary hover:bg-secondary-hover text-secondary-foreground" title="Horizontal Rule">
          —
        </button>
      )}
      {!isBubbleMenu && (
        <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="p-2 rounded bg-secondary hover:bg-secondary-hover text-secondary-foreground" title="Insert Table">
          Table
        </button>
      )}
    </div>
  );
};

export default Toolbar;

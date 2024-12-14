"use client";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import "tippy.js/themes/translucent.css";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { TextAlign as CustomTextAlign } from "@/sections/admin/blogs/text-align";

import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/seprator";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { common, createLowlight } from "lowlight";

import Toolbar from "@/sections/admin/blogs/new-blog-editor-toolbar";
import { NewBlogForm } from "@/sections/admin/blogs/new-blog-form";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Blogs", link: "/admin/blogs" },
  { title: "New", link: "/admin/blogs/new" },
];

export default function NewBlogPage() {
  const [content, setContent] = useState("Start Writing Something Great");
  const lowlight = createLowlight(common);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Link,
      Subscript,
      Superscript,
      Underline,
      TextStyle,
      Color,
      CodeBlockLowlight.configure({ lowlight }),
      CustomTextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableHeader,
      TableCell,
      TableRow,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Create New Blog`} description="Add Details For New Blog" />
        </div>
        <Separator />
        <Toolbar editor={editor} />
        <NewBlogForm editor={editor} />
      </div>
    </PageContainer>
  );
}

"use client";
import * as z from "zod";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { newBlogSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import newBlog from "@/actions/new-blog";
import { useRouter } from "next/navigation";
import FormSuccess from "@/sections/auth/form-success";
import FormError from "@/sections/auth/form-error";
import { Button } from "@/components/ui/button";
import { BubbleMenu, Editor, EditorContent } from "@tiptap/react";
import Toolbar from "./new-blog-editor-toolbar";

type BlogFormData = z.infer<typeof newBlogSchema>;

interface NewBlogFormProps {
  editor: Editor;
}

export function NewBlogForm({ editor }: NewBlogFormProps) {
  const router = useRouter();
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSucess] = useState<string | undefined>("");
  const [loading, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(newBlogSchema),
  });

  const onSubmit = async (data: BlogFormData) => {
    setError("");
    setSucess("");
    const content = JSON.stringify(editor.getJSON());
    startTransition(async () => {
      const formData = {
        ...data,
        content,
        publised: publishing,
      };
      console.log(formData);
      const res = await newBlog(formData);
      if (res.error) setError(res.error);
      if (res.success) {
        setSucess(res.success);
        publishing ? router.push(`/blogs/${res.blogId}`) : router.push(`/admin/blogs/`);
      }
    });
  };

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} disabled={loading} />
            {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="brief">Brief</Label>
            <Input id="brief" {...register("brief")} disabled={loading} />
            {errors.brief && <p className="text-sm text-red-500">{errors.brief.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <EditorContent editor={editor} className="flex w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" />
            <BubbleMenu editor={editor} tippyOptions={{ duration: 100, hideOnClick: false, theme: "translucent" }}>
              <Toolbar editor={editor} isBubbleMenu />
            </BubbleMenu>
            {errors.content && <p className="text-sm text-red-500">{errors.content.message}</p>}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-6">
          <Button
            type="submit"
            className="w-fit"
            disabled={loading}
            onClick={() => {
              setPublishing(false);
              handleSubmit(onSubmit);
            }}
          >
            {loading && publishing ? "Saving..." : "Save As Draft"}
          </Button>
          <Button
            type="submit"
            className="w-fit"
            disabled={loading}
            onClick={() => {
              setPublishing(true);
              handleSubmit(onSubmit);
            }}
          >
            {loading && !publishing ? "Creating..." : "Publish Blog"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

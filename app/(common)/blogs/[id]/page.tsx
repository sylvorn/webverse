"use client";
import { CalendarIcon, ClockIcon, HeartIcon, ShareIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import fetcher from "@/fetcher";
import useSWR from "swr";
import { format } from "date-fns";
import { EditorContent, ReactNodeViewRenderer, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import { TextAlign as CustomTextAlign } from "@/components/sections/admin/blogs/text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { all, createLowlight } from "lowlight";
import { Progress } from "@/components/ui/progress";
import CodeBlockViewer from "@/components/sections/blogs/CodeBlockViewer";
import "@/components/sections/blogs/CodeBlockStyle.scss";

interface BlogPageProps {
  params: { id: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const [progress, setProgress] = useState(0);
  const { data, isLoading, error } = useSWR(`/api/blogs/${params.id}`, fetcher);
  const lowlight = createLowlight(all);
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
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockViewer);
        },
      }).configure({ lowlight }),
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
    editable: false,
  });

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) return prev + 10;
          clearInterval(interval);
          return 100;
        });
      }, 500);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  useEffect(() => {
    if (data?.content && editor) {
      editor.commands.setContent(data.content);
    }
  }, [data, editor]);

  if (isLoading)
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-4 bg-special">
        <div className="w-2/3 sm:w-1/3">
          <Progress value={progress} max={100} className="mb-4" />
        </div>
        <div className="flex justify-center text-white text-xl">Nurturing the roots of innovation... your next insight is growing!</div>
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex flex-col justify-center items-center space-y-4 bg-special">
        <div className="text-white text-xl font-semibold">"Looks like a golden opportunity slipped away. We’re fixing it right now."</div>
        <div className="text-sm text-muted-foreground">{error.message || "Please try again in a moment, or contact support if the issue persists."}</div>
      </div>
    );

  return (
    <div className="relative w-full bg-[#050406] flex flex-col items-center justify-start overflow-y-auto">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore id="tsparticlesfullpage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={100} className="w-full h-full" particleColor="#FFC0CB" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 max-w-5xl mx-auto py-52">
        <Card className="isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 border-0">
          <CardHeader className="">
            <img src={data?.image || "https://miro.medium.com/v2/resize:fit:1400/0*Sc0N6_W7HF8Ga0yh.jpg"} alt={`${data.title}`} className="object-cover rounded-xl" />
          </CardHeader>

          <CardContent className="p-6 text-white">
            <TextGenerateEffect words={`${data?.title || "Untitled"}`} className="mb-4 text-3xl font-bold" />

            <div className="mb-6 flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" className="text-black" />
                  <AvatarFallback>
                    {data?.author
                      .split(" ")
                      .map((name: string) => name.charAt(0))
                      .join("") || "SY"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{data?.author || "Unknown Author"}</p>
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{data ? format(new Date(data.createdAt), "dd MMM yyyy") : "Unknown Date"}</span>
                    <ClockIcon className="h-4 w-4 ml-2" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline" className="gap-2 text-black dark:text-white">
                  <HeartIcon className="h-4 w-4" />
                  <span>{data?.clap || 0}</span>
                </Button>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="prose prose-lg max-w-none text-justify">
              <EditorContent editor={editor} />
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between p-6 text-black">
            <Button variant="outline" className="gap-2 bg-white">
              <HeartIcon className="h-4 w-4" />
              <span>Like</span>
            </Button>
            <Button variant="outline" className="gap-2 bg-white">
              <ShareIcon className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

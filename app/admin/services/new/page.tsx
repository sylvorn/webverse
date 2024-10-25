"use client";
import { autocompletion, CompletionSource } from "@codemirror/autocomplete";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import parse from "html-react-parser";
import "tailwindcss/tailwind.css";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const tailwindClasses = [
  "bg-blue-500",
  "text-center",
  "p-4",
  "m-2",
  // Add more Tailwind classes as needed
];

const tailwindCompletion: CompletionSource = (context) => {
  const word = context.matchBefore(/\w*/);
  if (!word) return null;

  const suggestions = tailwindClasses.map((className) => ({
    label: className,
    type: "keyword",
    apply: className,
  }));

  return {
    from: word.from,
    options: suggestions,
    validFor: /^\w*$/,
  };
};

type FormData = {
  code: string;
};

const CodeInputForm = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    register("code"); // Register the code field
  }, [register]);

  const onSubmit = (data: FormData) => {
    setCode(data.code);
  };

  const data = [
    {
      title: "2024",
      content: code,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-gray-700">
            Enter your code
          </label>
          <CodeMirror theme={"dark"} value="<>Please Have only 1 parent element</>" extensions={[javascript({ jsx: true }), autocompletion({ override: [tailwindCompletion] })]} onChange={(value) => setCode(value)} className="cm-theme" />
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save Code
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Rendered Output</h2>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
};

export default CodeInputForm;

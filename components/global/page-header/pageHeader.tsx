"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

interface PageHeadProps {
  text: string;
  highlightedText: string;
}

export default function PageHead({ text, highlightedText }: PageHeadProps) {
  return (
    <>
      <HeroHighlight containerClassName="h-screen">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          {text} <Highlight className="text-white">{highlightedText}</Highlight>
        </motion.h1>
      </HeroHighlight>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/80 z-10" />
    </>
  );
}

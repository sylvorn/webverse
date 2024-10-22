import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
          <span className="flex justify-between items-center">
            ✨ Introducing Next Gen Startup <ChevronRightIcon className="w-4 h-4" />
          </span>
        </HoverBorderGradient>
        <h1 className="mt-5 text-5xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-xl text-center mx-auto">Spotlight effect is a great way to draw attention to a specific part of the page. Here, we are drawing the attention towards the text section of the page. I don&apos;t know why but I&apos;m running out of copy.</p>
      </div>
    </div>
  );
}

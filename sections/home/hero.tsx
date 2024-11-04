import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  return (
    <div className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <HoverBorderGradient containerClassName="rounded-full" as="button" className="bg-black text-white flex items-center space-x-2">
          <span className="flex justify-between items-center">
            ✨ Introducing Next Gen Startup <ChevronRightIcon className="w-4 h-4" />
          </span>
        </HoverBorderGradient>
        <h1 className="mt-5 text-5xl md:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Innovating Future <br /> Solutions.
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-xl text-center mx-auto">At Prayam Infosoft, we specialize in providing innovative IT solutions that drive efficiency and growth. Whether you're looking for full-stack development or custom software, our dedicated team is here to support your vision.</p>
      </div>
    </div>
  );
}

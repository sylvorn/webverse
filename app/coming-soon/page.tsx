"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden py-10">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10 bg-black/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-4">Sylvorn</h1>
            <div className="max-w-lg mx-auto lg:mx-0">
              <TextGenerateEffect words="Innovating the future of IT. Our full site is coming soon." />
            </div>
            <div className="mt-10">
              <div className="flex justify-center lg:justify-start space-x-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col">
                    <span className="text-4xl font-bold text-white">{value}</span>
                    <span className="text-sm text-neutral-400 uppercase">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="md:w-72 bg-white/10 border-white/20 text-white placeholder-white/50" />
                <Button>Notify Me</Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden">
              <Image src="/images/Golden-Pheasant.png" alt="Sylvorn's Golden Pheasant" width={800} height={600} layout="responsive" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Our Story",
    description: "Founded with a passion for technology and innovation, our journey began with a small team dedicated to solving complex problems. Over the years, we've evolved into a comprehensive IT solutions provider, empowering businesses to thrive in a digital world.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white p-1">
        <Image src="/images/our-story.jpeg" width={300} height={300} className="h-full w-full object-cover rounded-md" alt="Our story" />
      </div>
    ),
  },
  {
    title: "Core Values",
    description: "At the heart of our company lies a set of core values that guide our actions and decisions. We believe in integrity, innovation, and collaboration, fostering an environment where creativity and teamwork can flourish.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white p-1">
        <Image src="/images/core-values.jpeg" width={300} height={300} className="h-full w-full object-cover rounded-md" alt="Core values" />
      </div>
    ),
  },
  {
    title: "Our Services Overview",
    description: "We offer a diverse range of services tailored to meet the unique needs of our clients. From full-stack development to software solutions, our expertise ensures that you receive the best support for your technological challenges.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white p-1">
        <Image src="/images/our-services.jpeg" width={300} height={300} className="h-full w-full object-cover rounded-md" alt="Our services" />
      </div>
    ),
  },
];

export function Details() {
  return (
    <div className="p-6 bg-black antialiased">
      <StickyScroll content={content} />
    </div>
  );
}

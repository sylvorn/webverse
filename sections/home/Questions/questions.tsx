import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import HeaderImage from "./HeaderImage";
import { cn } from "@/lib/utils";
import { items } from "./que";
import React from "react";

export default function QuestionSection() {
  return (
    <div className="bg-black antialiased p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Why Choose Sylvorn?</h1>
        <p className="text-gray-400">Empower your projects with a team that delivers excellence every time.</p>
      </div>
      <BentoGrid className="gap-4 w-full">
        {items.map((item, i) => (
          <BentoGridItem key={i} title={item.title} description={item.description} header={<HeaderImage image={item.image} title={item.title} />} icon={item.icon} className={cn("rounded-lg p-4", i === 3 || i === 6 ? "md:col-span-2" : "")} />
        ))}
      </BentoGrid>
    </div>
  );
}

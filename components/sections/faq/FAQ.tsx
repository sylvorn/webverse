"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { faqs } from "./faqsData";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(faqs[0].category);

  return (
    <div className="flex flex-col h-fit bg-black antialiased">
      <header className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Frequently Asked Questions</h1>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex justify-center items-center space-x-2">
            {faqs.map((category) => (
              <Button key={category.category} variant={selectedCategory === category.category ? "default" : "outline"} className="flex-shrink-0" onClick={() => setSelectedCategory(category.category)}>
                <category.icon className="mr-2 h-4 w-4" />
                {category.category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </header>

      <main className="flex-1 p-6 overflow-auto">
        <Card className="bg-black border-0">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-6 text-white">{selectedCategory} FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs
                .find((category) => category.category === selectedCategory)
                ?.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-white">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

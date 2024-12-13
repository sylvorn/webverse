import FAQ from "@/sections/faq/FAQ";
import PageHead from "@/sections/page-header/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sylvorn FAQ - Answers to Your Questions",
  description: "Explore Sylvorn's FAQ section for answers to common queries about our IT solutions, services, and support. Learn how we help businesses thrive.",
  keywords: ["Sylvorn FAQ", "Frequently Asked Questions", "IT Solutions Support", "Business Software Help"],
  category: "FAQ, IT Solutions, Support",
  openGraph: {
    title: "Sylvorn FAQ - Your Questions Answered",
    description: "Have questions? Find detailed answers in Sylvorn’s FAQ section. Let us guide you through our services and solutions.",
  },
};

export default function FAQsPage() {
  return (
    <>
      <PageHead text="Got questions? We've got answers in our" highlightedText="FAQs section." />
      <FAQ />
    </>
  );
}

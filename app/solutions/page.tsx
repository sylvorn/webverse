import PageHead from "@/sections/page-header/pageHeader";
import Solution from "@/sections/solutions/all-solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Solution by Sylvorn - Explore Our Expertise",
  description: "Browse the range of IT Solution offered by Sylvorn, from software development to SaaS solutions. Tailored for your business needs.",
  keywords: "IT Solution, Software Solutions, SaaS Development, Sylvorn",
  category: "IT Solution, Business Solutions, Technology",
  openGraph: {
    title: "Explore IT Solution by Sylvorn",
    description: "Our IT Solution include software development, SaaS solutions, and more. Explore now.",
  },
};

export default function SolutionPage() {
  return (
    <>
      <PageHead text={"Transforming ideas into reality with our expertise."} highlightedText={"Explore our Solution and find your solution."} />
      <Solution />
    </>
  );
}

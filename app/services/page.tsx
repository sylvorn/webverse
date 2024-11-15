import PageHead from "@/sections/page-header/pageHeader";
import Services from "@/sections/services/all-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services by Prayam Infosoft - Explore Our Expertise",
  description: "Browse the range of IT services offered by Prayam Infosoft, from software development to SaaS solutions. Tailored for your business needs.",
  keywords: "IT Services, Software Solutions, SaaS Development, Prayam Infosoft",
  category: "IT Services, Business Solutions, Technology",
  openGraph: {
    title: "Explore IT Services by Prayam Infosoft",
    description: "Our IT services include software development, SaaS solutions, and more. Explore now.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead text={"Transforming ideas into reality with our expertise."} highlightedText={"Explore our services and find your solution."} />
      <Services />
    </>
  );
}

import { Details } from "@/sections/about/details";
import { Team } from "@/sections/about/team";
import PageHead from "@/sections/page-header/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Prayam Infosoft - Your Trusted IT Partner",
  description: "Learn about Prayam Infosoft, a leader in IT solutions, software development, and SaaS. Partner with us for success.",
  keywords: "Prayam Infosoft, About Us, IT Company, Technology Solutions",
  category: "About Us, IT Solutions, Software Development",
  openGraph: {
    title: "About Prayam Infosoft",
    description: "Discover our mission and vision as leaders in IT solutions and SaaS development.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHead text="We are more than just a tech company; we are your partners in progress." highlightedText="Building solutions, bridging gaps, and creating value." />
      <Details />
      <Team />
    </>
  );
}

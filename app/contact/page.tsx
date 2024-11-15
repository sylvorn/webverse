import ContactDetails from "@/sections/contact/contactDetails";
import PageHead from "@/sections/page-header/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Prayam Infosoft - Let’s Discuss Your Project",
  description: "Get in touch with Prayam Infosoft for innovative IT solutions and expert advice. We’re here to help your business grow.",
  keywords: ["Contact Prayam Infosoft", "IT Solutions", "Business Inquiry"],
  category: "Contact, IT Solutions, Support",
  openGraph: {
    title: "Contact Prayam Infosoft",
    description: "We’re here to help! Reach out to Prayam Infosoft for all your IT needs.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHead text="Your thoughts matter to us." highlightedText="Let’s connect and make great things happen." />
      <ContactDetails />
    </>
  );
}

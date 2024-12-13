import ContactDetails from "@/sections/contact/contactDetails";
import PageHead from "@/sections/page-header/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sylvorn - Let’s Discuss Your Project",
  description: "Get in touch with Sylvorn for innovative IT solutions and expert advice. We’re here to help your business grow.",
  keywords: ["Contact Sylvorn", "IT Solutions", "Business Inquiry"],
  category: "Contact, IT Solutions, Support",
  openGraph: {
    title: "Contact Sylvorn",
    description: "We’re here to help! Reach out to Sylvorn for all your IT needs.",
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

import ContactDetails from "@/sections/contact/contactDetails";
import PageHead from "@/sections/page-header/pageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHead text="Your thoughts matter to us." highlightedText="Let’s connect and make great things happen." />
      <ContactDetails />
    </>
  );
}

import FAQ from "@/sections/faq/FAQ";
import PageHead from "@/sections/page-header/pageHeader";

export default function FAQsPage() {
  return (
    <>
      <PageHead text="Got questions? We've got answers in our" highlightedText="FAQs section." />
      <FAQ />
    </>
  );
}

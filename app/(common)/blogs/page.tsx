import BlogList from "@/components/sections/blogs/BlogList";
import PageHead from "@/components/global/page-header/pageHeader";

export default function BlogsPage() {
  return (
    <>
      <PageHead text={"Transforming ideas into reality with our expertise."} highlightedText={"Explore our Solution and find your solution."} />
      <BlogList />
    </>
  );
}

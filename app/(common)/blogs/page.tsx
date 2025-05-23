import BlogList from "@/sections/blogs/BlogList";
import PageHead from "@/sections/page-header/pageHeader";

export default function BlogsPage() {
  return (
    <>
      <PageHead text={"Transforming ideas into reality with our expertise."} highlightedText={"Explore our Solution and find your solution."} />
      <BlogList />
    </>
  );
}

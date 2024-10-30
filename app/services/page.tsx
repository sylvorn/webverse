import PageHead from "@/sections/page-header/pageHeader";
import Services from "@/sections/services/all-services";

export const runtime = "edge";

export default function () {
  return (
    <>
      <PageHead text={"Transforming ideas into reality with our expertise."} highlightedText={"Explore our services and find your solution."} />
      <Services />
    </>
  );
}

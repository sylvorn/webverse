import { Details } from "@/sections/about/details";
import { Team } from "@/sections/about/team";
import PageHead from "@/sections/page-header/pageHeader";

export const runtime = "edge";

export default function () {
  return (
    <>
      <PageHead text="We are more than just a tech company; we are your partners in progress." highlightedText="Building solutions, bridging gaps, and creating value." />
      <Details />
      <Team />
    </>
  );
}

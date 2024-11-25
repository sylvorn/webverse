import HeroSection from "@/sections/home/hero";
import QuestionSection from "@/sections/home/Questions/questions";
import ServiceSection from "@/sections/home/services";
import SolutionSection from "@/sections/home/Solutions/solutions";
import Technologies from "@/sections/home/technologies";
import Testimonials from "@/sections/home/testimonials";

export default function SpotlightPreview() {
  return (
    <>
      <HeroSection />
      <Technologies />
      <ServiceSection />
      {/* <SolutionSection /> */}
      <QuestionSection />
      <Testimonials />
    </>
  );
}

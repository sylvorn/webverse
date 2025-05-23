import HeroSection from "@/components/sections/home/hero";
import ServiceSection from "@/components/sections/home/services";
import SolutionSection from "@/components/sections/home/Solutions/solutions";
import Technologies from "@/components/sections/home/technologies";
import Testimonials from "@/components/sections/home/testimonials";

export default function SpotlightPreview() {
  return (
    <>
      <HeroSection />
      <Technologies />
      <ServiceSection />
      {/* <SolutionSection /> */}
      <Testimonials />
    </>
  );
}

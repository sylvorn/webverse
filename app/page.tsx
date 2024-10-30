import HeroSection from "@/sections/home/hero";
import ServiceSection from "@/sections/home/services";
import Technologies from "@/sections/home/technologies";
import Testimonials from "@/sections/home/testimonials";

export const runtime = "edge";

export default function SpotlightPreview() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Technologies />
      <Testimonials />
    </>
  );
}

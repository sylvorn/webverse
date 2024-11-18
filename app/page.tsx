import HeroSection from "@/sections/home/hero";
import QuestionSection from "@/sections/home/Questions/questions";
import ServiceSection from "@/sections/home/services";
import Technologies from "@/sections/home/technologies";
import Testimonials from "@/sections/home/testimonials";

export default function SpotlightPreview() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <QuestionSection />
      <Technologies />
      <Testimonials />
    </>
  );
}

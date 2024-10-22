"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import ServiceCard from "./components/services-card";

export default function ServiceSection() {
  return (
    <div className="bg-black antialiased p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-400">Delivering innovative IT solutions for your business needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <ServiceCard color={"#D9ED92"} title={"Full Stack Website Development"} description={"Our Full Stack Website Development service delivers comprehensive web solutions tailored to your business needs."} features={["End-to-End Development", "Responsive Design", "SEO Optimization"]} />
        <ServiceCard color={"#99D98C"} title={"Backend Development"} description={"Specializing in Backend Development using Node.js and Hono, we create robust and scalable server-side applications."} features={["Scalability", "RESTful APIs", "Real-Time Data Processing"]} />
        <ServiceCard color={"#52B69A"} title={"Frontend Development"} description={"Our Frontend Development services focus on creating dynamic and engaging user interfaces."} features={["Component-Based Architecture", "Optimized Performance", "Server-Side Rendering"]} />
        <ServiceCard color={"#168AAD"} title={"Application Development (Coming Soon) (React Native)"} description={"Our Application Development service, launching soon, will focus on cross-platform mobile apps using React Native."} features={["Cross-Platform Compatibility", "Native Performance", "Rapid Development"]} />
        <ServiceCard color={"#168AAD"} title={"Software Development (Coming Soon)"} description={"Our upcoming Software Development service will offer custom, scalable, and secure software solutions tailored to meet your business needs."} features={["Custom Software Solutions", "Enterprise-Grade Security", "Scalable Architectures", "Cross-Platform Compatibility", "Agile Development Process"]} />
      </div>
    </div>
  );
}

"use client";

import ServiceCard from "./components/services-card";

export default function ServiceSection() {
  return (
    <div className="bg-black antialiased p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-400">Delivering innovative IT solutions for your business needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <ServiceCard color="#A9D6E5" title="Website" description="Create professional, responsive websites tailored to your business needs." features={["Responsive design", "SEO-friendly structure", "Fast performance"]} />
        <ServiceCard color="#89C2D9" title="E-Commerce" description="Design intuitive e-commerce platforms that drive conversions." features={["Optimized payment gateways", "User-friendly shopping experience", "Seamless integrations"]} />
        <ServiceCard color="#61A5C2" title="CMS" description="Streamline content management with tailored CMS solutions." features={["User-friendly interface", "Customizable workflows", "Secure data handling"]} />
        <ServiceCard color="#468FAF" title="SaaS" description="Build robust SaaS products designed for scalability and global reach." features={["Cloud-native architecture", "Multi-tenancy", "Lifecycle management"]} />
        <ServiceCard color="#2C7DA0" title="Cloud" description="Empower your business with reliable and scalable cloud solutions." features={["Infrastructure optimization", "Secure data storage", "High availability"]} />
        <ServiceCard color="#2A6F97" title="UI / UX" description="Deliver visually appealing designs focused on user engagement." features={["Persona-driven design", "Interactive prototypes", "User feedback integration"]} />
        <ServiceCard color="#014F86" title="Mobile Application" description="Create cutting-edge mobile applications for Android and iOS." features={["Cross-platform compatibility", "High performance", "User-centric design"]} />
      </div>
    </div>
  );
}

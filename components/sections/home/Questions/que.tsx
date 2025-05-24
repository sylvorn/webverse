import { IconClock, IconUsers, IconWallet, IconShieldLock, IconChecks, IconUserCheck, IconMessageCircle } from "@tabler/icons-react";

export const items = [
  {
    title: "Expert Talent Pool",
    description: "Work with highly skilled professionals ready to tackle any challenge.",
    image: "/images/Expert-Talent-Pool.svg",
    icon: <IconUsers className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Timely Delivery",
    description: "We stick to deadlines, ensuring your project is always on time.",
    image: "/images/Timely-Delivery.svg",
    icon: <IconClock className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Client-First Approach",
    description: "Our solutions are designed around your goals, with transparency at every step.",
    image: "/images/Client-First-Approach.svg",
    icon: <IconUserCheck className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Budget-Friendly Solutions",
    description: "Achieve cost-effective results without compromising quality.",
    image: "/images/Budget-Friendly-Solutions.svg",
    icon: <IconWallet className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Uncompromised Quality",
    description: "Meticulous quality checks ensure top-notch results every time.",
    image: "/images/Uncompromised-Quality.svg",
    icon: <IconChecks className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Human-Centered Collaboration",
    description: "Experience seamless, personalized communication at every stage.",
    image: "/images/Human-Centered-Collaboration.svg",
    icon: <IconMessageCircle className="h-5 w-5 text-teal-500" />,
  },
  {
    title: "Confidentiality Assured",
    description: "Robust NDAs safeguard your projects and intellectual property.",
    image: "/images/Confidentiality-Assured.svg",
    icon: <IconShieldLock className="h-5 w-5 text-gray-500" />,
  },
];

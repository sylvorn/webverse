import { CardSpotlight } from "@/components/ui/card-spotlight";
import Step from "./step";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCard = ({ title, description, features, color }: ServiceCardProps) => {
  return (
    <CardSpotlight className="h-[100%] w-[100%]" color={color}>
      <div className="p-4 text-white">
        <p className="text-3xl font-bold relative z-20 mt-2 text-white">{title}</p>
        <div className="text-neutral-200 mt-4 relative z-20">
          Some Features:
          <ul className="list-none  mt-2">
            {features.map((feature, index) => (
              <Step title={feature} key={index} />
            ))}
          </ul>
        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">{description}</p>
      </div>
    </CardSpotlight>
  );
};

export default ServiceCard;

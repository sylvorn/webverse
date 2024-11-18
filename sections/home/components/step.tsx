import { CheckIcon } from "@radix-ui/react-icons";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-center">
      <CheckIcon className="bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      <p className="text-white">{title}</p>
    </li>
  );
};

export default Step;

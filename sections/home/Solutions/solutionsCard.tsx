import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface SolutionsCardProps {
  solution: {
    image: string;
    title: string;
    description: string;
    learnMoreUrl: string;
  };
}

export default function SolutionsCard({ solution }: SolutionsCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={solution.image} alt={solution.title} layout="fill" objectFit="cover" className="transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>
      <CardHeader>
        <CardTitle>{solution.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{solution.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={solution.learnMoreUrl}>
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

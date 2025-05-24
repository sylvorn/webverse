import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  brief: string;
  likes: number;
  imageUrl: string;
}

export default function BlogListCard({ id, title, brief, likes, imageUrl }: BlogCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg bg-gray-800 text-white">
      <AspectRatio ratio={16 / 9}>
        <img src={imageUrl} alt={title} className="object-cover transition-all hover:scale-105" />
      </AspectRatio>
      <CardContent className="p-4">
        <TextGenerateEffect words={title} className="mb-2 text-2xl dark:text-white font-bold" />
        <p className="text-sm dark:text-muted-foreground">{brief}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <Button variant="ghost" className="gap-2 text-primary">
          <FontAwesomeIcon icon={faHandsClapping} size="4x" />
          <span>{likes}</span>
        </Button>
        <Link href={`/blogs/${id}`}>
          <Button variant="outline" className="ml-auto dark:text-white text-black">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

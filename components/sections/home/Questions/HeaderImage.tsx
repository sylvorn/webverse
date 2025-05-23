import Image from "next/image";

interface HeaderImageProps {
  image: string;
  title: string;
}

export default function HeaderImage({ image, title }: HeaderImageProps) {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
      <img src={image} alt={title} className="w-full h-full rounded-xl object-fit object-center" />
    </div>
  );
}

"use client";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";

export default function Technologies() {
  return (
    <div className="antialiased bg-black p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Our Cutting-Edge Technology Stack</h1>
        <p className="text-gray-400">Leveraging modern technologies like React, Next.js, Node.js, and more to deliver cutting-edge solutions.</p>
      </div>
      <div className="h-[40rem] flex flex-col antialiasedbg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos} direction="right" speed="slow" pauseOnHover={false} />
        <InfiniteMovingLogos items={logos.reverse()} direction="left" speed="slow" pauseOnHover={false} />
      </div>
    </div>
  );
}

const logos = [
  {
    imgUrl: "https://nodejs.org/static/logos/nodejsLight.svg",
    webUrl: "https://nodejs.org/en",
  },
  {
    imgUrl: "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    webUrl: "https://react.dev",
  },
  {
    imgUrl: "https://naturaily.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F172506%2F1280x800%2F00901d9ffe%2Fnext-js-logo.webp&w=640&q=75",
    webUrl: "https://nextjs.org",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    webUrl: "https://www.typescriptlang.org",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    webUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    webUrl: "https://www.postgresql.org",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    webUrl: "https://www.mongodb.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
    webUrl: "https://www.mysql.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
    webUrl: "https://www.docker.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000",
    webUrl: "https://kubernetes.io",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000",
    webUrl: "https://redis.io",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    webUrl: "https://tailwindcss.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
    webUrl: "https://getbootstrap.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000",
    webUrl: "https://expressjs.com",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000",
    webUrl: "https://www.prisma.io",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=puL87ypQPxxr&format=png&color=000000",
    webUrl: "https://ejs.co",
  },
  {
    imgUrl: "https://img.icons8.com/?size=100&id=13682&format=png&color=000000",
    webUrl: "https://www.cloudflare.com",
  },
];

"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex text-center justify-center items-center bg-black h-screen">
      <div>
        <span className="bg-gradient-to-b from-white to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">404</span>
        <h2 className="font-heading my-2 text-2xl font-bold text-white">Something&apos;s missing</h2>
        <p className="text-gray-200">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8 flex justify-center gap-2">
          <Button onClick={() => router.back()} variant="default" size="lg" className="text-white bg-white/20 hover:bg-white/30">
            Go back
          </Button>
          <Button onClick={() => router.push("/")} variant="ghost" size="lg" className="text-white hover:text-gray-900">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

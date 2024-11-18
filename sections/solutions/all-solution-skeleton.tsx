import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllSolutionSkeleton() {
  return (
    <div className="py-20 lg:py-20 bg-black antialiased">
      <div className="text-center text-white mb-3">
        <h1 className="text-3xl font-bold">Empowering Your Vision with Innovative Solutions</h1>
        <p className="text-gray-400">Our diverse team of experts is dedicated to providing tailored, high-quality services that drive success.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto md:px-8 w-full p-6">
        <div className="flex py-20 items-center justify-center antialiased">
          <GlowingStarsBackgroundCard>
            <Skeleton className="h-10 w-3/4" />
            <div className="flex justify-between items-end">
              <Skeleton className="h-6 w-1/2" />
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center"></div>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
        <div className="flex py-20 items-center justify-center antialiased">
          <GlowingStarsBackgroundCard>
            <Skeleton className="h-10 w-3/4" />
            <div className="flex justify-between items-end">
              <Skeleton className="h-6 w-1/2" />
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center"></div>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
        <div className="flex py-20 items-center justify-center antialiased">
          <GlowingStarsBackgroundCard>
            <Skeleton className="h-10 w-3/4" />
            <div className="flex justify-between items-end">
              <Skeleton className="h-6 w-1/2" />
              <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center"></div>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
      </div>
    </div>
  );
}

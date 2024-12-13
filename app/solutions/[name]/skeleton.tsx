import { Skeleton } from "@/components/ui/skeleton";

export const TimelineSkeleton = () => {
  return (
    <div className="w-full bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <Skeleton className="h-8 w-3/4 mb-4 bg-neutral-800" />
        <Skeleton className="h-4 w-1/2 bg-neutral-800" />
      </div>

      <div className="relative max-w-7xl mx-auto pb-20">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-600" />
              </div>
              <Skeleton className="hidden md:block h-8 w-40 md:ml-20 bg-neutral-800" />
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <Skeleton className="md:hidden h-6 w-40 mb-4 bg-neutral-800" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-neutral-800" />
                <Skeleton className="h-4 w-5/6 bg-neutral-800" />
                <Skeleton className="h-4 w-4/6 bg-neutral-800" />
              </div>
            </div>
          </div>
        ))}
        <div className="absolute md:left-8 left-8 top-0 h-full w-[2px] bg-neutral-800" />
      </div>
    </div>
  );
};

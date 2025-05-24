import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { DrawerContent } from "@/components/ui/drawer";
import PageContainer from "@/components/layout/page-container";
import { CardBody, CardContainer } from "@/components/ui/3d-card";

export function LicenseDrawerSkeleton() {
  return (
    <DrawerContent>
      <PageContainer scrollable>
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-br from-gray-800 to-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[16rem] rounded-xl p-6 border overflow-hidden before:content-[''] before:absolute before:top-4 before:left-5 before:w-12 before:h-8 before:bg-gradient-to-br before:from-yellow-400 before:to-yellow-200 before:rounded-md after:content-[''] after:absolute after:top-0 after:right-8 after:w-12 after:h-full after:bg-gradient-to-b after:from-gray-700 after:to-gray-800">
            <div className="mt-6">
              <Skeleton className="h-8 w-3/4 bg-white/20 mb-2" />
              <Skeleton className="h-6 w-1/2 bg-white/20" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-full bg-white/20" />
              <Skeleton className="h-4 w-full bg-white/20" />
            </div>
            <Skeleton className="h-6 w-1/4 bg-white/20 mt-2" />
          </CardBody>
        </CardContainer>

        {/* Payment History Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/4" />
          <div className="border rounded-md">
            <div className="border-b p-4">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-1/6" />
                <Skeleton className="h-4 w-1/6" />
                <Skeleton className="h-4 w-1/6" />
              </div>
            </div>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-4 border-b last:border-b-0">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-1/6" />
                  <Skeleton className="h-4 w-1/6" />
                  <Skeleton className="h-4 w-1/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </DrawerContent>
  );
}

"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/seprator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import PageContainer from "@/components/layout/page-container";

const steps = ["Basic Details", "Features", "Plans"];

export default function ServicePageSkeleton() {
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>

        {/* Heading Skeleton */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>

        <Separator />

        {/* Form Skeleton */}
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-8">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{index + 1}</div>
                  <span className="ml-2 text-sm font-medium">{step}</span>
                  {index < steps.length - 1 && <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />}
                </div>
              ))}
            </div>

            {/* Basic Information Card */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full max-w-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-24 w-full max-w-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full max-w-md" />
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button disabled>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

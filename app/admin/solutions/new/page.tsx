"use client";

import NewSolutionForm from "@/components/sections/admin/solutions/new-solution-form/newSolutionForm";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import NewSolutionFormSkeleton from "./skeleton";
import fetcher from "@/fetcher";
import useSWR from "swr";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Solutions", link: "/admin/solutions" },
  { title: "New", link: "/admin/solutions/new" },
];

export default function AdminNewSolutionPage() {
  const { data, isLoading } = useSWR("/api/admin/categories", fetcher);

  if (isLoading) return <NewSolutionFormSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Create New Solutions`} description="Add Details For New Solutions" />
        </div>
        <Separator />
        <NewSolutionForm categories={data} />
      </div>
    </PageContainer>
  );
}

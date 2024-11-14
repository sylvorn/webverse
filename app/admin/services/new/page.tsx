"use client";
import NewServiceForm from "@/sections/admin/service/new-service-form/newServiceForm";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import NewServiceFormSkeleton from "./skeleton";
import fetcher from "@/fetcher";
import useSWR from "swr";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Services", link: "/admin/services" },
  { title: "New", link: "/admin/services/new" },
];

export default function AdminNewServicePage() {
  const { data, isLoading } = useSWR("/api/admin/categories", fetcher);

  if (isLoading) return <NewServiceFormSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Create New Service`} description="Add Details For New Service" />
        </div>
        <Separator />
        <NewServiceForm categories={data} />
      </div>
    </PageContainer>
  );
}

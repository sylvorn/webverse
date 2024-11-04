"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import PaymentPageSkeleton from "./skeleton";

const breadcrumbItems = [
  { title: "Dashboard", link: "/client/dashboard" },
  { title: "Payments", link: "/client/payments" },
];

export default function () {
  const { data, isLoading } = useSWR("/api/client/payments", fetcher);

  if (isLoading) return <PaymentPageSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Payments - ${data.length}`} description="Manage Payments Details" />
        </div>
        <Separator />
        <DataTable data={data} columns={columns} />
      </div>
    </PageContainer>
  );
}

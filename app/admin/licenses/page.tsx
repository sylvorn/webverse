"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import LicensePageSkeleton from "./skeleton";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import fetcher from "@/fetcher";
import Link from "next/link";
import useSWR from "swr";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Licenses", link: "/admin/licenses" },
];

export default function () {
  const { data, isLoading } = useSWR("/api/admin/licenses", fetcher);

  if (isLoading) return <LicensePageSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Licenses - ${data.length}`} description="Manage Licenses Details" />
        </div>
        <Separator />
        <DataTable data={data} columns={columns} />
      </div>
    </PageContainer>
  );
}

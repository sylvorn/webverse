"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import fetcher from "@/fetcher";
import Link from "next/link";
import useSWR from "swr";
import SolutionsPageSkeleton from "./skeleton";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Solutions", link: "/admin/solutions" },
];

export default function AdminServicePage() {
  const { data, isLoading } = useSWR("/api/admin/solutions", fetcher);

  if (isLoading) return <SolutionsPageSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Solutions - ${data.length}`} description="Manage Solutions Details" />

          <Link href={"/admin/solutions/new"} className={cn(buttonVariants({ variant: "default" }))}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <DataTable data={data} columns={columns} />
      </div>
    </PageContainer>
  );
}

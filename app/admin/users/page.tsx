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
import UserPageSkeleton from "./skeleton";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Users", link: "/admin/users" },
];

export default function () {
  const { data, isLoading } = useSWR("/api/admin/users", fetcher);

  if (isLoading) return <UserPageSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Users - ${data.length}`} description="Manage Users Details" />

          <Link href={"/admin/users/new"} className={cn(buttonVariants({ variant: "default" }))}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <DataTable data={data} columns={columns} />
      </div>
    </PageContainer>
  );
}

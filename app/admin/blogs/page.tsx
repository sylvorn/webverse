"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import LicensePageSkeleton from "./skeleton";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Blogs", link: "/admin/blogs" },
];

export default function AdminBlogPage() {
  const { data, isLoading } = useSWR("/api/admin/blogs", fetcher);

  if (isLoading) return <LicensePageSkeleton />;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Blogs - ${data.length}`} description="Manage Blogs Details" />
          <Link href={"/admin/blogs/new"} className={cn(buttonVariants({ variant: "default" }))}>
            <Plus className="mr-2 h-4 w-4" /> Add Blog
          </Link>
        </div>
        <Separator />
        <DataTable data={data} columns={columns} />
      </div>
    </PageContainer>
  );
}

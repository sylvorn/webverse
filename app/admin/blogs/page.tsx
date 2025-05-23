"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import LicensePageSkeleton from "./skeleton";
import { DataTable } from "@/components/global/DataTable";
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
        <DataTable
          data={data}
          columns={columns}
          search={{ column: "title", placeholder: "Search Title" }}
          filter={{
            column: "published",
            placeholder: "Select a Published",
            options: [
              { value: "all", label: "All Status" },
              { value: "Published", label: "Published" },
              { value: "Draft", label: "Draft" },
            ],
          }}
          noData={{
            icon: <div className="rounded-full bg-primary/10 p-3"></div>,
            title: "No results found",
            description: "There are no users matching your search criteria.",
          }}
        />
      </div>
    </PageContainer>
  );
}

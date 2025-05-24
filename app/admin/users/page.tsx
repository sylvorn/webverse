"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { DataTable } from "@/components/global/DataTable";
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

export default function AdminUsersPage() {
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
        <DataTable
          data={data}
          columns={columns}
          search={{ column: "email", placeholder: "Search Email" }}
          filter={{
            column: "role",
            placeholder: "Select a role",
            options: [
              { value: "all", label: "All Roles" },
              { value: "Admin", label: "Admin" },
              { value: "Client", label: "Client" },
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

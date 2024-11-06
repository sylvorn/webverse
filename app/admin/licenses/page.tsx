"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { Drawer } from "@/components/ui/drawer";
import LicensePageSkeleton from "./skeleton";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import LicenseDetails from "@/sections/admin/licenses/licensesDetails";

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
        <Drawer>
          <DataTable data={data} columns={columns} />
          <LicenseDetails />
        </Drawer>
      </div>
    </PageContainer>
  );
}

"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { Drawer } from "@/components/ui/drawer";
import LicensePageSkeleton from "./skeleton";
import { DataTable } from "@/components/global/DataTable";
import { columns } from "./columns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import LicenseDetails from "@/components/sections/admin/licenses/licensesDetails";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Licenses", link: "/admin/licenses" },
];

export default function AdminLicensePage() {
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
          <DataTable
            data={data}
            columns={columns}
            search={{
              column: "licenseKey",
              placeholder: "Search License Key",
            }}
            filter={{
              column: "status",
              placeholder: "Select a status",
              options: [
                { value: "all", label: "All Status" },
                { value: "Active", label: "Active" },
                { value: "Pending", label: "Pending" },
                { value: "Expired", label: "Expired" },
              ],
            }}
            noData={{
              icon: <div className="rounded-full bg-primary/10 p-3"></div>,
              title: "No results found",
              description: "There are no users matching your search criteria.",
            }}
          />
          <LicenseDetails />
        </Drawer>
      </div>
    </PageContainer>
  );
}

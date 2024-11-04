"use client";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";
import { DataTable } from "./data-table";
import { columns, License } from "./columns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import PaymentPageSkeleton from "./skeleton";
import LicenseKeyCard from "@/sections/client/licenses-card/licensesCard";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { paymentColumns } from "./paymentsColumns";
import { useState } from "react";

const breadcrumbItems = [
  { title: "Dashboard", link: "/client/dashboard" },
  { title: "Licenses", link: "/client/licenses" },
];

export default function () {
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const { data, isLoading } = useSWR("/api/client/licenses", fetcher);

  if (isLoading) return <PaymentPageSkeleton />;

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

          <DrawerContent>
            <PageContainer scrollable>
              <DrawerHeader>
                <DrawerTitle>License Details</DrawerTitle>
              </DrawerHeader>
              <div className="p-1">
                <LicenseKeyCard />
                <h3 className="text-lg font-semibold">Payment History</h3>
                <DataTable columns={paymentColumns} data={[]} />
              </div>
            </PageContainer>
          </DrawerContent>
        </Drawer>
      </div>
    </PageContainer>
  );
}

"use client";
import { LicenseDrawerSkeleton } from "@/sections/admin/licenses/LicensesDetailSkeleton";
import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { paymentColumns } from "@/sections/admin/licenses/paymentsColumns";
import PageContainer from "@/components/layout/page-container";
import { DataTable } from "@/app/client/licenses/data-table";
import LicenseKeyCard from "../licenses-card/licensesCard";
import { selectedLicense } from "@/store/atoms";
import { useRecoilValue } from "recoil";
import fetcher from "@/fetcher";
import useSWR from "swr";

export default function LicenseDetails() {
  const selectedLicenseId = useRecoilValue(selectedLicense);
  const { data, isLoading } = useSWR(`/api/client/licenses/${selectedLicenseId}`, fetcher);

  if (isLoading) return <LicenseDrawerSkeleton />;

  return (
    <DrawerContent>
      <PageContainer scrollable>
        <DrawerHeader>
          <DrawerTitle>License Details</DrawerTitle>
        </DrawerHeader>
        <div className="p-1">
          <LicenseKeyCard softwareName={data.serviceName} licenseKey={data.licenseKey} buyDate={data.buyDate} expiryDate={data.expiryDate} status={data.status} planName={data.planName} />
          <h3 className="text-lg font-semibold">Payment History</h3>
          <DataTable columns={paymentColumns} data={data.paymentsHistory} />
        </div>
      </PageContainer>
    </DrawerContent>
  );
}

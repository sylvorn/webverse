"use client";
import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import LicenseKeyCard from "@/sections/client/licenses-card/licensesCard";
import PageContainer from "@/components/layout/page-container";
import { DataTable } from "@/app/admin/licenses/data-table";
import { paymentColumns } from "./paymentsColumns";
import fetcher from "@/fetcher";
import useSWR from "swr";
import { useRecoilValue } from "recoil";
import { selectedLicense } from "@/store/atoms";
import { LicenseDrawerSkeleton } from "./LicensesDetailSkeleton";

export default function LicenseDetails() {
  const selectedLicenseId = useRecoilValue(selectedLicense);
  const { data, isLoading } = useSWR(`/api/admin/licenses/${selectedLicenseId}`, fetcher);

  if (isLoading) return <LicenseDrawerSkeleton />;

  return (
    <DrawerContent>
      <PageContainer scrollable>
        <DrawerHeader>
          <DrawerTitle>License Details</DrawerTitle>
        </DrawerHeader>
        <div className="p-1">
          <LicenseKeyCard softwareName={data.solutionName} licenseKey={data.licenseKey} buyDate={data.buyDate} expiryDate={data.expiryDate} status={data.status} planName={data.planName} />
          <h3 className="text-lg font-semibold">Payment History</h3>
          <DataTable columns={paymentColumns} data={data.paymentsHistory} />
        </div>
      </PageContainer>
    </DrawerContent>
  );
}

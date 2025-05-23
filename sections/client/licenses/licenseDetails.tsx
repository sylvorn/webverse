"use client";
import { LicenseDrawerSkeleton } from "@/sections/admin/licenses/LicensesDetailSkeleton";
import { DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { paymentColumns } from "@/sections/admin/licenses/paymentsColumns";
import PageContainer from "@/components/layout/page-container";
import { DataTable } from "@/app/client/licenses/data-table";
import LicenseKeyCard from "../licenses-card/licensesCard";
import { selectedLicense } from "@/store/atoms";
import fetcher from "@/fetcher";
import useSWR from "swr";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { useAtomValue } from "jotai";

export default function LicenseDetails() {
  const cardRef = useRef(null);
  const selectedLicenseId = useAtomValue(selectedLicense);
  const { data, isLoading } = useSWR(`/api/client/licenses/${selectedLicenseId}`, fetcher);

  if (isLoading) return <LicenseDrawerSkeleton />;

  const downloadLicenseImage = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current, { pixelRatio: 20 });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${data.solutionName} - License - sylvorn.png`;
        link.click();
      } catch (error) {
        console.error("Failed to generate image:", error);
      }
    }
  };

  return (
    <DrawerContent>
      <PageContainer scrollable>
        <DrawerHeader className="flex justify-between items-center">
          <DrawerTitle>License Details</DrawerTitle>
          <Button onClick={downloadLicenseImage}>Download License Key</Button>
        </DrawerHeader>
        <div className="p-1">
          <div ref={cardRef}>
            <LicenseKeyCard softwareName={data.serviceName} licenseKey={data.licenseKey} buyDate={data.buyDate} expiryDate={data.expiryDate} status={data.status} planName={data.planName} />
          </div>
          <h3 className="text-lg font-semibold">Payment History</h3>
          <DataTable columns={paymentColumns} data={data.paymentsHistory} />
        </div>
      </PageContainer>
    </DrawerContent>
  );
}

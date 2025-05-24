"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

interface LicenseKeyCardProps {
  softwareName?: string;
  licenseKey?: string;
  buyDate?: string;
  expiryDate?: string;
  status?: "Active" | "Expired" | "Suspended";
  planName?: string;
}

export default function LicenseKeyCard({ softwareName = "Awesome Software", licenseKey = "XXXX-XXXX-XXXX-XXXX", buyDate = "2023-01-01", expiryDate = "2024-01-01", status = "Active", planName = "Pro Plan" }: LicenseKeyCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Expired":
        return "bg-red-500";
      case "Suspended":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-gray-800 to-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[16rem] rounded-xl p-6 border overflow-hidden before:content-[''] before:absolute before:top-4 before:left-5 before:w-12 before:h-8 before:bg-gradient-to-br before:from-yellow-400 before:to-yellow-200 before:rounded-md after:content-[''] after:absolute after:top-0 after:right-8 after:w-12 after:h-full after:bg-gradient-to-b after:from-gray-700 after:to-gray-800">
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <CardItem translateZ="50" className="text-2xl font-bold text-white mb-2 mt-5">
              {softwareName}
            </CardItem>
            <CardItem translateZ="60" className="text-white text-lg font-mono mb-4">
              {licenseKey}
            </CardItem>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <CardItem translateZ="40" className="text-white text-xs">
                <span className="font-semibold">Buy Date:</span> {dayjs(buyDate).format("DD MMM YYYY").toString()}
              </CardItem>
              <CardItem translateZ="40" className="text-white text-xs">
                <span className="font-semibold">Expiry:</span> {dayjs(expiryDate).format("DD MMM YYYY").toString()}
              </CardItem>
              <CardItem translateZ="40" className="text-white text-xs">
                <span className="font-semibold">Plan:</span> {planName}
              </CardItem>
              <CardItem translateZ="40" className="text-white text-xs">
                <span className="font-semibold">Status:</span>
                <Badge className={`${getStatusColor(status)} text-white ml-1`}>{status}</Badge>
              </CardItem>
            </div>
            <CardItem translateZ="50" className="text-white text-sm font-semibold">
              License Key
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

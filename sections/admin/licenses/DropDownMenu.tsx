import { License } from "@/app/admin/licenses/columns";
import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { selectedLicense } from "@/store/atoms";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useSetRecoilState } from "recoil";

export default function LicenseDropdownMenu({ row }: { row: Row<License> }) {
  const setSelectedLicense = useSetRecoilState(selectedLicense);
  const license = row.original;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => console.log("Renew", license)}>Renew</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setSelectedLicense(row.getValue("id"))}>
          <DrawerTrigger asChild>
            <span>View Details</span>
          </DrawerTrigger>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

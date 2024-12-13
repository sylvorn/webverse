import { ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { DrawerTrigger } from "@/components/ui/drawer";
import { selectedLicense } from "@/store/atoms";
import { Row, SortingState } from "@tanstack/react-table";
import { useSetRecoilState } from "recoil";

export default function AdminLicenseContextMenu({ row }: { row: Row<any> }) {
  const setSelectedLicense = useSetRecoilState(selectedLicense);
  const license = row.original;
  return (
    <>
      <ContextMenuContent>
        <ContextMenuItem>Renew</ContextMenuItem>
        <ContextMenuItem>
          <DrawerTrigger asChild onClick={() => setSelectedLicense(license.id)}>
            <span>View Details</span>
          </DrawerTrigger>
        </ContextMenuItem>
      </ContextMenuContent>
    </>
  );
}

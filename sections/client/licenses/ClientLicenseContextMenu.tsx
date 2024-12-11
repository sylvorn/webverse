import { ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { DrawerTrigger } from "@/components/ui/drawer";
import React from "react";

export default function ClientLicenseContextMenu() {
  return (
    <>
      <ContextMenuContent>
        <ContextMenuItem>Renew</ContextMenuItem>
        <ContextMenuItem>
          <DrawerTrigger asChild>
            <span>View Details</span>
          </DrawerTrigger>
        </ContextMenuItem>
      </ContextMenuContent>
    </>
  );
}

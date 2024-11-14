"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { DrawerTrigger } from "@/components/ui/drawer";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import { useSetRecoilState } from "recoil";
import { selectedLicense } from "@/store/atoms";

export type License = {
  id: string;
  serviceName: string;
  licenseKey: string;
  status: "Pending" | "Active" | "Expired";
  expiryDate: Date;
  createdAt: Date;
  planName: string;
  planDuration: number;
};

export const columns: ColumnDef<License>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => {
      return row.getValue<string>("id").slice(0, 7) + "...";
    },
  },
  {
    accessorKey: "serviceName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Service Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "licenseKey",
    header: "License Key",
    cell: ({ row }) => {
      return row.getValue<string>("licenseKey").slice(0, 7) + "-XXX-XXXX-XXX";
    },
  },
  {
    accessorKey: "expiryDate",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Expiry Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("expiryDate")).format("DD MMM YYYY").toString();
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Buy Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("createdAt")).format("DD MMM YYYY").toString();
    },
  },
  {
    accessorKey: "planName",
    header: "Plan Name",
  },
  {
    accessorKey: "planDuration",
    header: "Plan Duration (In Months)",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge className={row.getValue("status") === "Active" ? "bg-green-500" : row.getValue("status") === "Pending" ? "bg-yellow-500" : "bg-red-500"}>{row.getValue("status")}</Badge>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
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
    },
  },
];

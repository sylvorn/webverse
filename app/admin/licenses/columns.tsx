"use client";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import LicenseDropdownMenu from "@/sections/admin/licenses/DropDownMenu";

export type License = {
  id: string;
  solutionName: string;
  licenseKey: string;
  status: "Pending" | "Active" | "Expired";
  createdAt: string;
  expiryDate: string;
  userEmail: string;
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
    accessorKey: "solutionName",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Solution
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
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Start Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("createdAt")).format("DD MMM YYYY").toString();
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
    accessorKey: "userEmail",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          User Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return <LicenseDropdownMenu row={row} />;
    },
  },
];

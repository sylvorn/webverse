"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";

export type License = {
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
      return dayjs(row.getValue("paymentDate")).format("D MM YYYY").toString();
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
      return dayjs(row.getValue("paymentDate")).format("D MM YYYY").toString();
    },
  },
  {
    accessorKey: "planName",
    header: "Plan Name",
  },
  {
    accessorKey: "planDuration",
    header: "Plane Duration (In Months)",
  },
  {
    accessorKey: "status",
    header: "Payment Status",
    cell: ({ row }) => {
      return <Badge className={row.getValue("status") === "Active" ? "bg-green-500" : row.getValue("status") === "Pending" ? "bg-yellow-500" : "bg-red-500"}>{row.getValue("status")}</Badge>;
    },
  },
];

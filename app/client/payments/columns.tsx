"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import { ArrowUpDown } from "lucide-react";

export type License = {
  serviceName: string;
  amount: number;
  status: "Pending" | "Completed" | "Failed";
  paymentDate: Date;
  method: string | null;
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
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "paymentDate",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Payment Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("paymentDate")).format("D MM YYYY").toString();
    },
  },
  {
    accessorKey: "status",
    header: "Payment Status",
    cell: ({ row }) => {
      return <Badge className={row.getValue("status") === "Completed" ? "bg-green-500" : row.getValue("status") === "Pending" ? "bg-yellow-500" : "bg-red-500"}>{row.getValue("status")}</Badge>;
    },
  },
];

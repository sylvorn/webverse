import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

type Payment = {
  id: string;
  amount: number;
  date: Date;
  status: "Completed" | "Pending" | "Failed";
};

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return `$${row.getValue("amount")}`;
    },
  },
  {
    accessorKey: "date",
    header: "Payment Date",
    cell: ({ row }) => {
      return dayjs(row.getValue("date")).format("D MMM YYYY").toString();
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge className={row.getValue("status") === "Completed" ? "bg-green-500" : row.getValue("status") === "Pending" ? "bg-yellow-500" : "bg-red-500"}>{row.getValue("status")}</Badge>;
    },
  },
];

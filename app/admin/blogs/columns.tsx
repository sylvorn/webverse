"use client";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import LicenseDropdownMenu from "@/sections/admin/licenses/DropDownMenu";
import { Badge } from "@/components/ui/badge";

export type Blog = {
  id: string;
  title: string;
  brief: string;
  author: string;
  clap: number;
  comments: number;
  published: boolean;
  createdAt: Date;
};

export const columns: ColumnDef<Blog>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "brief",
    header: "Brief",
    // cell: ({ row }) => {
    //   return row.getValue<string>("brief").slice(0, 100) + "...";
    // },
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "clap",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Claps
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "comments",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Comments
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      return <Badge className={row.getValue("published") === true ? "bg-green-500" : "bg-gray-500"}>{row.getValue("published") === true ? "Published" : "Draft"}</Badge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Published Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return dayjs(row.getValue("createdAt")).format("DD MMM YYYY").toString();
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return;
    },
  },
];

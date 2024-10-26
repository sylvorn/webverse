"use client";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircleIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { auth } from "@/auth";
import useSWR from "swr";
import fetcher from "@/fetcher";
import dayjs from "dayjs";

interface ProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  role: "Admin" | "Client";
  verified: boolean;
  joinDate: string;
}

//{ firstName = "Shree", lastName = "Ram", email = "shreeRam@gmail.com", mobile = "U2hyZWUgUmFt", role = "Admin", verified = true, joinDate = "January 10, 5114 BCE" }

export default function ProfilePage() {
  const { data, isLoading } = useSWR("/api/profile", fetcher);

  if (isLoading) return "Loading";

  return (
    <Card className="w-full max-w-xl p-6 shadow-lg rounded-lg">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar className="w-20 h-20">
          <AvatarFallback>
            {data.fname[0]}
            {data.lname[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">
            {data.fname} {data.lname}
          </h1>
          <div className="flex items-center space-x-2">
            <Badge color="green">
              <CheckCircleIcon className="w-5 h-5 inline-block mr-1" />
              {data.isVerify ? "Verified" : "Not Verified"}
            </Badge>
            <span className="text-sm text-gray-500">Joined on {dayjs(data.createdAt).format("MMM D, YYYY")}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* First Name */}
        <div>
          <Label htmlFor="firstName" className="text-gray-600">
            First Name
          </Label>
          <Input type="text" id="firstName" value={data.fname} readOnly className="mt-1 rounded w-full p-2" />
        </div>

        {/* Last Name */}
        <div>
          <Label htmlFor="lastName" className="text-gray-600">
            Last Name
          </Label>
          <Input type="text" id="lastName" value={data.lname} readOnly className="mt-1 rounded w-full p-2" />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-gray-600">
            Email
          </Label>
          <Input type="email" id="email" value={data.email} readOnly className="mt-1 rounded w-full p-2" />
        </div>

        {/* Mobile Number */}
        <div>
          <Label htmlFor="mobile" className="text-gray-600">
            Mobile Number
          </Label>
          <Input type="tel" id="mobile" value={data.mobile} readOnly className="mt-1 rounded w-full p-2" />
        </div>

        {/* Role */}
        <div>
          <Label htmlFor="role" className="text-gray-600">
            Role
          </Label>
          <Input type="text" id="role" value={data.role} readOnly className="mt-1 rounded w-full p-2" />
        </div>
      </div>
    </Card>
  );
}

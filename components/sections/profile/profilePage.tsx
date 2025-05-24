"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSection from "./profile-section";
import useSWR from "swr";
import fetcher from "@/fetcher";
import dayjs from "dayjs";
import ProfilePageSkeleton from "./profile-skeleton";
import AppearanceSection from "./apperance-section";
import NotificationSection from "./notifications-section";
import SecuritySection from "./security-section";

export default function ProfilePage() {
  const { data, isLoading } = useSWR("/api/profile", fetcher);

  if (isLoading) return <ProfilePageSkeleton />;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileSection firstName={data.fname} lastName={data.lname} email={data.email} mobile={data.mobile} role={data.role} createdAt={dayjs(data.createdAt).format("DD MMM YYYY").toString()} />
        </TabsContent>

        <TabsContent value="appearance">
          <AppearanceSection />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSection marketing={data.marketingEmails} security={data.securityEmails} newsletter={data.updatesEmails} />
        </TabsContent>

        <TabsContent value="security">
          <SecuritySection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

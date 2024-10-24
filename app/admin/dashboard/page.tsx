import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageContainer from "@/components/layout/page-container";
import OverViewPage from "@/sections/admin/dashboard/overview/page";
import { auth } from "@/auth";

export default async function () {
  const session = await auth();

  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Hey {session?.user.fname}, hope you're having a great day! 🌻</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <OverViewPage />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}

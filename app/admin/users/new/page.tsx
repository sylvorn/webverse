import NewUserForm from "@/sections/admin/users/new-user-form";
import PageContainer from "@/components/layout/page-container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/seprator";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Users", link: "/admin/users" },
  { title: "New", link: "/admin/services/new" },
];

export default function AdminNewUserPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading title={`Create New User`} description="Add Details For New User" />
        </div>
        <Separator />
        <NewUserForm />
      </div>
    </PageContainer>
  );
}

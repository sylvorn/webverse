import PageContainer from "@/components/layout/page-container";
import ProfilePage from "@/components/sections/profile/profilePage";

export default function AdminProfilePage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <ProfilePage />
      </div>
    </PageContainer>
  );
}

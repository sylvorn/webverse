import PageContainer from "@/components/layout/page-container";
import LogoutPage from "@/sections/logout/logOut";

export const runtime = "edge";

export default function () {
  return (
    <PageContainer scrollable>
      <LogoutPage />
    </PageContainer>
  );
}

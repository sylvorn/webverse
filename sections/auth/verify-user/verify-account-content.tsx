import SignInViewPage from "@/sections/auth/view/warpper";
import VerifyUserForm from "@/sections/auth/verify-user/verify-user-form";
import { useSearchParams } from "next/navigation";

export default function VerifyAccountContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return <SignInViewPage formComponent={<VerifyUserForm email={email || ""} />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Verify The Account" descText="Enter your OTP below to verify your account" />;
}

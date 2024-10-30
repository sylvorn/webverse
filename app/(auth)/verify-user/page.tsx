"use client";

import SignInViewPage from "@/sections/auth/view/wrapper";
import VerifyUserForm from "@/sections/auth/verify-user/verify-user-form";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function VerifyAccountPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInViewPage formComponent={<VerifyUserForm email={email || ""} />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Verify The Account" descText="Enter your otp below to verify your account" />
    </Suspense>
  );
}

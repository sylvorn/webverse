"use client";
import SignInViewPage from "@/components/sections/auth/view/warpper";
import VerifyUserForm from "@/components/sections/auth/verify-user/verify-user-form";
import { Suspense } from "react";

export default function VerifyUserPage() {
  return (
    <Suspense fallback="Loading">
      <SignInViewPage formComponent={<VerifyUserForm />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Verify The Account" descText="Enter your otp below to verify your account" />
    </Suspense>
  );
}

import RegisterForm from "@/sections/auth/register/register-form";
import SignInViewPage from "@/sections/auth/view/warpper";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Signup to Sylvorn - Start Your Journey",
  description: "Create your account with Sylvorn to access our services and solutions. Quick and easy registration.",
  keywords: ["Signup Sylvorn", "User Registration", "IT Services"],
  category: "Signup, User Registration",
  openGraph: {
    title: "Signup to Sylvorn",
    description: "Sign up for quick access to premium IT services and solutions.",
  },
};

export default function Page() {
  return (
    <Suspense fallback="Loading">
      <SignInViewPage formComponent={<RegisterForm />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Create The Account" descText="Enter your email below to create your account" />
    </Suspense>
  );
}

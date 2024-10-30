import RegisterForm from "@/sections/auth/register/register-form";
import SignInViewPage from "@/sections/auth/view/warpper";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Authentication | Register",
  description: "Create Your Account",
};

export default function Page() {
  return <SignInViewPage formComponent={<RegisterForm />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Create The Account" descText="Enter your email below to create your account" />;
}

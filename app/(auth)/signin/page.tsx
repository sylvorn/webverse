import LoginForm from "@/sections/auth/login/login-form";
import SignInViewPage from "@/sections/auth/view/warpper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Sylvorn - Access Your Dashboard",
  description: "Securely login to Sylvorn and manage your services effortlessly. We value your privacy.",
  keywords: ["Login Sylvorn", "Secure Access", "User Dashboard"],
  category: "Login, User Authentication",
  openGraph: {
    title: "Login to Sylvorn",
    description: "Access your dashboard and manage IT services securely.",
  },
};

export default function Page() {
  return <SignInViewPage formComponent={<LoginForm />} quote="Technology is ruled by two types of people: those who manage what they do not understand, and those who understand what they do not manage." author="Make Trout" headText="Login To Account" descText="Enter your email below to login your account" />;
}

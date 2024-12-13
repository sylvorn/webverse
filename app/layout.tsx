import { RecoilContextProvider } from "@/sections/layout/RecoilContextProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavbar } from "@/sections/navbar/navbar";
import { Footer } from "@/sections/footer/footer";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sylvorn - Innovative IT Solutions and SaaS Development",
  description: "Sylvorn delivers cutting-edge IT services, custom software development, and SaaS solutions. Empower your business with our expertise.",
  keywords: ["Sylvorn", "IT Solutions", "SaaS Development", "Custom Software", "Technology Services"],
  category: "IT Solutions, Technology, Software Development",
  applicationName: "Sylvorn - IT Solutions & SaaS Development",
  creator: "Sylvorn",
  authors: [
    {
      name: "Ravi Sorathiya",
      url: "https://www.linkedin.com/in/ravi-vaniya-319815302",
    },
    {
      name: "Jenil Desai",
      url: "https://www.linkedin.com/in/desaijenil",
    },
  ],
  openGraph: {
    title: "Sylvorn - Innovative IT Solutions",
    description: "Explore top-notch IT services, software development, and SaaS solutions by Sylvorn.",
    siteName: "Sylvorn",
    countryName: "india",
    url: "https://www.prayaminfosoft.com",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased scrollbar-hide`}>
        <RecoilContextProvider>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <FloatingNavbar />
              {children}
              <Footer />
            </ThemeProvider>
          </SessionProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}

import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNavbar } from "@/sections/navbar/navbar";
import { Footer } from "@/sections/footer/footer";
import { SessionProvider } from "next-auth/react";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { RecoilContextProvider } from "@/sections/layout/RecoilContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prayam Infosoft - Innovative IT Solutions and SaaS Development",
  description: "Prayam Infosoft delivers cutting-edge IT services, custom software development, and SaaS solutions. Empower your business with our expertise.",
  keywords: ["Prayam Infosoft", "IT Solutions", "SaaS Development", "Custom Software", "Technology Services"],
  category: "IT Solutions, Technology, Software Development",
  applicationName: "Prayam Infosoft - IT Solutions & SaaS Development",
  creator: "Prayam Infosoft",
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
    title: "Prayam Infosoft - Innovative IT Solutions",
    description: "Explore top-notch IT services, software development, and SaaS solutions by Prayam Infosoft.",
    siteName: "Prayam Infosoft",
    countryName: "india",
    url: "https://www.prayaminfosoft.com",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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

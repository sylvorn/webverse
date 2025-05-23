import { FloatingNavbar } from "@/components/global/navbar/navbar";
import Providers from "@/components/global/Providers";
import { Footer } from "@/components/global/footer/footer";
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
        <Providers>
          <FloatingNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

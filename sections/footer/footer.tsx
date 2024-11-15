"use client";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isClientRoute = pathname.startsWith("/client");
  const shouldHideNavbarFooter = isAdminRoute || isClientRoute;
  if (shouldHideNavbarFooter) {
    return null;
  }

  return (
    <footer className="bg-black/[0.95] antialiased bg-grid-white/[0.02] border-t border-gray-800 text-center sm:text-left">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 justify-items-center">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="font-bold text-xl text-white">Prayam Infosoft</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">Empowering your digital journey.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-white">Connect With Us</h3>
            <div className="flex space-x-4 justify-center items-center">
              {/* <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button> */}
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                <Link href="https://www.linkedin.com/company/prayam-infosoft" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                <Link href="https://github.com/Prayam-Infosoft" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-4">
          <p className="text-sm text-center text-gray-400">© {new Date().getFullYear()} Prayam Infosoft. All rights reserved.</p>
        </div>
      </div>

      <div className="h-[21rem] flex items-center justify-center">
        <TextHoverEffect text="PRAYAM INFOSOFT" />
      </div>
    </footer>
  );
}

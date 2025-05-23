"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import { Provider } from "jotai";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </SessionProvider>
    </Provider>
  );
}

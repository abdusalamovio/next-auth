"use client";

import type { PropsWithChildren } from "react";
import { SessionProvider } from "./session-provider";
import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

export function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <ToastProvider />
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}

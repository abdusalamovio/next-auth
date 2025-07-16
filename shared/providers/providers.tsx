import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

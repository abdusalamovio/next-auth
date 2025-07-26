import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/shared/styles/globals.css";
import { RootProvider } from "@/shared/providers";
import { ToggleTheme } from "@/shared/ui";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Главная страница",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <RootProvider>
          <div className="relative flex min-h-screen">
            <ToggleTheme />
            <div className="flex h-screen w-full items-center justify-center px-4">
              {children}
            </div>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}

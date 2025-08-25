import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { FloatingNavDemo } from "@/components/navbar";
import SmoothScroll from "@/utils/smooth-scroll-lenis";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio of a Full-Stack MERN Developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <>
            <SmoothScroll />
            <FloatingNavDemo />

            {children}
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shered/PublicNavbar";
import Footer from "@/components/shered/PublicFooter";
import { Toaster } from "sonner";
import LoginSuccessToast from "@/components/shered/LoginSuccessToast";
import { Suspense } from "react";
import LogoutSuccessToast from "@/components/shered/LogoutSuccessToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pos System",
  description: "Pos system by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50">
          <Navbar/>
        </div>
        <div className="min-h-dvh">
          {children}
        </div>
        <Toaster position="bottom-right" richColors/>
         <Suspense fallback={null}>
          <LoginSuccessToast />
           <LogoutSuccessToast/>
        </Suspense>
        <Footer/>
      </body>
    </html>
  );
}

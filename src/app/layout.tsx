import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timeso - Nền tảng quản lý nhân sự bằng AI",
  description:
    "Nền tảng quản lý nhân sự thông minh với AI - Chấm công, tính lương, quản lý ca kíp tự động",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-white font-sans text-[#101828] selection:bg-[#34D9D9]/30">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextTopLoader color="#01CFCF" showSpinner={false} />
        <div className="min-h-screen bg-white font-sans text-[#101828] selection:bg-[#34D9D9]/30">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

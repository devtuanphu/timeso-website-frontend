import type { Metadata } from "next";
import { getChamCong, getStrapiMediaUrl } from "@/lib/strapi";
import { AttendancePageClient } from "@/components/pages/AttendancePageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Chấm Công Thông Minh - Timeso",
  description:
    "Giải pháp chấm công bằng AI, nhận diện khuôn mặt, GPS và WiFi. Tự động hóa quy trình quản lý thời gian làm việc.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getChamCong();
  const seo = data?.seo;

  return {
    title: seo?.tieu_de ?? DEFAULT_SEO.title,
    description: seo?.mo_ta ?? DEFAULT_SEO.description,
    keywords: seo?.tu_khoa,
    openGraph: {
      title: seo?.tieu_de ?? DEFAULT_SEO.title,
      description: seo?.mo_ta ?? DEFAULT_SEO.description,
      images: seo?.hinh_og ? [getStrapiMediaUrl(seo.hinh_og) ?? ""] : [],
    },
    alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
  };
}

export default async function AttendancePage() {
  const strapiData = await getChamCong();
  return <AttendancePageClient strapiData={strapiData} />;
}

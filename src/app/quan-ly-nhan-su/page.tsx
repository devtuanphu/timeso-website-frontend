import type { Metadata } from "next";
import { getQuanLyNhanSu, getStrapiMediaUrl } from "@/lib/strapi";
import { HRManagementPageClient } from "@/components/pages/HRManagementPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Quản Lý Nhân Sự - Timeso",
  description:
    "Giải pháp quản lý nhân sự toàn diện: hồ sơ nhân viên, phân quyền, đánh giá hiệu suất và báo cáo thông minh.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getQuanLyNhanSu();
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

export default async function HRManagementPage() {
  const strapiData = await getQuanLyNhanSu();
  return <HRManagementPageClient strapiData={strapiData} />;
}

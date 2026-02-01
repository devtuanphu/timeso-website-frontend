import type { Metadata } from "next";
import { getSapCaThongMinh, getStrapiMediaUrl } from "@/lib/strapi";
import { SmartSchedulingPageClient } from "@/components/pages/SmartSchedulingPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Sắp Ca Thông Minh - Timeso",
  description:
    "AI tối ưu lịch làm việc theo nhu cầu thực tế: giảm thiếu người, hạn chế trùng ca và tiết kiệm thời gian quản lý.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSapCaThongMinh();
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

export default async function SmartSchedulingPage() {
  const strapiData = await getSapCaThongMinh();
  return <SmartSchedulingPageClient strapiData={strapiData} />;
}

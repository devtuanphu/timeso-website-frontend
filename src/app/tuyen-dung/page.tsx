import type { Metadata } from "next";
import { getTuyenDung, getStrapiMediaUrl } from "@/lib/strapi";
import { RecruitmentPageClient } from "@/components/pages/RecruitmentPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Tuyển Dụng - Timeso",
  description: "Giải pháp tuyển dụng 4.0: tự động hóa từ lọc hồ sơ đến phỏng vấn với công nghệ AI.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTuyenDung();
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

export default async function RecruitmentPage() {
  const strapiData = await getTuyenDung();
  return <RecruitmentPageClient strapiData={strapiData} />;
}

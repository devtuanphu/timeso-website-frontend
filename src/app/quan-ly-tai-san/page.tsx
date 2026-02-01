import type { Metadata } from "next";
import { getQuanLyTaiSan, getStrapiMediaUrl } from "@/lib/strapi";
import { AssetManagementPageClient } from "@/components/pages/AssetManagementPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Quản Lý Tài Sản - Timeso",
  description:
    "Theo dõi tài sản, thiết bị và kho hàng một cách rõ ràng và chính xác. Giảm thất thoát và tối ưu chi phí vận hành.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getQuanLyTaiSan();
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

export default async function AssetManagementPage() {
  const strapiData = await getQuanLyTaiSan();
  return <AssetManagementPageClient strapiData={strapiData} />;
}

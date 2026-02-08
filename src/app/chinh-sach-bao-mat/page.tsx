import type { Metadata } from "next";
import { getChinhSachBaoMat, getStrapiMediaUrl } from "@/lib/strapi";
import { PrivacyPolicyPageClient } from "@/components/pages/PrivacyPolicyPageClient";

const DEFAULT_SEO = {
  title: "Chính Sách Bảo Mật - Timeso",
  description: "Chính sách bảo mật của Timeso — cam kết bảo vệ thông tin cá nhân của người dùng.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getChinhSachBaoMat();
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

export default async function PrivacyPolicyPage() {
  const strapiData = await getChinhSachBaoMat();
  return <PrivacyPolicyPageClient strapiData={strapiData} />;
}

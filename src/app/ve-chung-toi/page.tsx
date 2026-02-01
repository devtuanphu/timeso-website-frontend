import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";
import { getVeChungToi, getThanhViens, getStrapiMediaUrl } from "@/lib/strapi";

// Default SEO
const DEFAULT_SEO = {
  title: "Về Chúng Tôi - Timeso",
  description:
    "Tìm hiểu về Timeso - đội ngũ phát triển giải pháp quản lý nhân sự thông minh hàng đầu Việt Nam.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getVeChungToi();
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

export default async function AboutPage() {
  // Fetch page data and team members in parallel
  const [pageData, teamMembers] = await Promise.all([getVeChungToi(), getThanhViens()]);

  return <AboutPageClient strapiData={pageData} teamMembers={teamMembers} />;
}

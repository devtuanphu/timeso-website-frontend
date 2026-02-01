import type { Metadata } from "next";
import { getLienHe, getStrapiMediaUrl } from "@/lib/strapi";
import { ContactPageClient } from "@/components/pages/ContactPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Liên Hệ - Timeso",
  description:
    "Liên hệ với Timeso để được tư vấn giải pháp quản lý nhân sự phù hợp cho doanh nghiệp của bạn.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLienHe();
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

export default async function ContactPage() {
  const strapiData = await getLienHe();
  return <ContactPageClient strapiData={strapiData} />;
}

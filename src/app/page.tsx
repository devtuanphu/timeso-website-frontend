import type { Metadata } from "next";
import { getTrangChu, getStrapiMediaUrl } from "@/lib/strapi";
import { HomePageClient } from "@/components/pages/HomePageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Timeso - Giải pháp quản lý nhân sự thông minh",
  description:
    "Timeso - Phần mềm chấm công, quản lý ca làm việc, quản lý nhân sự, quản lý đơn hàng toàn diện cho doanh nghiệp.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTrangChu();
  console.log(data);
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

export default async function Home() {
  const strapiData = await getTrangChu();
  return <HomePageClient strapiData={strapiData} />;
}

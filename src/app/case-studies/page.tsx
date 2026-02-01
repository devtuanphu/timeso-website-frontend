import type { Metadata } from "next";
import { CaseStudiesPageClient } from "@/components/pages/CaseStudiesPageClient";
import { getTrangCaseStudy, getCaseStudies, getStrapiMediaUrl } from "@/lib/strapi";

// Default SEO
const DEFAULT_SEO = {
  title: "Case Studies - Timeso",
  description:
    "Khám phá các case study về việc triển khai Timeso tại các doanh nghiệp. Xem kết quả thực tế từ các khách hàng.",
};

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getTrangCaseStudy();
  const seo = pageData?.seo;

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

export default async function CaseStudiesPage() {
  // Fetch page config and case studies in parallel
  const [pageData, caseStudiesResult] = await Promise.all([
    getTrangCaseStudy(),
    getCaseStudies({ sort: "createdAt:desc", pagination: { pageSize: 20 } }),
  ]);

  const caseStudies = caseStudiesResult?.data ?? [];

  return <CaseStudiesPageClient pageData={pageData} caseStudies={caseStudies} />;
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudies, getStrapiMediaUrl } from "@/lib/strapi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Default SEO
const DEFAULT_SEO = {
  title: "Case Study - Timeso",
  description:
    "Khám phá case study chi tiết về việc triển khai Timeso tại các doanh nghiệp. Xem kết quả thực tế từ khách hàng.",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: DEFAULT_SEO.title,
      description: DEFAULT_SEO.description,
    };
  }

  const seo = caseStudy.seo;
  return {
    title: seo?.tieu_de ?? caseStudy.tieu_de ?? DEFAULT_SEO.title,
    description: seo?.mo_ta ?? caseStudy.mo_ta ?? DEFAULT_SEO.description,
    keywords: seo?.tu_khoa,
    openGraph: {
      title: seo?.tieu_de ?? caseStudy.tieu_de ?? DEFAULT_SEO.title,
      description: seo?.mo_ta ?? caseStudy.mo_ta ?? DEFAULT_SEO.description,
      images: caseStudy.hinh_dai_dien ? [getStrapiMediaUrl(caseStudy.hinh_dai_dien) ?? ""] : [],
    },
    alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  // Fetch related case studies
  const relatedResult = await getCaseStudies({
    pagination: { pageSize: 1 },
    filters: { slug: { $ne: slug } },
    sort: "publishedAt:desc",
  });
  const relatedCaseStudy = relatedResult?.data?.[0];

  // Extract data
  const title = caseStudy.tieu_de;
  const description = caseStudy.mo_ta ?? "";
  const content = caseStudy.noi_dung ?? "";
  const heroImage =
    getStrapiMediaUrl(caseStudy.hinh_dai_dien) ?? "/images/case-studies/default.png";
  const industry = caseStudy.nganh ?? "Case Study";
  const results = caseStudy.ket_qua ?? {};

  // Parse results into array
  const resultItems = Object.values(results).filter(Boolean);

  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-white px-4 pt-[100px] pb-6 md:px-8 md:pt-[160px] md:pb-10">
        <div className="mx-auto max-w-[1024px] text-center">
          <h1 className="mb-3 text-[20px] leading-tight font-bold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[48px] md:leading-[60px]">
            {title}
          </h1>
          <p className="mx-auto mb-4 max-w-[960px] text-sm leading-relaxed text-[#475467] md:mb-6 md:text-lg md:leading-[28px]">
            {description}
          </p>
          <span className="inline-block rounded-[24px] border border-[#00E2E2] px-3 py-1.5 text-xs font-medium text-[#005757] md:px-4 md:py-2 md:text-sm">
            {industry}
          </span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white px-4 pb-8 md:px-8 md:pb-12">
        <div className="mx-auto max-w-[920px]">
          <div className="overflow-hidden rounded-[16px] md:rounded-[24px]">
            <Image
              src={heroImage}
              alt={title}
              width={920}
              height={500}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-6 md:py-16">
        <div className="mx-auto max-w-[920px] px-4 md:px-8">
          {/* Render rich text content */}
          <div
            className="prose prose-lg prose-headings:text-[#101828] prose-headings:font-bold prose-p:text-[#475467] prose-a:text-[#01CFCF] prose-strong:text-[#101828] prose-ul:text-[#475467] prose-li:text-[#475467] max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Results Section */}
          {resultItems.length > 0 && (
            <div className="mt-8 md:mt-12">
              <h3 className="mb-3 text-base font-bold text-[#101828] md:mb-4 md:text-xl">
                Kết quả đạt được:
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {resultItems.map((result, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm md:gap-3 md:text-base">
                    <Check className="h-4 w-4 shrink-0 text-[#01CFCF] md:h-5 md:w-5" />
                    <span className="text-[#314242]">{result}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-[#475467] md:mt-8 md:text-base">
                Bạn muốn trải nghiệm thử tính năng AI sắp ca?{" "}
                <Link
                  href="#"
                  className="font-medium text-[#01CFCF] underline hover:text-[#005757]"
                >
                  Tải app miễn phí ngay!
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Case Studies Section */}
      {relatedCaseStudy && (
        <section className="bg-white py-8 md:py-16">
          <div className="mx-auto max-w-[1075px] px-4 md:px-8">
            <h2 className="mb-6 text-center text-xl font-bold text-[#101828] md:mb-8 md:text-[32px]">
              Case studies liên quan
            </h2>

            {/* Related Case Study Card */}
            <div className="flex flex-col gap-6 rounded-[16px] bg-[#EEEEEE] p-4 md:flex-row md:items-center md:gap-20 md:rounded-[24px] md:px-10 md:py-6">
              <div className="flex flex-1 flex-col gap-4 md:gap-6">
                <span className="w-fit rounded-[24px] border border-[#00E2E2] px-3 py-1.5 text-xs font-medium text-[#005757] md:px-4 md:py-2 md:text-sm">
                  {relatedCaseStudy.nganh ?? "Case Study"}
                </span>
                <div>
                  <h3 className="mb-1.5 text-xl font-bold text-[#314242] md:mb-2 md:text-[32px]">
                    {relatedCaseStudy.tieu_de}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[#314242] md:text-base">
                    {relatedCaseStudy.mo_ta}
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <Link
                    href="/lien-he"
                    className="text-sm font-medium text-[#101828] transition-colors hover:text-[#00BAC7] md:text-base"
                  >
                    Liên hệ
                  </Link>
                  <Link
                    href={`/case-studies/${relatedCaseStudy.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-[#01CFCF] transition-colors hover:text-[#005757] md:text-base"
                  >
                    Xem chi tiết
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-[#00E1E1] to-[#24BABB] md:h-8 md:w-8">
                      <ArrowRight className="h-3.5 w-3.5 text-white md:h-4 md:w-4" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] md:h-[300px] md:w-[375px] md:rounded-[24px]">
                <Image
                  src={
                    getStrapiMediaUrl(relatedCaseStudy.hinh_dai_dien) ??
                    "/images/case-studies/default.png"
                  }
                  alt={relatedCaseStudy.tieu_de}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#01CFCF] py-8 md:py-12">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="mb-2 text-xl font-bold text-white md:mb-4 md:text-3xl">
            TẢI MIỄN PHÍ NGAY
          </h2>
          <p className="mb-6 text-sm text-white/90 md:text-base">Mang liền trải nghiệm cho bạn!</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-white transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm font-medium">App Store</span>
            </Link>
            <Link
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-white transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <span className="text-sm font-medium">Google Play</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

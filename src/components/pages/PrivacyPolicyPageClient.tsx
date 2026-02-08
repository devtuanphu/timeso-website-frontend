"use client";

import { AnimatedHero, AnimatedPageSection } from "@/components/ui";
import type { ChinhSachBaoMatData } from "@/types/strapi";

interface PrivacyPolicyPageClientProps {
  strapiData?: ChinhSachBaoMatData | null;
}

export function PrivacyPolicyPageClient({ strapiData }: PrivacyPolicyPageClientProps) {
  if (!strapiData) return null;

  const title = strapiData.tieu_de ?? "Chính Sách Bảo Mật";
  const content = strapiData.noi_dung ?? "";
  const updatedDate = strapiData.ngay_cap_nhat
    ? new Date(strapiData.ngay_cap_nhat).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <AnimatedHero>
        <section className="bg-linear-to-b from-[#f0fffe] to-white pt-[120px] pb-12 md:pt-[160px] md:pb-16">
          <div className="mx-auto max-w-[860px] px-4 text-center md:px-8">
            <h1 className="mb-4 text-[28px] leading-tight font-bold text-[#101828] md:text-[40px] lg:text-[48px]">
              {title}
            </h1>
            {updatedDate && (
              <p className="text-[14px] text-[#475467] md:text-[16px]">
                Cập nhật lần cuối: {updatedDate}
              </p>
            )}
          </div>
        </section>
      </AnimatedHero>

      {/* Content */}
      <AnimatedPageSection delay={0.1}>
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-[860px] px-4 md:px-8">
            <div
              className="prose prose-lg prose-headings:font-bold prose-headings:text-[#101828] prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[22px] prose-h2:md:text-[28px] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[18px] prose-h3:md:text-[22px] prose-p:text-[15px] prose-p:leading-[28px] prose-p:text-[#475467] prose-p:md:text-[16px] prose-li:text-[15px] prose-li:text-[#475467] prose-li:md:text-[16px] prose-strong:text-[#101828] prose-a:text-[#01CFCF] prose-a:no-underline hover:prose-a:underline max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </section>
      </AnimatedPageSection>
    </div>
  );
}

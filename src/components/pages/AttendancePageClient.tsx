"use client";

import Image from "next/image";
import Link from "next/link";
import { DaLinhVucSection, AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { ChamCongData } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Default Assets (fallback)

interface AttendancePageClientProps {
  strapiData?: ChamCongData | null;
}

export function AttendancePageClient({ strapiData }: AttendancePageClientProps) {
  if (!strapiData) return null;

  // Hero data
  const heroTitle = strapiData.hero?.tieu_de ?? "";
  const heroDescription = strapiData.hero?.mo_ta ?? "";
  const heroImage = "/figma_assets/e8c319bd8f21d8adccc55871dd5f19444f498af7.png";
  const appStoreUrl = strapiData.hero?.app_store_url ?? "#";
  const googlePlayUrl = strapiData.hero?.google_play_url ?? "#";

  // Feature cards from Strapi
  const features =
    strapiData.tinh_nang?.map(
      (f: { tieu_de: string; danh_sach?: string[]; mau_nen?: string; hinh_anh?: unknown }) => ({
        title: f.tieu_de,
        items: f.danh_sach ?? [],
        bgColor: f.mau_nen ?? "#f5f5f5",
        image:
          getStrapiMediaUrl(f.hinh_anh as import("@/types/strapi").StrapiMedia) ??
          "/images/placeholder.svg",
      })
    ) ?? [];

  // Why choose items
  const whyChooseItems =
    strapiData.why_choose?.cac_ly_do?.map((item: { tieu_de: string }) => item.tieu_de) ?? [];

  // CTA data
  const ctaTitle = strapiData.cta?.tieu_de ?? "";
  const ctaSubtitle = strapiData.cta?.mo_ta ?? "";
  const ctaAppStoreUrl = strapiData.cta?.app_store_url ?? "#";
  const ctaGooglePlayUrl = strapiData.cta?.google_play_url ?? "#";
  const ctaImage =
    getStrapiMediaUrl(strapiData.cta?.hinh_anh) ??
    "/images/recruitment/0fde196edc3946aa5fa9569f9c8de980a700b345.png";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedHero>
        <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[160px] md:pb-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-full w-[70%] rounded-bl-[50%] bg-linear-to-bl from-[#01CFCF]/20 via-[#55DFDF]/10 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-[28px] leading-tight font-semibold text-[#101828] md:text-4xl lg:text-[48px] lg:leading-[1.2]">
                  {heroTitle}
                </h1>
                <p className="mx-auto mb-8 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-lg lg:mx-0">
                  {heroDescription}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:justify-start">
                  <Link
                    href={appStoreUrl}
                    className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                  >
                    <Image
                      src="/images/app-store-badge.svg"
                      alt="Download on the App Store"
                      width={132}
                      height={44}
                      className="h-[40px] w-auto md:h-[44px]"
                    />
                  </Link>
                  <Link
                    href={googlePlayUrl}
                    className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={165}
                      height={64}
                      className="-my-2 h-[56px] w-auto md:h-[64px]"
                    />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto h-[400px] w-full max-w-[600px] lg:h-[569px]">
                  <Image
                    src={heroImage}
                    alt="Timeso Attendance App"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedHero>

      {/* Features Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-[16px] p-6 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] md:p-8"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <div className="mb-6">
                    <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] md:h-[350px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Stats Section */}
      <DaLinhVucSection data={strapiData?.da_linh_vuc} />

      {/* Why Choose Timeso Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0">
            <Image
              src="/figma_assets/bd51c0107e692e159ec599e45ef839f872296d2b.png"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30" />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
            <div className="rounded-[40px] bg-gray-500/10 p-8 backdrop-blur-sm md:p-10">
              <h2 className="mb-8 text-center text-[24px] font-semibold capitalize md:mb-10 md:text-[32px] lg:text-[40px]">
                <span className="text-white">Lý do nên chọn </span>
                <span
                  className="bg-clip-text"
                  style={{
                    WebkitTextFillColor: "transparent",
                    backgroundImage:
                      "linear-gradient(174deg, rgb(0, 226, 226) 5%, rgb(0, 150, 158) 94%)",
                  }}
                >
                  Timeso
                </span>
                <span className="text-white">?</span>
              </h2>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {whyChooseItems.map((text, idx) => (
                  <div
                    key={idx}
                    className="flex h-[80px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6"
                  >
                    <p className="text-center text-[12px] leading-tight font-bold text-white md:text-[16px] lg:text-[20px]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* CTA Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white px-4 py-12 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center overflow-hidden rounded-[16px] bg-[#E6FEFF] p-6 md:flex-row md:rounded-[24px] md:p-0">
              <div className="flex-1 text-center md:p-16 md:text-left">
                <h2 className="mb-3 text-[18px] font-semibold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[28px] lg:text-[36px]">
                  {ctaTitle}
                </h2>
                <p className="mb-5 text-[12px] text-[#475467] md:mb-6 md:text-[16px] lg:text-[20px]">
                  {ctaSubtitle}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-6">
                  <Link
                    href={ctaAppStoreUrl}
                    className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                  >
                    <Image
                      src="/images/app-store-badge.svg"
                      alt="Download on the App Store"
                      width={132}
                      height={44}
                      className="h-[36px] w-auto md:h-[44px]"
                    />
                  </Link>
                  <Link
                    href={ctaGooglePlayUrl}
                    className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={165}
                      height={64}
                      className="-my-2 h-[52px] w-auto md:h-[64px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="relative mt-6 h-[180px] w-full md:mt-0 md:h-[342px] md:w-[400px]">
                <Image src={ctaImage} alt="Timeso App" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { TuyenDungData } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface RecruitmentPageClientProps {
  strapiData?: TuyenDungData | null;
}

export function RecruitmentPageClient({ strapiData }: RecruitmentPageClientProps) {
  if (!strapiData) return null;

  // Hero data
  const heroTitle = strapiData.hero?.tieu_de ?? "";
  const heroDescription = strapiData.hero?.mo_ta ?? "";
  const appStoreUrl = strapiData.hero?.app_store_url ?? "#";
  const googlePlayUrl = strapiData.hero?.google_play_url ?? "#";

  // Services
  const services =
    strapiData.dich_vu?.dich_vu?.map((s: { tieu_de: string; mo_ta?: string }, i: number) => ({
      title: s.tieu_de,
      desc: s.mo_ta ?? "",
      hasArrow: i === 0,
    })) ?? [];
  const servicesDashboardImage =
    getStrapiMediaUrl(strapiData.dich_vu?.hinh_anh) ??
    "/images/recruitment/85b42fc8e141b80565f28cff8ba1d70ac8e47064.png";

  // Stats
  const stats =
    strapiData.da_linh_vuc?.thong_ke?.map(
      (s: { gia_tri: string; hau_to?: string; mo_ta?: string }) => ({
        value: `${s.gia_tri}${s.hau_to ?? ""}`,
        label: s.mo_ta ?? "",
      })
    ) ?? [];

  // Challenges
  const challenges =
    strapiData.thach_thuc?.thach_thuc?.map((c: { tieu_de: string; mo_ta?: string }, i: number) => ({
      title: c.tieu_de,
      desc: c.mo_ta ?? "",
      highlighted: i === 0,
    })) ?? [];
  const challengeImage =
    getStrapiMediaUrl(strapiData.thach_thuc?.hinh_anh) ??
    "/images/recruitment/e2944d07e911aa0580feeda675a549795c0a1050.png";

  // Solutions
  const solutions =
    strapiData.giai_phap?.giai_phap?.map(
      (s: { tieu_de: string; mo_ta?: string; icon?: unknown }) => ({
        title: s.tieu_de,
        desc: s.mo_ta ?? "",
        image:
          getStrapiMediaUrl(s.icon as import("@/types/strapi").StrapiMedia) ??
          "/images/placeholder.svg",
      })
    ) ?? [];

  // Why Choose
  const whyChoose =
    strapiData.why_choose?.cac_ly_do?.map(
      (w: { tieu_de: string; mo_ta?: string; icon?: unknown }) => ({
        icon:
          getStrapiMediaUrl(w.icon as import("@/types/strapi").StrapiMedia) ??
          "/images/placeholder.svg",
        title: w.tieu_de,
        desc: w.mo_ta ?? "",
      })
    ) ?? [];

  // CTA data
  const ctaTitle = strapiData.cta?.tieu_de ?? "";
  const ctaSubtitle = strapiData.cta?.mo_ta ?? "";
  const ctaAppStoreUrl = strapiData.cta?.app_store_url ?? "#";
  const ctaGooglePlayUrl = strapiData.cta?.google_play_url ?? "#";
  const ctaImage =
    getStrapiMediaUrl(strapiData.cta?.hinh_anh) ??
    "/images/recruitment/0fde196edc3946aa5fa9569f9c8de980a700b345.png";

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <AnimatedHero>
        <section className="relative overflow-hidden bg-white px-4 pt-[100px] pb-16 md:px-8 md:pt-[140px] md:pb-24">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-[200px] left-1/2 h-[1116px] w-[1273px] -translate-x-1/2 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(1,207,207,0.15) 0%, rgba(1,207,207,0) 70%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center text-center">
              {/* Title */}
              <h1 className="mb-6 max-w-[800px] text-[32px] leading-tight font-bold tracking-[-0.02em] md:text-[56px] md:leading-[1.15]">
                <span className="bg-linear-to-r from-[#00E2E2] to-[#00969E] bg-clip-text text-transparent">
                  Timeso
                </span>
                {" - "}
                {heroTitle.replace("Timeso - ", "").replace("Timeso – ", "")}
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-[808px] text-[14px] leading-relaxed text-[#475467] md:text-[16px] md:leading-[26px]">
                {heroDescription}
              </p>

              {/* App badges */}
              <div className="mb-10 flex items-center gap-3">
                <Link href={appStoreUrl} className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={132}
                    height={40}
                  />
                </Link>
                <Link href={googlePlayUrl} className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={152}
                    height={40}
                  />
                </Link>
              </div>

              {/* Hero Image */}
              <div className="relative h-[300px] w-full max-w-[700px] md:h-[509px]">
                <Image
                  src="/images/recruitment/e4d91195e78e1445db9c112b664e508994e2fe07.png"
                  alt="Timeso App"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedHero>

      {/* Services Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            {/* Header */}
            <div className="mb-12 text-center">
              <p className="mb-3 text-[16px] font-semibold text-[#01BCBC]">Dịch vụ</p>
              <h2 className="mb-4 text-[28px] font-bold tracking-[-0.02em] text-[#101828] uppercase md:text-[40px]">
                DỊCH VỤ TIMESO CUNG CẤP
              </h2>
              <p className="mx-auto max-w-[768px] text-[14px] leading-relaxed text-[#475467] md:text-[16px] md:leading-[30px]">
                Timeso giúp bạn tự động hóa toàn bộ quy trình tuyển dụng, tối ưu thời gian – giảm
                chi phí – nâng cao chất lượng ứng viên, từ đó xây dựng đội ngũ nhân sự mạnh mẽ hơn.
              </p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-1/2">
                {services.map(
                  (service: { title: string; desc: string; hasArrow?: boolean }, idx: number) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="mb-2 text-[16px] leading-[24px] font-semibold text-[#01CFCF] md:text-[18px]">
                        {service.title}
                      </h3>
                      <p className="mb-3 text-[14px] leading-relaxed text-[#475467]">
                        {service.desc}
                      </p>
                      {service.hasArrow && (
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01CFCF] text-white transition-transform hover:scale-105">
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Dashboard Image */}
              <div className="relative h-[300px] lg:h-auto lg:w-1/2">
                <Image
                  src={servicesDashboardImage}
                  alt="Timeso Dashboard"
                  fill
                  className="rounded-[12px] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Stats Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white px-4 py-16 md:px-8 md:py-[80px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
              {/* Left Content */}
              <div className="flex flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">
                <p className="mb-3 text-[16px] text-[#212121]">Phát triển ứng dụng</p>
                <h2 className="mb-10 text-[40px] font-bold tracking-[-0.02em] text-[#01CFCF] uppercase md:text-[56px]">
                  ĐA LĨNH VỰC
                </h2>

                {/* Stats - 3 items in a row */}
                <div className="flex w-full flex-col gap-8 md:flex-row md:gap-8">
                  {stats.map((stat: { value: string; label: string }, idx: number) => (
                    <div key={idx} className="flex flex-1 flex-col items-center lg:items-start">
                      <p className="mb-2 text-[40px] font-bold text-[#212121] md:text-[48px]">
                        {stat.value}
                      </p>
                      <p className="text-[14px] leading-[20px] text-[#475467]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Images - Circular scattered layout - Scaled for mobile */}
              <div className="relative mt-8 h-[400px] w-full lg:mt-0 lg:h-[650px] lg:w-[55%]">
                <div className="absolute top-0 left-1/2 h-[650px] w-[580px] origin-top -translate-x-1/2 scale-[0.6] sm:scale-75 md:scale-90 lg:static lg:top-auto lg:left-auto lg:w-full lg:origin-top-left lg:translate-x-0 lg:scale-100">
                  {/* Left top - Cafe scene */}
                  <div className="absolute top-[80px] left-0 h-[100px] w-[100px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/c29b80739a21e6e6f8454883c205bbe7ec0bece7.png"
                      alt="Cafe"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Cyan Dots */}
                  <div className="absolute top-[200px] left-[15px] grid grid-cols-7 gap-[6px]">
                    {[...Array(56)].map((_, i) => (
                      <div key={i} className="h-[6px] w-[6px] rounded-full bg-[#00E2E2]" />
                    ))}
                  </div>

                  {/* Left bottom - Restaurant */}
                  <div className="absolute top-[350px] left-0 h-[140px] w-[120px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/302e714f58fb2257078dca46e95644f6aba9f063.png"
                      alt="Restaurant"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Top center - Scanner */}
                  <div className="absolute top-0 left-[220px] h-[80px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/cba621839bc1ea790ec7c154187f1ea99c30bcaf.png"
                      alt="Scanner"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main center image */}
                  <div className="absolute top-[100px] left-[140px] h-[350px] w-[280px] overflow-hidden rounded-[16px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/092303d6b5d08b91913494a824974d41576925b6.png"
                      alt="Business Owner"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right top - Skyscraper */}
                  <div className="absolute top-[100px] right-0 h-[110px] w-[110px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/59aa5e0633c5fca8d22df2512de0f75309adbc61.png"
                      alt="Skyscraper"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right middle - Spa */}
                  <div className="absolute top-[240px] right-0 h-[120px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/66056b79e40cf5f1996db88693618e15b5821922.png"
                      alt="Spa"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right bottom - Warehouse */}
                  <div className="absolute top-[390px] right-0 h-[130px] w-[140px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/4209405a7a0ff7ca7d106c8406eb08ad095ed876.png"
                      alt="Warehouse"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom center - Exhibition */}
                  <div className="absolute top-[470px] left-[250px] h-[110px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/4c59d259432e0ebbba2d36665b07b30807b01fed.png"
                      alt="Exhibition"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom left - Office meeting */}
                  <div className="absolute top-[580px] left-[140px] h-[100px] w-[100px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                    <Image
                      src="/images/recruitment/ee7c6dcf45a3ab37da88ff4c8e46e7253921d18c.png"
                      alt="Meeting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* FAQ/Challenges Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-[#F3F4F3] px-4 py-16 md:px-8 md:py-[96px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              {/* Left - Image */}
              <div className="relative h-[300px] w-full shrink-0 md:h-[464px] md:w-[480px] lg:w-[480px]">
                <Image
                  src={challengeImage}
                  alt="Stressed businessman"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Right - Content */}
              <div className="flex-1 lg:pl-[40px]">
                <h2 className="mb-10 text-[28px] font-semibold tracking-[-0.02em] text-black md:text-[36px]">
                  Tại sao tuyển dụng luôn khó khăn?
                </h2>

                {/* Cards Grid - 2 columns */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {challenges.map(
                    (item: { title: string; desc: string; highlighted?: boolean }, idx: number) => (
                      <div
                        key={idx}
                        className={`flex min-h-[140px] flex-col justify-between rounded-[12px] p-5 ${
                          item.highlighted ? "bg-[#00FFFF] text-black" : "bg-white text-black"
                        }`}
                      >
                        <h3 className="text-[16px] leading-tight font-bold">{item.title}</h3>
                        <p className="text-[14px] leading-relaxed text-black/70">{item.desc}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Solutions Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-[#F3F4F3] px-4 py-16 md:px-8 md:py-[96px]">
          <div className="mx-auto max-w-[1280px]">
            {/* Header */}
            <div className="mb-10 text-center">
              <p className="mb-3 text-[16px] font-semibold text-[#019393]">Giải pháp</p>
              <h2 className="mb-5 text-[28px] font-bold tracking-[-0.02em] text-[#101828] md:text-[36px]">
                Giải Pháp Tuyển Dụng Tối Ưu Từ Timeso
              </h2>
              <p className="mx-auto max-w-[768px] text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                Timeso tự động hóa toàn bộ quy trình tuyển dụng — từ đăng tin, lọc hồ sơ đến phỏng
                vấn video — giúp doanh nghiệp tiết kiệm thời gian, chi phí và tuyển đúng người nhanh
                hơn.
              </p>
            </div>

            {/* Solutions Grid - 3x2 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map(
                (solution: { title: string; desc: string; image: string }, idx: number) => {
                  const isTeal = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative h-[280px] overflow-hidden rounded-[16px]">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${
                          isTeal
                            ? "bg-[linear-gradient(180deg,rgba(0,194,194,0)_0%,#00B4B4_71.72%)]"
                            : "bg-linear-to-b from-transparent via-white/50 to-white"
                        }`}
                      />
                      <div className="absolute right-4 bottom-4 left-4">
                        <h3
                          className={`mb-2 text-[16px] font-bold ${isTeal ? "text-white" : "text-[#141414]"}`}
                        >
                          {solution.title}
                        </h3>
                        <p
                          className={`text-[14px] leading-[24px] ${isTeal ? "text-white/90" : "text-[#45556c]"}`}
                        >
                          {solution.desc}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Why Choose Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mb-12 text-center text-[32px] font-bold tracking-[-0.02em] text-[#101828] capitalize md:text-[48px]">
              Lý do nên chọn{" "}
              <span className="bg-linear-to-b from-[#00E2E2] to-[#00969E] bg-clip-text text-transparent">
                timeso
              </span>
              ?
            </h2>

            <div className="grid grid-cols-1 gap-0 border-b border-dashed border-[#55DFDF] md:grid-cols-3">
              {whyChoose.map((item: { icon: string; title: string; desc: string }, idx: number) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center border-dashed border-[#55DFDF] p-8 text-center ${
                    idx < 2 ? "md:border-r" : ""
                  }`}
                >
                  <div className="mb-4 h-7 w-7">
                    <Image src={item.icon} alt="" width={28} height={28} />
                  </div>
                  <h3 className="mb-4 text-[18px] font-bold text-[#0f172b] md:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed whitespace-pre-line text-[#475467]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* CTA Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center overflow-hidden rounded-[24px] bg-[#E6FEFF] p-8 md:flex-row md:p-0">
              {/* Left Content */}
              <div className="flex-1 p-6 md:p-16">
                <h2 className="mb-4 text-[28px] font-semibold tracking-[-0.02em] text-[#101828] md:text-[36px]">
                  {ctaTitle}
                </h2>
                <p className="mb-6 text-[16px] text-[#475467] md:text-[20px]">{ctaSubtitle}</p>
                <div className="flex items-center gap-3">
                  <Link href={ctaAppStoreUrl} className="transition-opacity hover:opacity-80">
                    <Image
                      src="/images/app-store-badge.svg"
                      alt="Download on the App Store"
                      width={132}
                      height={40}
                    />
                  </Link>
                  <Link href={ctaGooglePlayUrl} className="transition-opacity hover:opacity-80">
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={152}
                      height={40}
                    />
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[250px] w-full md:h-[342px] md:w-[400px]">
                <Image src={ctaImage} alt="Timeso App" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>
      <Footer />
    </>
  );
}

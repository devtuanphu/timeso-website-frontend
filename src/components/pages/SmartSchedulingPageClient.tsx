"use client";

import Image from "next/image";
import Link from "next/link";
import { DaLinhVucSection, AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { SapCaThongMinhData } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface SmartSchedulingPageClientProps {
  strapiData?: SapCaThongMinhData | null;
}

export function SmartSchedulingPageClient({ strapiData }: SmartSchedulingPageClientProps) {
  if (!strapiData) return null;

  // Hero data
  const heroTitle = strapiData.hero?.tieu_de ?? "";
  const heroDescription = strapiData.hero?.mo_ta ?? "";
  const heroImage = "/figma_assets/3d4deb506f9fd18b409cb0aafaf717ea62928e41.png";
  const appStoreUrl = strapiData.hero?.app_store_url ?? "#";
  const googlePlayUrl = strapiData.hero?.google_play_url ?? "#";

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
        <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[140px] md:pb-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 h-full w-[70%] rounded-bl-[50%] bg-linear-to-bl from-[#01CFCF]/20 via-[#55DFDF]/10 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-[28px] leading-tight font-semibold text-[#101828] md:text-4xl lg:text-[48px] lg:leading-[1.2]">
                  {heroTitle}
                </h1>
                <p className="mx-auto mb-6 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-[16px] lg:mx-0">
                  {heroDescription}
                </p>

                <ul className="mx-auto mb-8 max-w-lg space-y-3 text-left text-[14px] text-[#101828] md:text-[16px] lg:mx-0">
                  {["Tối ưu theo kỹ năng", "Giảm xung đột & OT", "Đồng bộ chấm công–lương"].map(
                    (feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="text-lg text-[#01CFCF]">&gt;</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    )
                  )}
                </ul>

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
                <div className="relative mx-auto h-[350px] w-full max-w-[700px] md:h-[450px] lg:h-[569px]">
                  <Image
                    src={heroImage}
                    alt="Timeso Smart Scheduling App"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedHero>

      {/* Testimonial Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-[#005757] pt-8 md:pt-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="overflow-hidden bg-white shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-[200px] w-full shrink-0 md:h-[464px] md:w-[480px]">
                  <Image
                    src="/figma_assets/056252f0d48e9864cce3ff92bdd1ed61a7a2f54e.png"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col items-end justify-center p-4 md:p-10">
                  <div className="w-full space-y-4 md:space-y-6">
                    <h2 className="text-[18px] leading-tight font-semibold text-black md:text-[36px]">
                      Sắp ca thủ công tốn thời gian và dễ sai sót
                    </h2>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                      {[
                        "Giải pháp quản lý toàn diện, tiết kiệm thời gian",
                        "Tính năng vượt trội, giúp tối ưu hóa mọi quy trình",
                        "AI đề xuất & quản lý nhân viên thông minh",
                        "Đảm bảo sự phát triển bền vững",
                      ].map((text, idx) => (
                        <div
                          key={idx}
                          className="flex h-[70px] items-center justify-center rounded-[12px] bg-[#f1f5f9] p-3 md:h-[120px] md:p-4"
                        >
                          <p className="text-center text-[14px] leading-tight font-bold text-[#005757] md:text-[20px]">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Quy Trình Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8 text-center md:mb-16">
              <h2 className="mb-3 text-[20px] font-bold tracking-tight text-[#101828] capitalize md:mb-4 md:text-[40px] md:leading-[44px]">
                Quản Lý Ca Làm Thông Minh &amp; Tự Động
              </h2>
              <p className="mx-auto max-w-[768px] text-[12px] leading-[20px] text-[#475467] md:text-[16px] md:leading-[26px]">
                Tự động hóa việc xếp lịch dựa trên dữ liệu và quy tắc doanh nghiệp, giảm thiểu sai
                sót và tiết kiệm thời gian quản lý.
              </p>
            </div>

            <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
              <div className="grid w-full max-w-[560px] grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:flex-1 lg:gap-x-8 lg:gap-y-8">
                <div>
                  <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#01CFCF] md:text-[20px]">
                    AI Tự Động Đề Xuất Ca Làm
                  </h3>
                  <p className="mb-4 text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                    Tính toán tối ưu phân ca nhân viên dựa trên công, lỹ năng, quy định lý độ lao
                    động mà không cần thao tác thủ công.
                  </p>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01CFCF] text-white transition-colors hover:bg-[#00BAC7]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>

                <div>
                  <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                    Cảnh Báo Thiếu Người &amp; Xung Đột
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                    Phát hiện ca thiếu người, lớn ca xung đột thời gian giữa các ca – giúp tốn quản
                    lý sắp xếp lại nhanh chóng.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                    Nhân Viên Đề Xuất Đổi Ca
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                    Gợi ý đổi ca phù hợp, quản lý duyệt một chạm nhanh với notification và sắp nhật
                    lại.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                    Lịch Ca Trực Quan Theo Ngày/Tuần/Tháng
                  </h3>
                  <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                    Xem lịch làm việc dạng lịch, calendar bằng hình, dễ hiểu trực quan dám thấy số
                    liệu nhanh chóng.
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-[560px] lg:order-2 lg:flex-1">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl md:aspect-auto md:h-[480px]">
                  <Image
                    src="/figma_assets/b815100b65d1f0c80f92a83097c9e4a7454621c3.png"
                    alt="Dashboard quản lý ca làm"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Lý Do Nên Chọn Timeso Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0">
            <Image
              src="/figma_assets/928c2c2cdc67a507253902630c28d4919917d32c.png"
              alt=""
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(260deg, rgb(0, 0, 0) 1%, rgba(121, 121, 121, 0.37) 97%)",
              }}
            />
          </div>

          <div className="relative container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-[900px] py-6 md:py-10">
                <h2 className="mb-2 text-center text-[22px] font-bold tracking-tight capitalize md:text-[40px] md:leading-[58px]">
                  <span className="text-white">Lý Do Nên Chọn </span>
                  <span
                    className="bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(174deg, #00E2E2 6%, #00969E 94%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Timeso
                  </span>
                  <span className="text-white">?</span>
                </h2>

                <p className="mb-8 text-center text-[14px] text-white/80 italic md:mb-10 md:text-[18px]">
                  Kết Quả Rõ Ràng Ngay Từ Tuần Đầu Sử Dụng
                </p>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {whyChooseItems.map((text, idx) => (
                    <div
                      key={idx}
                      className="flex h-[100px] items-center justify-center rounded-[12px] bg-black/30 p-4 md:h-[120px] md:p-6"
                    >
                      <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-[28px]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Stats Section */}
      <DaLinhVucSection data={strapiData?.da_linh_vuc} />

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

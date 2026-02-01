"use client";

import Image from "next/image";
import Link from "next/link";
import { DaLinhVucSection, AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { QuanLyDonHangData } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Default Assets (fallback)
const DEFAULT_HERO_IMAGE = "/figma_assets/f39d24ee2279b11358426c47a3f20d748d9bfa5a.png";

// Default content (fallback)
const DEFAULT_HERO = {
  title: "Quản Lý Đơn Hàng",
  description: [
    "Timeso giúp cửa hàng tạo và quản lý đơn hàng nhanh chóng.",
    "Khi khách đến, nhân viên chỉ cần bấm tạo đơn và đặt lịch phục vụ cho khách ngay trên hệ thống, giúp theo dõi đơn rõ ràng, tránh nhầm lẫn và phục vụ đúng thời gian.",
  ],
};

const DEFAULT_CTA = {
  title: "Start your free trial",
  subtitle: "Personal performance tracking made easy.",
};

interface OrderManagementPageClientProps {
  strapiData?: QuanLyDonHangData | null;
}

export function OrderManagementPageClient({ strapiData }: OrderManagementPageClientProps) {
  // Hero data
  const heroTitle = strapiData?.hero?.tieu_de ?? DEFAULT_HERO.title;
  const heroDescription = strapiData?.hero?.mo_ta ?? DEFAULT_HERO.description.join(" ");
  const heroImage = DEFAULT_HERO_IMAGE;
  const appStoreUrl = strapiData?.hero?.app_store_url ?? "#";
  const googlePlayUrl = strapiData?.hero?.google_play_url ?? "#";

  // CTA data
  const ctaTitle = strapiData?.cta?.tieu_de ?? DEFAULT_CTA.title;
  const ctaSubtitle = strapiData?.cta?.mo_ta ?? DEFAULT_CTA.subtitle;
  const ctaAppStoreUrl = strapiData?.cta?.app_store_url ?? "#";
  const ctaGooglePlayUrl = strapiData?.cta?.google_play_url ?? "#";
  const ctaImage =
    getStrapiMediaUrl(strapiData?.cta?.hinh_anh) ??
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
                  <span>{heroTitle}</span>
                </h1>
                <ul className="mx-auto mb-8 max-w-lg space-y-3 text-[14px] leading-relaxed text-[#475467] md:text-lg lg:mx-0">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                    <span>{heroDescription}</span>
                  </li>
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
                <div className="relative mx-auto h-[400px] w-full max-w-[600px] lg:h-[569px]">
                  <Image
                    src={heroImage}
                    alt="Timeso Order Management App"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedHero>

      {/* How it works Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-linear-to-b from-[#dcffff] to-[#f1ffff] py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8">
            <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex justify-center">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]">
                  <Image
                    src="/figma_assets/11582fd5b293911fb69adf7468b645381045d04b.png"
                    alt="Timeso App Order Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center text-center lg:text-left">
                <h2 className="mb-3 text-[22px] font-bold text-[#101828] sm:text-[28px] md:mb-4 md:text-[36px] lg:text-[40px]">
                  Cửa hàng vận hành thế nào với Timeso?
                </h2>
                <p className="mb-4 text-[14px] font-bold text-[#101828] sm:text-[16px] md:mb-6 md:text-[20px]">
                  Tạo đơn – đặt lịch – phục vụ đúng hẹn
                </p>
                <ul className="mx-auto max-w-[400px] space-y-2 text-left text-[13px] leading-[24px] text-[#101828] sm:text-[14px] sm:leading-[28px] md:mx-0 md:max-w-none md:space-y-3 md:text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101828]" />
                    <span>
                      Khi khách đến cửa hàng, nhân viên chỉ cần tạo đơn và đặt lịch cho khách ngay
                      trên hệ thống.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101828]" />
                    <span>
                      Mọi thông tin được lưu lại rõ ràng: thời gian, dịch vụ, người phụ trách.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-8 border-t border-[#01CFCF]/30 md:my-12 lg:my-16" />

            <div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left">
                <h2 className="mb-4 text-[22px] font-bold text-[#101828] sm:text-[28px] md:mb-6 md:text-[36px] lg:text-[40px]">
                  Lợi ích chính:
                </h2>
                <ul className="mx-auto max-w-[400px] space-y-2 text-left text-[13px] leading-[24px] text-[#101828] sm:text-[14px] sm:leading-[28px] md:mx-0 md:max-w-none md:space-y-4 md:text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101828]" />
                    <span>Tạo đơn nhanh, không cần ghi chép thủ công</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101828]" />
                    <span>Đặt lịch cho khách ngay khi tiếp nhận</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#101828]" />
                    <span>Tránh trùng lịch, nhầm ca hoặc quên khách</span>
                  </li>
                </ul>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]">
                  <Image
                    src="/figma_assets/1f652fa7d0266d712fa04a12871c8780f4b43e72.png"
                    alt="Timeso Benefits"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedPageSection>

      {/* Quản Lý Vận Hành Thông Minh Section */}
      <AnimatedPageSection delay={0.1}>
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-4 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-[24px] font-bold text-[#101828] md:text-[32px] lg:text-[40px]">
                Quản Lý Vận Hành Thông Minh Với
              </h2>
              <p className="text-[24px] font-bold text-[#01CFCF] md:text-[32px] lg:text-[40px]">
                AI Timeso
              </p>
              <p className="mt-4 text-[14px] text-[#475467] md:text-[16px]">
                Chỉ với vài bước – dễ sử dụng – mọi ca vẫn hoàn thành tự định hướng
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="relative h-[300px] overflow-hidden rounded-[16px] md:h-[350px]">
                  <Image
                    src="/figma_assets/22e4c682258f224f70841b23f4805d4f91d23c3a.png"
                    alt="Order Tracking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                    Theo dõi đơn hàng rõ ràng
                  </h3>
                  <p className="mb-4 text-[14px] text-[#475467] md:text-[16px]">
                    Mọi đơn hàng luôn được cập nhật trực tiếp.
                  </p>
                  <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>
                        Tổng quan của tiến trình đơn, trạng thái hàng đang xử lý trong, thực hiện
                        xong, đơn hàng đã chuẩn bị xong, đơn hàng hoàn tất.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>
                        Cửa hàng dễ dàng xem được công điểm và tiến độ xử lý từng khách hàng.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                    Đồng bộ với nhân viên &amp; lịch làm việc
                  </h3>
                  <p className="mb-4 text-[14px] text-[#475467] md:text-[16px]">
                    Với hệ thống sắp xếp, quản lý thông minh, lịch làm việc được gắn liền với nhân
                    viên và tự động cập nhật khi có thay đổi.
                  </p>
                  <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Mỗi đơn gắn rõ người phụ trách.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Tối ưu hóa thời gian phục vụ nhân viên.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Phân bố công việc hợp lý trong ngày.</span>
                    </li>
                  </ul>
                </div>
                <div className="relative order-1 h-[300px] overflow-hidden rounded-[16px] md:h-[350px] lg:order-2">
                  <Image
                    src="/figma_assets/927772feb12cf7bb3461f8731b250063c9238795.png"
                    alt="Staff Sync"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                <div className="relative h-[300px] overflow-hidden rounded-[16px] md:h-[350px]">
                  <Image
                    src="/figma_assets/2fb5e002bbde20b8fcf8bb51fa906026401747e4.png"
                    alt="Small Business"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                    Phù hợp cho cửa hàng nhỏ
                  </h3>
                  <p className="mb-4 text-[14px] text-[#475467] md:text-[16px]">
                    Giải pháp tinh gọn cho các doanh nghiệp nhỏ, dễ dàng triển khai và vận hành.
                  </p>
                  <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Tạo đơn nhanh chóng, dễ dùng, phù hợp cho một đội ngũ nhỏ.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Phù hợp cho một người, một doanh nghiệp.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                      <span>Phù hợp với Timeso mà không cần thao tác phức tạp.</span>
                    </li>
                  </ul>
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

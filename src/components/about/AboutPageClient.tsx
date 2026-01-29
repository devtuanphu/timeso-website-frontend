"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Navbar from "@/components/Navbar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Team members data from Figma
const TEAM_MEMBERS = [
  {
    name: "Alisa Hester",
    role: "Founder & CEO",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "/images/about/7a57024084ebbe9fa6c5bd5800fd62c4515e05c9.png",
  },
  {
    name: "Rich Wilson",
    role: "Engineering Manager",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "/images/about/df55f4c30a2e74600f505bfbc2d269b5f9f501c1.png",
  },
  {
    name: "Annie Stanley",
    role: "Product Manager",
    description: "Former PM for Airtable, Medium, Ghost, and Lumi.",
    image: "/images/about/3f960e2ca3c81e7acf46a158fa01aaf8898a82f9.png",
  },
  {
    name: "John Carter",
    role: "Frontend Developer",
    description: "Former developer at Stripe and Postman.",
    image: "/images/about/758ead75a245e76d61ddb2b40fe4aa4be05925c5.png",
  },
];

// Core values data - matching Figma design
const CORE_VALUES = [
  {
    icon: "/images/case-studies/foundation_target.png",
    iconBg: "#21D4D4",
    title: "Sứ Mệnh",
    description:
      "Tầm nhìn của Timeso là trở thành nền tảng quản lý nhân sự và kinh doanh hàng đầu, giúp cửa hàng tối ưu hóa hiệu suất, tăng trưởng bền vững và xây dựng đội ngũ mạnh mẽ lâu dài. Timeso không chỉ là công cụ, mà là người bạn đồng hành giúp cửa hàng đột phá và vươn tầm quốc tế.",
  },
  {
    icon: "/images/case-studies/foundation_target2.png",
    iconBg: "#F79009",
    title: "Tầm Nhìn",
    description:
      "Timeso cung cấp giải pháp quản lý toàn diện, giúp cửa hàng và cửa hàng tối ưu hóa quy trình công việc, từ nhân sự đến kinh doanh. Chúng tôi cam kết mang đến nền tảng công nghệ dễ sử dụng, mạnh mẽ, giúp tiết kiệm thời gian, giảm chi phí và tăng năng suất. Timeso là đối tác tin cậy đồng hành cùng cửa hàng trên con đường phát triển bền vững.",
  },
  {
    icon: "/images/case-studies/foundation_target3.png",
    iconBg: "#F04438",
    title: "Giá Trị Cốt Lõi",
    description:
      "Giá trị cốt lõi của Timeso là tận tâm, đổi mới và minh bạch. Chúng tôi cam kết cung cấp giải pháp thông minh, giúp cửa hàng tiết kiệm thời gian, nâng cao hiệu suất và đảm bảo tính chính xác trong quản lý. Timeso luôn linh hoạt và sáng tạo, đáp ứng nhanh chóng nhu cầu thay đổi của thị trường và xây dựng niềm tin vững chắc với khách hàng và đối tác.",
  },
];

export default function AboutPageClient() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white px-4 pt-[100px] pb-10 md:px-8 md:pt-[140px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 max-w-[1000px]">
            <h1 className="mb-4 text-[28px] leading-tight font-bold tracking-[-0.02em] text-[#101828] md:text-[56px] md:leading-[1.1]">
              Chinh phục mọi <span className="text-[#01CFCF]">thách thức quản lý</span>
            </h1>
            <p className="mb-6 max-w-[900px] text-sm leading-relaxed text-[#475467] md:text-lg md:leading-[28px]">
              Chào bạn đến với Timeso - nền tảng quản lý nhân sự AI tiên tiến, với sự kết hợp hoàn
              toàn giao diện app mobile của chúng tôi và dịch tự động, giúp bạn sử dụng có thể dễ đi
              tới vị trí tốt hơn cho các dự thể vận hàng mà tới sống.
            </p>
            <div className="flex items-center gap-3 md:gap-6">
              <Link
                href="#"
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
                href="#"
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

          {/* Hero Images Grid - matching Figma layout exactly */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {/* Left Image - Woman working at computer */}
            <div className="relative h-[250px] overflow-hidden rounded-[16px] md:h-[440px] md:rounded-[24px]">
              <Image
                src="/images/about/d6604c8227042bb19de4e5724ae83e5aa40c0cba.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Image - Hand holding phone with app + floating cards */}
            <div className="relative h-[250px] overflow-hidden rounded-[16px] md:h-[440px] md:rounded-[24px]">
              <Image
                src="/images/about/463c3571bb784baeb275a97250798b8cbdc26b2c.png"
                alt="Mobile app"
                fill
                className="object-cover"
              />

              {/* Floating card - I NEED YOUR ASSIST (top-left) */}
              <div className="absolute top-3 left-3 rounded-[12px] bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm md:top-6 md:left-6 md:px-4 md:py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6FAFA] md:h-10 md:w-10">
                    <svg
                      className="h-4 w-4 text-[#01CFCF] md:h-5 md:w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wide text-[#2A4A45] uppercase md:text-xs">
                      I NEED YOUR
                    </p>
                    <p className="text-[10px] font-semibold tracking-wide text-[#01CFCF] uppercase md:text-xs">
                      ASSIST
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card - MAKE A CALL (bottom-right) */}
              <div className="absolute right-3 bottom-3 rounded-[12px] bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm md:right-6 md:bottom-6 md:px-4 md:py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E6FAFA] md:h-10 md:w-10">
                    <svg
                      className="h-4 w-4 text-[#01CFCF] md:h-5 md:w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wide text-[#2A4A45] uppercase md:text-xs">
                      MAKE A
                    </p>
                    <p className="text-[10px] font-semibold tracking-wide text-[#01CFCF] uppercase md:text-xs">
                      CALL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Câu chuyện thành lập */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* Left - Text Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-[#01CFCF] md:text-xl">
                  Câu chuyện thành lập
                </p>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#101828] md:text-[40px] md:leading-[44px]">
                  Timeso ra đời như thế nào
                </h2>
              </div>

              <div className="flex flex-col gap-6 text-base leading-[28px] text-[#475467] md:text-lg">
                <p>
                  Timeso ra đời từ một câu hỏi đơn giản: &ldquo;Làm sao để việc quản lý nhân sự và
                  vận hành trở nên nhẹ nhàng hơn cho mọi cửa hàng?&rdquo;
                </p>
                <p>
                  Trong quá trình làm việc với nhiều cửa hàng và đội ngũ quản lý, chúng tôi nhận ra
                  rằng những phương pháp thủ công không chỉ tốn thời gian mà còn khiến cửa hàng chậm
                  lại.
                </p>
                <p>
                  Chính từ nhu cầu đó, đội ngũ sáng lập Timeso quyết tâm tạo nên một nền tảng thông
                  minh, dễ sử dụng nhưng đủ mạnh để tự động hóa những công việc phức tạp. Chúng tôi
                  tin rằng khi cửa hàng tiết kiệm được thời gian, họ sẽ có nhiều hơn để tập trung
                  vào điều quan trọng nhất: phát triển con người và tạo ra giá trị thật sự.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-[300px] overflow-hidden rounded-[24px] md:h-[592px]">
              <Image
                src="/images/about/73b7c2a56de9b2bde5d83664188677534e98ec81.png"
                alt="Team meeting and collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Định hướng đến sự thành công */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-[-1px] text-[#0C0407] capitalize md:mb-16 md:text-[40px]">
            ĐỊNH HƯỚNG ĐẾN SỰ THÀNH CÔNG
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="flex flex-col gap-6 border-l border-black/20 pl-6 md:pl-8">
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />

                  {/* Title */}
                  <h3 className="text-xl leading-normal font-bold text-[#101828] md:text-2xl">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-[28px] text-[#475467] md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section - Đổi mới không ngừng */}
      <section className="bg-[#00A1A1] py-16 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Badge */}
            <div className="rounded-full border border-white bg-white/15 px-4 py-2">
              <span className="text-sm font-bold text-white md:text-base">NGUYÊN TẮC LÀM VIỆC</span>
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-white md:text-[40px] md:leading-[40px]">
                Đổi Mới Không Ngừng
              </h2>
              <p className="mx-auto max-w-[800px] text-sm leading-relaxed text-white/90 md:text-lg md:leading-[28px]">
                Với sứ mệnh mang lại giải pháp tối ưu, Timeso luôn đặt đổi mới sáng tạo là kim chỉ
                nam trong việc phát triển công nghệ và nâng cao hiệu quả cho mọi doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="flex w-full flex-col">
            {/* Row 1: Text | Image | Text */}
            <div className="grid overflow-hidden md:grid-cols-3">
              {/* Card 1 - Trách Nhiệm Với Khách Hàng */}
              <div className="flex min-h-[280px] flex-col justify-center gap-4 bg-white p-6 md:p-8">
                <h3 className="text-lg font-bold text-[#00A1A1] md:text-xl">
                  Trách Nhiệm Với Khách Hàng
                </h3>
                <p className="text-sm leading-relaxed text-[#474747] md:text-base">
                  Chúng tôi luôn nỗ lực mang đến giải pháp toàn diện, ổn định và dễ sử dụng; giúp
                  khách hàng quản lý hiệu quả, phát triển bền vững và tối ưu vận hành trong mọi lĩnh
                  vực.
                </p>
              </div>

              {/* Image - Middle */}
              <div className="relative h-[280px]">
                <Image
                  src="/images/about/20dfc5f747f30c3678b55f6ebd0199595182ea30.png"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 2 - Trách Nhiệm Với Cộng Đồng & Sản Phẩm */}
              <div className="flex min-h-[280px] flex-col justify-center gap-4 bg-white p-6 md:p-8">
                <h3 className="text-lg font-bold text-[#00A1A1] md:text-xl">
                  Trách Nhiệm Với Cộng Đồng &amp; Sản Phẩm
                </h3>
                <p className="text-sm leading-relaxed text-[#474747] md:text-base">
                  Chúng tôi phát triển sản phẩm an toàn – chất lượng – có giá trị lâu dài, đồng thời
                  hướng đến xây dựng cộng đồng và xã hội phát triển bền vững thông qua công nghệ.
                </p>
              </div>
            </div>

            {/* Row 2: Image | Text | Image */}
            <div className="grid overflow-hidden md:grid-cols-3">
              {/* Image - Left */}
              <div className="relative h-[280px]">
                <Image
                  src="/images/about/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png"
                  alt="Working together"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card - Trách Nhiệm Với Nhân Sự - Middle */}
              <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 bg-white p-6 md:p-8">
                <h3 className="text-center text-lg font-bold text-[#00A1A1] md:text-xl">
                  Trách Nhiệm Với Nhân Sự
                </h3>
                <p className="text-center text-sm leading-relaxed text-[#474747] md:text-base">
                  Timeso cam kết tạo môi trường làm việc sáng tạo, minh bạch và hiệu quả để mỗi
                  thành viên phát huy tối đa năng lực, cùng đóng góp vào sự phát triển chung.
                </p>
              </div>

              {/* Image - Right */}
              <div className="relative h-[280px]">
                <Image
                  src="/images/about/dbc0f518c9d64fc8cdcce6976008a967bfc065a2.png"
                  alt="Office work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section - Timeso giúp chủ quán nhỏ vươn tới thành công lớn */}
      <section className="bg-white py-10 md:py-24">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          {/* Content - stacked on mobile, side by side on desktop */}
          <div className="mb-10 text-center md:mb-0 md:flex md:items-center md:gap-16 md:text-left">
            {/* Left Content */}
            <div className="flex-1">
              {/* Badge - centered on mobile */}
              <div className="mb-4 inline-block rounded-full border-2 border-[#00E2E2] bg-white px-4 py-2 shadow-sm md:mb-5">
                <span className="text-sm font-bold text-[#00A1A1]">Từ khó khăn đến giải pháp</span>
              </div>

              {/* Title - italic */}
              <h2 className="mb-4 text-[24px] leading-[32px] font-semibold text-[#101828] md:mb-5 md:text-[36px] md:leading-[44px] md:tracking-[-0.02em]">
                Timeso giúp chủ quán nhỏ vươn tới thành công lớn!
              </h2>

              {/* Description */}
              <p className="mx-auto max-w-[480px] text-base leading-relaxed text-[#475467] md:mx-0 md:text-xl md:leading-[30px]">
                Từng trải qua thiếu nhân sự, xoay ca gấp và sai lệch lương thưởng, chúng tôi tạo ra
                Timeso để giúp quản lý nhân sự, chia ca và tuyển dụng trở nên dễ dàng, minh bạch và
                hiệu quả hơn cho mọi cửa hàng.
              </p>
            </div>

            {/* Desktop Image Grid - same layout as Figma */}
            <div className="relative hidden h-[496px] w-full flex-1 md:block">
              {/* Image 1 - Top center-right (240h x 160w) */}
              <div
                className="absolute top-0 h-[240px] w-[160px] overflow-hidden rounded-[16px]"
                style={{ left: "calc(50% + 88px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png"
                  alt="Desktop workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 5 - Top center-left small (160x160) */}
              <div
                className="absolute top-[80px] h-[160px] w-[160px] overflow-hidden rounded-[16px]"
                style={{ left: "calc(50% - 88px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/b7e371af19942c45c8233545ea0c54eab9dc30f4.png"
                  alt="Typing on laptop"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Bottom left (192x192) */}
              <div
                className="absolute top-[256px] h-[192px] w-[192px] overflow-hidden rounded-[16px]"
                style={{ left: "calc(50% - 192px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/e6859d0f29506264b8ce888a5c96bc4e769465f9.png"
                  alt="Team high five"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 4 - Bottom center (240h x 160w) */}
              <div
                className="absolute top-[256px] h-[240px] w-[160px] overflow-hidden rounded-[16px]"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/84eb357be3124221837868f50d1ecde7fcc75628.png"
                  alt="Office work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Bottom right (160h x 192w) */}
              <div
                className="absolute top-[256px] h-[160px] w-[192px] overflow-hidden rounded-[16px]"
                style={{ left: "calc(50% + 192px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/d1ab1eb8e845b49d1797c1cee44a8d43644a305c.png"
                  alt="POS payment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Image Grid - same pattern, scaled to fit */}
            <div className="relative h-[300px] w-full flex-1 md:hidden">
              {/* Image 1 - Top center-right */}
              <div
                className="absolute top-0 h-[145px] w-[97px] overflow-hidden rounded-[10px]"
                style={{ left: "calc(50% + 53px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png"
                  alt="Desktop workspace"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 5 - Top center-left small */}
              <div
                className="absolute top-[48px] h-[97px] w-[97px] overflow-hidden rounded-[10px]"
                style={{ left: "calc(50% - 53px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/b7e371af19942c45c8233545ea0c54eab9dc30f4.png"
                  alt="Typing on laptop"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 3 - Bottom left */}
              <div
                className="absolute top-[155px] h-[116px] w-[116px] overflow-hidden rounded-[10px]"
                style={{ left: "calc(50% - 116px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/e6859d0f29506264b8ce888a5c96bc4e769465f9.png"
                  alt="Team high five"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 4 - Bottom center */}
              <div
                className="absolute top-[155px] h-[145px] w-[97px] overflow-hidden rounded-[10px]"
                style={{ left: "50%", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/84eb357be3124221837868f50d1ecde7fcc75628.png"
                  alt="Office work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Image 2 - Bottom right */}
              <div
                className="absolute top-[155px] h-[97px] w-[116px] overflow-hidden rounded-[10px]"
                style={{ left: "calc(50% + 116px)", transform: "translateX(-50%)" }}
              >
                <Image
                  src="/images/about/d1ab1eb8e845b49d1797c1cee44a8d43644a305c.png"
                  alt="POS payment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Team Section Component with Swiper
function TeamSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-12 md:py-20">
      {/* Header - uses same container as other sections */}
      <div className="mx-auto mb-8 flex max-w-[1200px] flex-col gap-4 px-4 md:mb-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-[700px]">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#101828] md:text-[40px] md:leading-[48px]">
            Đội Ngũ Đồng Hành
          </h2>
          <p className="text-sm leading-relaxed text-[#475467] md:text-base md:leading-[24px]">
            Đội ngũ Timeso là những người giàu kinh nghiệm trong quản lý, công nghệ và vận hành dịch
            vụ, cùng chung mục tiêu xây dựng một nền tảng nhân sự thông minh, dễ dùng và mang lại
            giá trị lâu dài cho cửa hàng.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAECF0] bg-white transition hover:bg-gray-50 md:h-12 md:w-12"
          >
            <ArrowLeft className="h-4 w-4 text-[#344054] md:h-5 md:w-5" strokeWidth={2} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00BAC7] transition hover:bg-[#00A3AF] md:h-12 md:w-12"
          >
            <ArrowRight className="h-4 w-4 text-white md:h-5 md:w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Swiper Container - padding left matches container, extends to right */}
      <div className="w-full overflow-hidden pl-4 md:pl-[max(32px,calc((100vw-1200px)/2+32px))]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.15}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 12 },
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
          }}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <SwiperSlide key={i}>
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// Team Member Card Component - matching Figma design exactly
function TeamMemberCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
  };
}) {
  return (
    <div className="relative h-[450px] overflow-hidden rounded-[16px] md:h-[520px] md:rounded-[20px]">
      {/* Full-height Background Image */}
      <Image src={member.image} alt={member.name} fill className="object-cover" />

      {/* Glassmorphism Content Box at bottom */}
      <div
        className="absolute right-0 bottom-0 left-0 border-t border-white/50 p-5 md:p-6"
        style={{
          background: "rgba(255, 255, 255, 0.30)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Name and Arrow Row */}
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-xl font-bold text-white md:text-2xl">{member.name}</h3>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 md:h-9 md:w-9">
            <ArrowRight className="h-4 w-4 -rotate-45 text-white md:h-5 md:w-5" />
          </div>
        </div>

        {/* Role */}
        <p className="mb-2 text-sm font-medium text-white md:text-base">{member.role}</p>

        {/* Description */}
        <p className="mb-4 text-xs leading-relaxed text-white/80 md:text-sm">
          {member.description}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* Twitter/X */}
          <a href="#" className="text-white/70 transition hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-white/70 transition hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* Dribbble */}
          <a href="#" className="text-white/70 transition hover:text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm7.885 5.97a10.212 10.212 0 012.318 6.396c-.339-.067-3.734-.757-7.155-.328-.08-.181-.155-.366-.236-.551-.218-.499-.455-.998-.703-1.478 3.767-1.538 5.479-3.743 5.776-4.039zM12 1.797c2.573 0 4.927.978 6.712 2.58-.244.261-1.791 2.318-5.409 3.665-1.69-3.104-3.566-5.649-3.854-6.031A10.252 10.252 0 0112 1.797zM7.614 2.74c.277.372 2.114 2.917 3.828 5.94-4.822 1.282-9.078 1.264-9.552 1.256A10.257 10.257 0 017.614 2.74zM1.797 12c0-.078.003-.155.005-.232.464.009 5.378.078 10.506-1.464.293.572.573 1.152.833 1.732-.36.099-.726.209-1.088.333-4.596 1.474-7.04 5.501-7.34 5.996a10.187 10.187 0 01-2.916-6.365zm10.203 10.406a10.216 10.216 0 01-6.298-2.174c.238-.479 2.037-3.877 7.04-5.658.02-.007.04-.012.059-.018 1.263 3.28 1.783 6.031 1.919 6.827a10.161 10.161 0 01-2.72 1.023zm4.47-1.635c-.094-.555-.557-3.195-1.732-6.417 3.241-.518 6.079.329 6.429.439a10.236 10.236 0 01-4.697 5.978z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

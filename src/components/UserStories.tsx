"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Icon assets from Figma
const ICON_RECRUITMENT = "/images/user-stories/v2/684d51a743fb1e1de2d0be959325e0f386394b7e.svg"; // solar:users-group
const ICON_PAYROLL = "/images/user-stories/v2/04378bfeca771747dc4db9d746155fd18110a80a.svg"; // tabler:table-spark
const ICON_ORDER = "/images/user-stories/v2/c95da694e6dc9fdf0029cd249f94111adb02d48b.svg"; // lets-icons:order-duotone
const ICON_WAREHOUSE = "/images/user-stories/v2/4cb621b8a7cf6873ee56c1f8a3c311a7700655d8.svg"; // maki:warehouse

const STORIES = [
  {
    title: "Tuyển dụng",
    desc: "AI tự động sàng lọc hồ sơ, đánh giá ứng viên và rút ngắn 70% thời gian tuyển dụng cho doanh nghiệp.",
    icon: ICON_RECRUITMENT,
    bg: "#1570EF", // Blue/600
  },
  {
    title: "Tính lương tự động",
    desc: "Hệ thống AI tính lương chính xác từ dữ liệu chấm công – ca làm, giảm lỗi thủ công và tăng hiệu suất vận hành.",
    icon: ICON_PAYROLL,
    bg: "#45556C", // Slate/600
  },
  {
    title: "Quản lý đơn hàng",
    desc: "AI theo dõi toàn bộ vòng đời đơn hàng, tự động cập nhật trạng thái và tối ưu hiệu suất xử lý.",
    icon: ICON_ORDER,
    bg: "#2B7FFF", // Blue/500
  },
  {
    title: "Quản lý kho",
    desc: "Quản lý tồn kho bằng AI, tự động cảnh báo thiếu hàng và tối ưu hiệu suất nhập – xuất mỗi ngày.",
    icon: ICON_WAREHOUSE,
    bg: "#01BCBC", // Pri/blue-600
  },
];

export default function UserStories() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-12 md:py-[80px]">
      {/* Header - centered in container */}
      <div className="mx-auto mb-6 max-w-[1280px] px-4 md:mb-[40px] md:px-[80px]">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#101828] md:text-[48px] md:tracking-[-0.96px]">
          User stories
        </h2>
        <p className="mt-3 text-center text-sm text-[#475467] md:mt-[16px] md:text-[16px]">
          Cách các doanh nghiệp ứng dụng Timeso để tối ưu vận hành mỗi ngày.
        </p>
      </div>

      {/* Swiper Container - full width, left padding matches container */}
      <div className="relative w-full overflow-hidden pl-4 md:pl-[max(80px,calc((100vw-1280px)/2+80px))]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1.15, spaceBetween: 12 },
            480: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.2, spaceBetween: 32 },
          }}
        >
          {STORIES.map((story, i) => (
            <SwiperSlide key={i}>
              <StoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows - aligned with container */}
      <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-end gap-4 px-4 md:mt-[32px] md:gap-[32px] md:px-[80px]">
        {/* Left Arrow Button - 56x56 white circle */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EAECF0] bg-white/90 backdrop-blur-sm transition hover:bg-gray-50 md:h-[56px] md:w-[56px]"
        >
          <ArrowLeft className="h-5 w-5 text-[#344054] md:h-6 md:w-6" strokeWidth={2} />
        </button>
        {/* Right Arrow Button - 50x50 cyan circle with shadow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00BAC7] shadow-[0_15px_30px_rgba(0,186,199,0.3)] transition hover:bg-[#00A3AF] md:h-[50px] md:w-[50px]"
        >
          <ArrowRight className="h-4 w-4 text-white md:h-5 md:w-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

function StoryCard({
  story,
}: {
  story: {
    title: string;
    desc: string;
    icon: string;
    bg: string;
  };
}) {
  return (
    <div
      className="relative flex h-[320px] w-full flex-col items-start justify-end gap-4 rounded-[12px] p-4 md:h-[404px] md:gap-[24px] md:rounded-[16px] md:p-[24px]"
      style={{ backgroundColor: story.bg }}
    >
      {/* Icon at top left - absolute positioned */}
      <div className="absolute top-4 left-4 h-8 w-8 overflow-hidden md:top-[32px] md:left-[32px] md:h-[40px] md:w-[40px]">
        <Image src={story.icon} alt="" fill className="object-contain" />
      </div>

      {/* Inner Card with content - glassmorphism */}
      <div
        className="flex w-full flex-col gap-4 rounded-[12px] border border-white/50 p-4 md:gap-[24px] md:rounded-[16px] md:p-[24px]"
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Title and description */}
        <div className="flex flex-col gap-2 text-white md:gap-[16px]">
          <h3 className="text-xl leading-tight font-semibold md:text-[28px] md:leading-[38px]">
            {story.title}
          </h3>
          <p className="text-sm leading-relaxed font-medium md:text-[16px] md:leading-[28px]">
            {story.desc}
          </p>
        </div>

        {/* Button */}
        <div className="group flex cursor-pointer items-center gap-2 text-sm font-semibold text-white md:gap-[8px] md:text-[16px]">
          Xem chi tiết
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
}

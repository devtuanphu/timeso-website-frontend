"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import type { UserStoriesSection, UserStoryItem as UserStory } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

import "swiper/css";
import "swiper/css/navigation";

// Fallback colors from Figma design, used if Strapi doesn't provide mau_nen
const FIGMA_BG_COLORS = ["#1570EF", "#45556C", "#2B7FFF", "#01BCBC"];

interface UserStoriesProps {
  data?: UserStoriesSection | null;
}

export default function UserStories({ data }: UserStoriesProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!data?.stories?.length) return null;

  const title = data.tieu_de ?? "";
  const description = data.mo_ta ?? "";
  const stories = data.stories.map((story: UserStory, index: number) => ({
    title: story.tieu_de,
    desc: story.mo_ta ?? "",
    icon: getStrapiMediaUrl(story.hinh_anh) ?? "/images/placeholder.svg",
    bg: story.mau_nen || FIGMA_BG_COLORS[index] || "#1570EF",
  }));

  return (
    <section className="bg-white py-12 md:py-[80px]">
      <div className="mx-auto mb-6 max-w-[1280px] px-4 md:mb-[40px] md:px-[80px]">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#101828] md:text-[48px] md:tracking-[-0.96px]">
          {title}
        </h2>
        <p className="mt-3 text-center text-sm text-[#475467] md:mt-[16px] md:text-[16px]">
          {description}
        </p>
      </div>

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
          {stories.map((story, i) => (
            <SwiperSlide key={i}>
              <StoryCard story={story} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-end gap-4 px-4 md:mt-[32px] md:gap-[32px] md:px-[80px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EAECF0] bg-white/90 backdrop-blur-sm transition hover:bg-gray-50 md:h-[56px] md:w-[56px]"
        >
          <ArrowLeft className="h-5 w-5 text-[#344054] md:h-6 md:w-6" strokeWidth={2} />
        </button>
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
  story: { title: string; desc: string; icon: string; bg: string };
}) {
  return (
    <div
      className="relative flex h-[320px] w-full flex-col items-start justify-end gap-4 rounded-[12px] p-4 md:h-[404px] md:gap-[24px] md:rounded-[16px] md:p-[24px]"
      style={{ backgroundColor: story.bg }}
    >
      <div className="absolute top-4 left-4 h-8 w-8 overflow-hidden md:top-[32px] md:left-[32px] md:h-[40px] md:w-[40px]">
        <Image src={story.icon} alt="" fill className="object-contain" />
      </div>

      <div
        className="flex w-full flex-col gap-4 rounded-[12px] border border-white/50 p-4 md:gap-[24px] md:rounded-[16px] md:p-[24px]"
        style={{ background: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex flex-col gap-2 text-white md:gap-[16px]">
          <h3 className="text-xl leading-tight font-semibold md:text-[28px] md:leading-[38px]">
            {story.title}
          </h3>
          <p className="text-sm leading-relaxed font-medium md:text-[16px] md:leading-[28px]">
            {story.desc}
          </p>
        </div>
        <div className="group flex cursor-pointer items-center gap-2 text-sm font-semibold text-white md:gap-[8px] md:text-[16px]">
          Xem chi tiết
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-5 md:w-5" />
        </div>
      </div>
    </div>
  );
}

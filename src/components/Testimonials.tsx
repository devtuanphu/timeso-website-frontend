"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// Avatar images from Figma
const AVATAR_1 = "/images/testimonials/9d00e17f297cf8e19d4d37b8965aebaf7811f058.png";
const AVATAR_2 = "/images/testimonials/f1636e25bac66ef56895161ee57e3705824ace9c.png";

// Company logo
const SNOWFLAKE_LOGO = "/images/testimonials/b183bc32020423820d400f5916d1188f10822947.svg";

const TESTIMONIALS = [
  {
    quote:
      "Giao diện người dùng rất trực quan, giúp việc thực hiện công việc trở nên dễ dàng. Dù là mua bán hay quản lý danh mục tài sản số đa dạng của tôi, mọi thứ đều thuận tiện.",
    name: "Mahmud Niloy",
    role: "Super Admin",
    avatar: AVATAR_1,
    logo: SNOWFLAKE_LOGO,
  },
  {
    quote:
      "Tôi là một Freelancer, và việc quản lý thu nhập từ nhiều nền tảng số khác nhau từng là một rắc rối lớn. Mọi thứ thay đổi cho đến khi tôi khám phá ra Block/Timeso.",
    name: "Mahmud Niloy",
    role: "Super Web Designer",
    avatar: AVATAR_2,
    logo: SNOWFLAKE_LOGO,
  },
  {
    quote:
      "Giao diện người dùng rất trực quan, giúp việc thực hiện công việc trở nên dễ dàng. Dù là mua bán hay quản lý danh mục tài sản số đa dạng của tôi, mọi thứ đều thuận tiện.",
    name: "Mahmud Niloy",
    role: "Super Admin",
    avatar: AVATAR_1,
    logo: SNOWFLAKE_LOGO,
  },
  {
    quote:
      "Tôi là một Freelancer, và việc quản lý thu nhập từ nhiều nền tảng số khác nhau từng là một rắc rối lớn. Mọi thứ thay đổi cho đến khi tôi khám phá ra Block/Timeso.",
    name: "Mahmud Niloy",
    role: "Super Web Designer",
    avatar: AVATAR_2,
    logo: SNOWFLAKE_LOGO,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-12 md:py-[80px]">
      {/* Header - centered in container */}
      <div className="mx-auto mb-6 flex max-w-[1280px] flex-col gap-4 px-4 md:mb-[40px] md:flex-row md:items-center md:justify-between md:px-[80px]">
        <h2 className="text-2xl leading-tight font-bold tracking-tight text-[#101828] md:text-[48px] md:leading-[58px] md:tracking-[-0.96px]">
          Khách hàng nói gì về chúng tôi?
        </h2>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3 md:gap-[16px]">
          {/* Left Arrow Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EAECF0] bg-white transition hover:bg-gray-50 md:h-[48px] md:w-[48px]"
          >
            <ArrowLeft className="h-4 w-4 text-[#344054] md:h-5 md:w-5" strokeWidth={2} />
          </button>
          {/* Right Arrow Button - cyan */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00BAC7] transition hover:bg-[#00A3AF] md:h-[48px] md:w-[48px]"
          >
            <ArrowRight className="h-4 w-4 text-white md:h-5 md:w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Swiper Container - full width, left padding matches container */}
      <div className="relative w-full overflow-hidden pl-4 md:pl-[max(80px,calc((100vw-1280px)/2+80px))]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 12 },
            480: { slidesPerView: 1.2, spaceBetween: 16 },
            640: { slidesPerView: 1.5, spaceBetween: 24 },
            1024: { slidesPerView: 2.5, spaceBetween: 32 },
          }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
    logo: string;
  };
}) {
  return (
    <div
      className="relative flex h-[380px] flex-col justify-between overflow-hidden rounded-[16px] p-5 md:h-[450px] md:rounded-[24px] md:p-[32px]"
      style={{
        background: "linear-gradient(180deg, #E6FAFA 0%, #B0F0F0 100%)",
      }}
    >
      {/* Stars */}
      <div className="mb-4 flex gap-1 md:mb-[24px] md:gap-[4px]">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className="text-base text-[#F79009] md:text-[20px]">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[#071A34] italic md:mb-[32px] md:text-[18px] md:leading-[28px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author Section with Avatar */}
      <div className="relative flex items-end justify-between">
        {/* Avatar */}
        <div className="absolute bottom-0 left-0 h-[120px] w-[100px] md:h-[180px] md:w-[150px]">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Name and Role - offset to the right */}
        <div className="ml-[110px] md:ml-[160px]">
          <div className="text-sm font-bold text-[#071A34] md:text-[16px]">{testimonial.name}</div>
          <div className="text-xs text-[#475467] md:text-[14px]">{testimonial.role}</div>
        </div>
      </div>

      {/* Company Logo */}
      <div className="mt-3 ml-[110px] md:mt-[16px] md:ml-[160px]">
        <Image
          src={testimonial.logo}
          alt="Company logo"
          width={120}
          height={24}
          className="h-[18px] w-auto object-contain md:h-[24px]"
        />
      </div>
    </div>
  );
}

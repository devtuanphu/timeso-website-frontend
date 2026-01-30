"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CountUpStats } from "./CountUpStats";

const stats = [
  { value: 12, suffix: "", label: "Ngành nghề áp dụng từ bán lẻ, F&B đến sản xuất" },
  { value: 30, suffix: "%", label: "Tăng hiệu suất vận hành HR trung bình" },
  { value: 5000, suffix: "+", label: "Nhân viên được quản lý và chấm công bằng AI" },
];

const images = [
  {
    src: "/images/recruitment/c29b80739a21e6e6f8454883c205bbe7ec0bece7.png",
    alt: "Cafe",
    className: "absolute top-[80px] left-0 h-[100px] w-[100px]",
  },
  {
    src: "/images/recruitment/302e714f58fb2257078dca46e95644f6aba9f063.png",
    alt: "Restaurant",
    className: "absolute top-[350px] left-0 h-[140px] w-[120px]",
  },
  {
    src: "/images/recruitment/cba621839bc1ea790ec7c154187f1ea99c30bcaf.png",
    alt: "Scanner",
    className: "absolute top-0 left-[220px] h-[80px] w-[130px]",
  },
  {
    src: "/images/recruitment/092303d6b5d08b91913494a824974d41576925b6.png",
    alt: "Business Owner",
    className: "absolute top-[100px] left-[140px] h-[350px] w-[280px] rounded-[16px]",
  },
  {
    src: "/images/recruitment/59aa5e0633c5fca8d22df2512de0f75309adbc61.png",
    alt: "Skyscraper",
    className: "absolute top-[100px] right-0 h-[110px] w-[110px]",
  },
  {
    src: "/images/recruitment/66056b79e40cf5f1996db88693618e15b5821922.png",
    alt: "Spa",
    className: "absolute top-[240px] right-0 h-[120px] w-[130px]",
  },
  {
    src: "/images/recruitment/4209405a7a0ff7ca7d106c8406eb08ad095ed876.png",
    alt: "Warehouse",
    className: "absolute top-[390px] right-0 h-[130px] w-[140px]",
  },
  {
    src: "/images/recruitment/4c59d259432e0ebbba2d36665b07b30807b01fed.png",
    alt: "Exhibition",
    className: "absolute top-[470px] left-[250px] h-[110px] w-[130px]",
  },
  {
    src: "/images/recruitment/ee7c6dcf45a3ab37da88ff4c8e46e7253921d18c.png",
    alt: "Meeting",
    className: "absolute top-[580px] left-[140px] h-[100px] w-[100px]",
  },
];

export function DaLinhVucSection() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="bg-white px-4 py-16 md:px-8 md:py-[80px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mb-3 text-[14px] text-[#212121] md:text-[16px]"
            >
              Phát triển ứng dụng
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-[28px] font-bold tracking-[-0.02em] text-[#01CFCF] uppercase md:mb-10 md:text-[40px] lg:text-[56px]"
            >
              ĐA LĨNH VỰC
            </motion.h2>

            {/* Stats - vertical on mobile, horizontal on md+ */}
            <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                  className="flex flex-col items-center text-center md:flex-1 lg:items-start lg:text-left"
                >
                  <p className="mb-2 text-[32px] font-bold text-[#212121] md:text-[40px] lg:text-[48px]">
                    <CountUpStats value={stat.value} suffix={stat.suffix} separator="." />
                  </p>
                  <p className="text-[14px] leading-[20px] text-[#475467]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Images - Circular scattered layout */}
          <div className="relative mt-8 h-[400px] w-full lg:mt-0 lg:h-[650px] lg:w-[55%]">
            <div className="absolute top-0 left-1/2 h-[650px] w-[580px] origin-top -translate-x-1/2 scale-[0.6] sm:scale-75 md:scale-90 lg:static lg:top-auto lg:left-auto lg:w-full lg:origin-top-left lg:translate-x-0 lg:scale-100">
              {/* Cyan Dots */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-[200px] left-[15px] grid grid-cols-7 gap-[6px]"
              >
                {[...Array(56)].map((_, i) => (
                  <div key={i} className="h-[6px] w-[6px] rounded-full bg-[#00E2E2]" />
                ))}
              </motion.div>

              {/* Images */}
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className={`${img.className} overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]`}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

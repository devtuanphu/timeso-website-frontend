"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const MODULES = [
  {
    id: 1,
    title: "Tuyển dụng",
    desc: "Tự động lọc CV, đánh giá ứng viên và quản lý toàn bộ quy trình tuyển dụng trên một nền tảng.",
    image: "/images/all-in-one/590d59e746e6e2148986c4d0850c4434393b07c0.png",
  },
  {
    id: 2,
    title: "Quản lý nhân sự tự động",
    desc: "Lưu trữ hồ sơ điện tử, theo dõi hợp đồng – lương – phụ cấp và xử lý onboarding/offboarding tự động.",
    image: "/images/all-in-one/a998eb2ed393b08cb42215a71c61c1ac9cc019bb.png",
  },
  {
    id: 3,
    title: "Chấm công & Theo dõi hiệu suất",
    desc: "Chấm công bằng AI (FaceID, GPS, Wi-Fi), phát hiện bất thường và đánh giá KPI theo thời gian thực.",
    image: "/images/all-in-one/590d59e746e6e2148986c4d0850c4434393b07c0.png",
  },
  {
    id: 4,
    title: "Tạo đơn hàng",
    desc: "Timeso giúp cửa hàng tạo đơn nhanh chóng, thanh toán dễ dàng. Quản lý lịch hẹn, đơn hàng một cách rõ ràng, hạn chế nhầm lẫn và trùng lịch.",
    image: "/images/all-in-one/a998eb2ed393b08cb42215a71c61c1ac9cc019bb.png",
  },
  {
    id: 5,
    title: "Quản lý tài sản",
    desc: "Theo dõi thiết bị cấp phát, tình trạng sử dụng và lịch sử bàn giao theo từng nhân viên.",
    image: "/images/all-in-one/590d59e746e6e2148986c4d0850c4434393b07c0.png",
  },
];

export default function AllInOne() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="overflow-hidden bg-[#FCFFFF] py-12 md:py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-20">
          <h2 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-6 md:text-[48px] md:leading-[1.2] md:tracking-[-0.96px]">
            Mọi tính năng bạn cần <span className="text-[#101828]/60">— trong một nền tảng</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#475467] md:text-[18px] md:leading-[28px]">
            Tự động hóa quy trình và tối ưu vận hành từ tuyển dụng đến quản lý nhân sự.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Tabs */}
          <div className="flex w-full flex-col gap-0 lg:w-[500px]">
            {MODULES.map((mod) => (
              <div
                key={mod.id}
                onClick={() => setActiveId(mod.id)}
                className={`relative cursor-pointer py-4 pl-6 transition-all duration-300 md:py-6 md:pl-8`}
              >
                {/* Active Indicator */}
                {activeId === mod.id && (
                  <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#01BCBC] md:w-[4px]"></div>
                )}

                <h3
                  className={`mb-1 text-lg font-bold md:mb-2 md:text-[24px] ${activeId === mod.id ? "text-[#101828]" : "text-[#101828]/70"}`}
                >
                  {mod.title}
                </h3>

                <div className="duration-500">
                  <p className="mb-3 text-sm leading-relaxed text-[#475467] md:mb-4 md:text-[16px] md:leading-[24px]">
                    {mod.desc}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#01BCBC] transition-colors hover:text-[#01A8A8] md:text-[16px]">
                    Xem chi tiết
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Mockup */}
          <div className="relative flex-1">
            <div className="relative z-10 mx-auto max-w-[800px]">
              {/* MacBook Pro Mockup Style */}
              <div className="relative aspect-16/10 overflow-hidden rounded-xl border-8 border-[#344054] bg-[#1D2939] shadow-xl md:rounded-3xl md:border-12 md:shadow-2xl">
                <div className="absolute top-0 right-0 left-0 h-4 bg-[#344054]/50 backdrop-blur-sm md:h-6"></div>
                <div className="relative h-full w-full pt-4 md:pt-6">
                  <Image
                    src={MODULES.find((m) => m.id === activeId)?.image || MODULES[2].image}
                    alt="Timeso Dashboard"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -z-10 h-[150%] w-[150%] -translate-y-1/2 rounded-full bg-linear-to-l from-[#E6FAFA] to-transparent opacity-60 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

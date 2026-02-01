"use client";

import Image from "next/image";
import type { AiSection, FeatureItem } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Asset Constants (Figma hashes) - Fallback
const ICON_BADGE = "/images/ai-features/3d8e558f616f315cbad59f89011b5f38bb69daeb.svg";
const ICON_TRACKING = "/images/ai-features/v2/e14180eedc20164e61d19332e203164af616145e.svg";
const ICON_MATCHING = "/images/ai-features/v2/2f3fc883e9bd51dce429cfe095498b07e655ab60.svg";
const ICON_INSIGHTS = "/images/ai-features/v2/c54e0c0727a937b17aca19dbe262dae12811c588.svg";
const MOCKUP_MAIN = "/images/ai-features/6c8d12863128766f14e439931aa6554efe391b38.png";

const DEFAULT_FEATURES = [
  {
    icon: ICON_TRACKING,
    title: "AI Tracking",
    description: "Tự động phát hiện bất thường trong giờ làm, vị trí, và sự sụt giảm hiệu suất.",
  },
  {
    icon: ICON_MATCHING,
    title: "AI Matching",
    description: "Phân tích CV chuyên sâu, chấm điểm phù hợp và ưu tiên ứng viên tốt nhất.",
  },
  {
    icon: ICON_INSIGHTS,
    title: "AI Insights",
    description: "Dự đoán năng suất, rủi ro nghỉ việc, và đề xuất tối ưu ca làm.",
  },
];

interface AISectionRefinedProps {
  data?: AiSection | null;
}

export default function AISectionRefined({ data }: AISectionRefinedProps) {
  const title = data?.tieu_de ?? "AI giúp cửa hàng vận hành nhanh hơn và chính xác hơn";
  const mockupImage = getStrapiMediaUrl(data?.hinh_anh) ?? MOCKUP_MAIN;

  const features = data?.tinh_nang?.length
    ? data.tinh_nang.map((item: FeatureItem, index: number) => ({
        icon: getStrapiMediaUrl(item.icon) ?? DEFAULT_FEATURES[index]?.icon ?? ICON_TRACKING,
        title: item.tieu_de,
        description: item.mo_ta ?? "",
      }))
    : DEFAULT_FEATURES;

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-16">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-br from-[#00E2E2] to-[#00969E] px-3 py-1 shadow-lg shadow-[#00969E]/20 md:mb-6 md:px-4 md:py-1.5">
            <div className="relative h-3 w-3 md:h-4 md:w-4">
              <Image src={ICON_BADGE} alt="" fill className="object-contain brightness-0 invert" />
            </div>
            <span className="text-xs font-medium text-white md:text-sm">AI Features</span>
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl text-2xl leading-tight font-bold tracking-tight text-[#101828] md:text-[36px] md:leading-[1.2] lg:text-[44px]">
            <span className="text-[#00BAC7]">AI</span> {title.replace(/^AI\s*/i, "")}
          </h2>
        </div>

        {/* Central Mockup Image */}
        <div className="relative mb-12 flex justify-center md:mb-24">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6FAFA] opacity-60 blur-[80px] md:h-[600px] md:w-[600px] md:blur-[100px]"></div>

          <div className="relative z-10 w-full max-w-[1000px]">
            <Image
              src={mockupImage}
              alt="Timeso AI Dashboard Mockup"
              width={1280}
              height={800}
              className="h-auto w-full drop-shadow-xl md:drop-shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border-6 border-white bg-[#E6FAFA] shadow-lg shadow-[#101828]/5 md:mb-6 md:h-16 md:w-16 md:rounded-[24px] md:border-8 md:shadow-xl">
                <div className="relative h-5 w-5 md:h-6 md:w-6">
                  <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#101828] md:mb-3 md:text-[24px]">
                {feature.title}
              </h3>
              <p className="max-w-[320px] text-sm leading-relaxed text-[#475467] md:text-[16px] md:leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

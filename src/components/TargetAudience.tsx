"use client";

import Image from "next/image";
import type { TargetAudienceSection, TargetAudienceItem } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface TargetAudienceProps {
  data?: TargetAudienceSection | null;
}

export default function TargetAudience({ data }: TargetAudienceProps) {
  if (!data?.doi_tuong?.length) return null;

  const industries = data.doi_tuong.map((item: TargetAudienceItem) => ({
    name: item.tieu_de,
    description: item.mo_ta ?? "",
    img: getStrapiMediaUrl(item.icon) ?? "/images/placeholder.png",
  }));

  return (
    <section className="bg-white py-12 md:py-[80px]" id="customers">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 md:gap-[40px] md:px-[32px]">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#101828] capitalize md:text-[48px] md:tracking-[-0.96px]">
          Ai Nên Tin Dùng{" "}
          <span
            className="bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #00E2E2 0%, #00969E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Timeso
          </span>
        </h2>

        {/* Cards */}
        <div className="flex w-full flex-col gap-4 md:gap-[24px]">
          {/* Mobile */}
          <div className="flex flex-col gap-4 md:hidden">
            {industries.map((ind, i) => (
              <IndustryCardMobile key={i} industry={ind} />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:flex md:flex-col md:gap-[24px]">
            <div className="flex justify-center gap-[24px]">
              {industries.slice(0, 2).map((ind, i) => (
                <IndustryCard key={i} industry={ind} />
              ))}
            </div>
            <div className="flex justify-center gap-[24px]">
              {industries.slice(2, 5).map((ind, i) => (
                <IndustryCard key={i + 2} industry={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
}: {
  industry: { name: string; description: string; img: string };
}) {
  return (
    <div className="relative h-[340px] w-[280px] overflow-hidden rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[48px] bg-[rgba(243,244,246,0.7)]">
      <div className="absolute right-[7.5%] bottom-[64px] left-[7.5%] h-[286px]">
        <Image src={industry.img} alt={industry.name} fill className="object-cover" />
      </div>
      <div
        className="absolute top-1/2 right-0 bottom-0 left-0"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #f7f7f8 40%)" }}
      />
      <div className="absolute right-0 bottom-[24px] left-0 flex flex-col items-center gap-[8px] px-[16px] text-center">
        <h3 className="text-[16px] font-bold text-black">{industry.name}</h3>
        <p className="text-[12px] leading-[19.5px] text-[#45556C]">{industry.description}</p>
      </div>
    </div>
  );
}

function IndustryCardMobile({
  industry,
}: {
  industry: { name: string; description: string; img: string };
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-[16px] bg-[rgba(243,244,246,0.7)]">
      <div className="relative h-[180px] w-full">
        <Image src={industry.img} alt={industry.name} fill className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 40%, #f7f7f8 100%)",
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-2 px-4 pt-2 pb-5 text-center">
        <h3 className="text-base font-bold text-black">{industry.name}</h3>
        <p className="text-sm leading-relaxed text-[#45556C]">{industry.description}</p>
      </div>
    </div>
  );
}

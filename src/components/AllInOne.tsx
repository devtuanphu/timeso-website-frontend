"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type { AllInOneSection, AllInOneModule } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface AllInOneProps {
  data?: AllInOneSection | null;
}

export default function AllInOne({ data }: AllInOneProps) {
  const [activeId, setActiveId] = useState(1);

  if (!data?.modules?.length) return null;

  const modules = data.modules.map((mod: AllInOneModule, index: number) => ({
    id: index + 1,
    title: mod.tieu_de,
    desc: mod.mo_ta ?? "",
    image: getStrapiMediaUrl(mod.hinh_anh) ?? "/images/placeholder.png",
  }));

  const title = data.tieu_de ?? "";
  const titleSuffix = data.tieu_de_phu ?? "";
  const description = data.mo_ta ?? "";

  return (
    <section className="overflow-hidden bg-[#FCFFFF] py-12 md:py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-20">
          <h2 className="mb-4 text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-6 md:text-[48px] md:leading-[1.2] md:tracking-[-0.96px]">
            {title} <span className="text-[#101828]/60">{titleSuffix}</span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[#475467] md:text-[18px] md:leading-[28px]">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Tabs */}
          <div className="flex w-full flex-col gap-0 lg:w-[500px]">
            {modules.map((mod) => (
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
                    src={modules.find((m) => m.id === activeId)?.image || modules[0].image}
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

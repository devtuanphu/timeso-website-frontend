import Image from "next/image";
import type { HeroSection } from "@/types/strapi";

const HERO_BG = "/images/case-studies/12e428e0998316a6841f644e6991b461febcdf80.png";

// Icons from Figma
const ICON_CALENDAR = "/images/case-studies/1909b61f4bcd5c4448d50568c75d6f89a900594c.svg";
const ICON_GPS = "/images/case-studies/6b66bf9d270d46d18d7d9b0f5931576c734e0399.svg";
const ICON_SYNC = "/images/case-studies/050fafafd915d6db72c5f8596e6901ac6959d478.svg";

const HIGHLIGHT_ICONS = [ICON_CALENDAR, ICON_GPS, ICON_SYNC];

interface CaseStudiesHeroProps {
  data?: HeroSection | null;
}

export default function CaseStudiesHero({ data }: CaseStudiesHeroProps) {
  if (!data) return null;

  const title = data.tieu_de ?? "";
  const description = data.mo_ta ?? "";

  return (
    <section className="relative min-h-[600px] overflow-hidden pt-[140px] pb-16 md:min-h-[700px] md:pt-[160px] md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={HERO_BG} alt="Case Studies Background" fill className="object-cover" priority />
        {/* Overlay - subtle gradient from left */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/85 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-[80px]">
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Title & Description */}
          <div className="max-w-[700px]">
            {/* Main Title */}
            <h1 className="mb-6 text-[32px] leading-[1.3] font-extrabold tracking-[-0.02em] text-[#42485B] capitalize md:text-[48px] md:leading-[64px]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base leading-[26px] text-[#314158] md:text-[16px]">{description}</p>
          </div>

          {/* Highlight Cards - Dark semi-transparent background */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-20">
            {[
              { icon: HIGHLIGHT_ICONS[0], text: "Tự động hóa giao – nhận ca, giảm lỗi thủ công." },
              { icon: HIGHLIGHT_ICONS[1], text: "Theo dõi hiệu suất nhân sự theo thời gian thực." },
              {
                icon: HIGHLIGHT_ICONS[2],
                text: "Đồng bộ ca làm, lương thưởng và báo cáo trong một hệ thống.",
              },
            ].map((item: { icon: string; text: string }, idx: number) => (
              <div key={idx} className="flex items-center gap-4 rounded-[16px] bg-black/60 p-6">
                <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                <p className="text-[16px] leading-[26px] font-medium text-white md:text-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap, Users, Headphones, Lock, Store } from "lucide-react";
import type { WhyChooseSection, FeatureItem } from "@/types/strapi";

const ICON_COLORS = ["#00E5FF", "#6366F1", "#B24A4A", "#D97706"];
const ICON_NAMES = ["Zap", "Users", "Headphones", "Lock"];

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Users,
  Headphones,
  Lock,
  Store,
};

interface WhyChooseProps {
  data?: WhyChooseSection | null;
}

export default function WhyChoose({ data }: WhyChooseProps) {
  if (!data?.cac_ly_do?.length) return null;

  const title = data.tieu_de ?? "";
  const cards = data.cac_ly_do.map((item: FeatureItem, index: number) => ({
    icon: ICON_NAMES[index] ?? "Store",
    title: item.tieu_de,
    description: item.mo_ta ?? "",
    color: ICON_COLORS[index] ?? "#00BAC7",
  }));

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading and supporting text */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-20">
          <h2 className="mb-3 text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-4 md:text-[48px] md:leading-[1.1] md:tracking-[-0.96px]">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-[#475467] md:text-[16px] md:leading-[24px]">
            {""}
          </p>
        </div>

        {/* Cross Grid Layout */}
        <div className="relative">
          {/* Crossing Lines */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px bg-linear-to-b from-[#00BAC7]/0 via-[#00BAC7]/40 to-[#00BAC7]/0 md:block"></div>
          <div className="absolute top-1/2 right-0 left-0 hidden h-px bg-linear-to-r from-[#00BAC7]/0 via-[#00BAC7]/40 to-[#00BAC7]/0 md:block"></div>

          {/* Center Badge */}
          <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="relative flex h-[100px] w-[100px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#00BAC7]/20"></div>
              <div className="absolute inset-2 rounded-full bg-linear-to-br from-[#E6FAFA] to-[#00BAC7]/10 shadow-[0_0_40px_rgba(0,186,199,0.2)]"></div>
              <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#00BAC7] text-white shadow-lg">
                <Store className="h-6 w-6" />
              </div>
              <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[#00BAC7]"></div>
              <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[#00BAC7]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0">
            {cards.map((card, index) => {
              const Icon = IconMap[card.icon] ?? Store;
              const isHighlighted = index === 0 || index === 3;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-16"
                  style={
                    isHighlighted
                      ? {
                          background:
                            "linear-gradient(125.486deg, rgba(255, 255, 255, 0.1) 0%, rgba(117, 255, 255, 0.1) 100%)",
                        }
                      : undefined
                  }
                >
                  <div
                    className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-xl shadow-lg md:mb-8 md:h-[64px] md:w-[64px]"
                    style={{
                      backgroundColor: card.color,
                      boxShadow: `0 10px 15px -3px ${card.color}33`,
                    }}
                  >
                    <Icon className="h-6 w-6 text-white md:h-7 md:w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-[#101828] md:mb-4 md:text-[28px] md:tracking-[-0.56px]">
                    {card.title}
                  </h3>
                  <p className="max-w-[320px] text-base leading-relaxed text-[#62748E] md:text-[20px] md:leading-[28px]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

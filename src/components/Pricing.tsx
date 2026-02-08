"use client";

import { Check } from "lucide-react";
import type { PricingSection, PricingPlan } from "@/types/strapi";

const PLAN_COLORS = [
  {
    nameColor: "#00BAC7",
    buttonStyle: "border border-[#00BAC7] text-[#00BAC7] hover:bg-[#00BAC7]/5",
    checkColor: "text-[#00BAC7]",
  },
  {
    nameColor: "#ffffff",
    buttonStyle: "bg-white text-[#00BAC7] hover:bg-gray-50",
    checkColor: "text-[#00BAC7]",
  },
  {
    nameColor: "#6366F1",
    buttonStyle: "bg-[#6366F1] text-white hover:bg-[#5558E6]",
    checkColor: "text-[#6366F1]",
  },
];

interface PricingProps {
  data?: PricingSection | null;
}

export default function Pricing({ data }: PricingProps) {
  if (!data?.goi_gia?.length) return null;

  const title = data.tieu_de ?? "";
  const description = data.mo_ta ?? "";
  const plans = data.goi_gia.map((plan: PricingPlan, index: number) => ({
    name: plan.ten_goi,
    price: plan.gia,
    period: plan.don_vi ?? "/per month",
    description: plan.mo_ta ?? "",
    features: Array.isArray(plan.tinh_nang) ? plan.tinh_nang : [],
    buttonText: plan.nut_text ?? "Get Started",
    nameColor: PLAN_COLORS[index]?.nameColor ?? "#00BAC7",
    buttonStyle: PLAN_COLORS[index]?.buttonStyle ?? "border border-[#00BAC7] text-[#00BAC7]",
    checkColor: PLAN_COLORS[index]?.checkColor ?? "text-[#00BAC7]",
    isPopular: plan.noi_bat ?? false,
    hasDashedBorder: index === 2,
  }));

  return (
    <section className="bg-white py-12 md:py-[80px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-[80px]">
        {/* Header */}
        <div className="mb-8 text-center md:mb-[48px]">
          <h2
            className="text-2xl leading-tight font-bold tracking-tight text-[#101828] md:text-[48px] md:leading-[58px] md:tracking-[-0.96px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="mt-3 text-sm leading-relaxed text-[#475467] md:mt-[16px] md:text-[18px] md:leading-[28px]">
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-[32px]">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-[16px] p-6 md:p-[32px]"
              style={{
                border: plan.hasDashedBorder ? "2px dashed #00BAC7" : "1px solid #EAECF0",
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-4 right-4 rounded-full border border-[#D0D5DD] px-3 py-1 text-[11px] font-medium text-[#344054] md:top-[24px] md:right-[24px] md:px-[12px] md:py-[4px] md:text-[12px]">
                  Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-lg font-semibold md:text-[20px] ${plan.nameColor}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-1 md:mt-[16px] md:gap-[4px]">
                <span className="text-4xl leading-tight font-bold tracking-tight text-[#101828] md:text-[48px] md:leading-[60px] md:tracking-[-0.96px]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#475467] md:text-[16px]">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed text-[#475467] md:mt-[8px] md:text-[14px] md:leading-[20px]">
                {plan.description}
              </p>

              {/* CTA Button */}
              <button
                className={`mt-5 w-full rounded-full py-3 text-sm font-semibold transition md:mt-[24px] md:py-[12px] md:text-[16px] ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>

              {/* Divider */}
              <div className="my-5 h-px bg-[#EAECF0] md:my-[24px]" />

              {/* Features List */}
              <ul className="flex flex-col gap-3 md:gap-[16px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-[12px]">
                    <Check className={`h-4 w-4 shrink-0 md:h-5 md:w-5 ${plan.checkColor}`} />
                    <span className="text-xs text-[#475467] md:text-[14px]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

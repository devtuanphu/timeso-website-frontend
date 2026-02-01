"use client";

import { Check } from "lucide-react";
import type { PricingSection, PricingPlan } from "@/types/strapi";

// Default plans (fallback)
const DEFAULT_PLANS = [
  {
    name: "Free",
    nameColor: "text-[#00BAC7]",
    price: "$0",
    period: "/per month",
    description: "Great for trying out Frames X component and templates.",
    buttonText: "Get Started",
    buttonStyle: "border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50",
    features: [
      "Design Guidelines",
      "10 Web Components",
      "5 Web Templates",
      "Component Properties",
      "Advanced Security",
    ],
    checkColor: "text-[#98A2B3]",
    isPopular: false,
    hasDashedBorder: false,
  },
  {
    name: "Professional",
    nameColor: "text-[#101828]",
    price: "$97",
    period: "/per month",
    description: "Best for professional freelancers and small teams.",
    buttonText: "Get Started",
    buttonStyle: "bg-[#00BAC7] text-white hover:bg-[#00A3AF]",
    features: [
      "Everything in Free",
      "20 Web Components",
      "15 Web Templates",
      "Variants & Properties",
      "Enhanced Security",
    ],
    checkColor: "text-[#00BAC7]",
    isPopular: true,
    hasDashedBorder: true,
  },
  {
    name: "Enterprise",
    nameColor: "text-[#00BAC7]",
    price: "$257",
    period: "/per month",
    description: "Best for growing large company or enterprise design team.",
    buttonText: "Book a call",
    buttonStyle: "border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50",
    features: [
      "Design System Foundation",
      "50 Web Components",
      "25 Web Templates",
      "Variants & Properties",
      "Priority Security",
    ],
    checkColor: "text-[#00BAC7]",
    isPopular: false,
    hasDashedBorder: false,
  },
];

const DEFAULT_CONTENT = {
  title: "Choose the",
  titleHighlight: "Right Plan!",
  description:
    "Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!",
};

interface PricingProps {
  data?: PricingSection | null;
}

export default function Pricing({ data }: PricingProps) {
  const title =
    data?.tieu_de ??
    `${DEFAULT_CONTENT.title} <span class="text-[#00BAC7] italic">${DEFAULT_CONTENT.titleHighlight}</span>`;
  const description = data?.mo_ta ?? DEFAULT_CONTENT.description;

  const plans = data?.goi_gia?.length
    ? data.goi_gia.map((plan: PricingPlan, index: number) => ({
        name: plan.ten_goi,
        nameColor: plan.noi_bat ? "text-[#101828]" : "text-[#00BAC7]",
        price: plan.gia,
        period: plan.don_vi ?? "/tháng",
        description: plan.mo_ta ?? "",
        buttonText: plan.nut_text ?? "Bắt đầu",
        buttonStyle: plan.noi_bat
          ? "bg-[#00BAC7] text-white hover:bg-[#00A3AF]"
          : "border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50",
        features: plan.tinh_nang ?? [],
        checkColor: plan.noi_bat ? "text-[#00BAC7]" : "text-[#98A2B3]",
        isPopular: plan.noi_bat ?? false,
        hasDashedBorder: plan.noi_bat ?? false,
      }))
    : DEFAULT_PLANS;

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

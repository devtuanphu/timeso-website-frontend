"use client";

import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { LienHeData, TheLienHe } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Fallback card data
const FALLBACK_CARDS: TheLienHe[] = [
  {
    tieu_de: "Chat to sales",
    mo_ta: "Speak to our friendly team.",
    gia_tri: "",
    loai: "email",
  },
  {
    tieu_de: "Visit us",
    mo_ta: "Visit our office HQ.",
    gia_tri: "",
    loai: "address",
  },
  {
    tieu_de: "Call us",
    mo_ta: "",
    gia_tri: "",
    loai: "phone",
  },
];

const FALLBACK_ICONS: Record<string, string> = {
  email: "/images/contact/Featured icon.png",
  address: "/images/contact/Featured icon2.png",
  phone: "/images/contact/Featured icon3.png",
};

function getCardHref(loai: string, value: string): string {
  if (loai === "email") return `mailto:${value}`;
  if (loai === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return "#";
}

interface ContactPageClientProps {
  strapiData?: LienHeData | null;
}

export function ContactPageClient({ strapiData }: ContactPageClientProps) {
  if (!strapiData) return null;

  // Hero image
  const heroImage = "/figma_assets/463c3571bb784baeb275a97250798b8cbdc26b2c.png";

  // Contact info (used as fallback values for cards)
  const email = strapiData.email ?? "";
  const address = strapiData.dia_chi ?? "";
  const phone = strapiData.so_dien_thoai ?? "";
  const hours = strapiData.gio_lam_viec ?? "";

  // Build cards from CMS data or fallback
  const cmsCards = strapiData.the_lien_he?.length ? strapiData.the_lien_he : null;
  const cards = cmsCards || FALLBACK_CARDS.map((card) => ({
    ...card,
    gia_tri: card.loai === "email" ? email : card.loai === "address" ? address : phone,
    mo_ta: card.loai === "phone" ? hours : card.mo_ta,
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedHero>
        <div className="container mx-auto px-4 pt-[120px] md:pt-[160px]">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Form */}
            <ContactForm />

            {/* Right Column - Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                <Image src={heroImage} alt="Timeso App" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedHero>

      {/* Office Image Section */}
      <AnimatedPageSection delay={0.1}>
        <div className="container mx-auto mt-16 px-4 md:mt-24">
          <div className="relative aspect-3/1 w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/figma_assets/2fb5e002bbde20b8fcf8bb51fa906026401747e4.png"
              alt="Timeso Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedPageSection>

      {/* Contact Cards Section */}
      <AnimatedPageSection delay={0.1}>
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((card, idx) => {
              const strapiIconUrl = getStrapiMediaUrl(card.icon);
              const iconSrc = strapiIconUrl || FALLBACK_ICONS[card.loai] || FALLBACK_ICONS.email;
              return (
                <div key={idx} className="rounded-2xl bg-white p-6">
                  <div className="mb-6">
                    <Image
                      src={iconSrc}
                      alt={card.tieu_de}
                      width={48}
                      height={48}
                      unoptimized={!!strapiIconUrl}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#101828]">{card.tieu_de}</h3>
                  {card.mo_ta && (
                    <p className="mb-4 text-base text-[#475467]">{card.mo_ta}</p>
                  )}
                  <a
                    href={getCardHref(card.loai, card.gia_tri)}
                    className="font-semibold whitespace-pre-line text-[#01CFCF] hover:underline"
                  >
                    {card.gia_tri}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedPageSection>
    </div>
  );
}

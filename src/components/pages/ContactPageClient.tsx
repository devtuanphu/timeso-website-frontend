"use client";

import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { LienHeData } from "@/types/strapi";

interface ContactPageClientProps {
  strapiData?: LienHeData | null;
}

export function ContactPageClient({ strapiData }: ContactPageClientProps) {
  if (!strapiData) return null;

  // Hero image
  const heroImage = "/figma_assets/463c3571bb784baeb275a97250798b8cbdc26b2c.png";

  // Contact info
  const email = strapiData.email ?? "";
  const address = strapiData.dia_chi ?? "";
  const phone = strapiData.so_dien_thoai ?? "";
  const hours = strapiData.gio_lam_viec ?? "";

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
            {/* Chat Card */}
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-6">
                <Image src="/images/contact/Featured icon.png" alt="Chat" width={48} height={48} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#101828]">Chat to sales</h3>
              <p className="mb-4 text-base text-[#475467]">Speak to our friendly team.</p>
              <a href={`mailto:${email}`} className="font-semibold text-[#01CFCF] hover:underline">
                {email}
              </a>
            </div>

            {/* Visit Card */}
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-6">
                <Image
                  src="/images/contact/Featured icon2.png"
                  alt="Visit"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#101828]">Visit us</h3>
              <p className="mb-4 text-base text-[#475467]">Visit our office HQ.</p>
              <a
                href="#"
                className="font-semibold whitespace-pre-line text-[#01CFCF] hover:underline"
              >
                {address}
              </a>
            </div>

            {/* Call Card */}
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-6">
                <Image src="/images/contact/Featured icon3.png" alt="Call" width={48} height={48} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[#101828]">Call us</h3>
              <p className="mb-4 text-base text-[#475467]">{hours}</p>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="font-semibold text-[#01CFCF] hover:underline"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </AnimatedPageSection>
    </div>
  );
}

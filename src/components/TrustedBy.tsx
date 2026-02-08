"use client";

import Image from "next/image";
import type { TrustedBySection } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

interface TrustedByProps {
  data?: TrustedBySection | null;
}

export default function TrustedBy({ data }: TrustedByProps) {
  if (!data?.logos?.length) return null;

  // Use Strapi data
  const logos = data.logos.map((logo) => ({
    src: getStrapiMediaUrl(logo) ?? "/images/placeholder.svg",
    alt: logo.alternativeText ?? "Partner logo",
    h: logo.height ?? 32,
    w: logo.width ?? 120,
  }));

  const title = data.tieu_de ?? "";

  // Split logos into two rows
  const row1 = logos.slice(0, Math.ceil(logos.length / 2));
  const row2 = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white py-12 md:py-20">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[20px] text-[#005757]" dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div className="relative flex flex-col gap-12 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:gap-16">
        {/* Row 1: Right to Left */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12 px-12 sm:gap-24 sm:px-24">
            {row1.map((logo, index) => (
              <div
                key={`r1-1-${index}`}
                className="relative shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                style={{ height: logo.h, width: "auto" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12 px-12 sm:gap-24 sm:px-24">
            {row1.map((logo, index) => (
              <div
                key={`r1-2-${index}`}
                className="relative shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                style={{ height: logo.h, width: "auto" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-12 px-12 sm:gap-24 sm:px-24">
            {row2.map((logo, index) => (
              <div
                key={`r2-1-${index}`}
                className="relative shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                style={{ height: logo.h, width: "auto" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-12 px-12 sm:gap-24 sm:px-24">
            {row2.map((logo, index) => (
              <div
                key={`r2-2-${index}`}
                className="relative shrink-0 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                style={{ height: logo.h, width: "auto" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import type { TrustedBySection } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Default logos (fallback)
const DEFAULT_LOGOS = [
  {
    src: "/images/logos/trusted-by/v2/c94c9d66a6c5cd994e83225d48b135b9c3851b91.svg",
    alt: "Intercom",
    h: 32,
    w: 141,
  },
  {
    src: "/images/logos/trusted-by/v2/df9a7873b986c6deceafcfbabb4d7dfb5ceca3ee.svg",
    alt: "Andreessen Horowitz",
    h: 32,
    w: 141,
  },
  {
    src: "/images/logos/trusted-by/v2/842d53f8c56e7fd468f86965d4bbc956e8ba6c94.svg",
    alt: "Salesforce Ventures",
    h: 38,
    w: 109,
  },
  {
    src: "/images/logos/trusted-by/v2/0f4172f16cb3c4a18d1f854bed6014e3dd99d719.svg",
    alt: "Monzo",
    h: 26,
    w: 112,
  },
  {
    src: "/images/logos/trusted-by/v2/d45c3f24223209f81861868ab08b02298199cbee.svg",
    alt: "GoCardless",
    h: 20,
    w: 137,
  },
  {
    src: "/images/logos/trusted-by/v2/7d498a0e5f7f2d2d71a92f03ce93f6ac1291780c.svg",
    alt: "Snyk",
    h: 33,
    w: 63,
  },
  {
    src: "/images/logos/trusted-by/v2/d5dfa5f455eee90295d80accdb1f5d4830334776.svg",
    alt: "Comply Advantage",
    h: 27,
    w: 115,
  },
  {
    src: "/images/logos/trusted-by/v2/2b47f551906226d330d0c0558ddb7f0aca4f9783.svg",
    alt: "UiPath",
    h: 33,
    w: 95,
  },
  {
    src: "/images/logos/trusted-by/v2/2a9460592ddc37198a26107360528ae8f247a0d5.svg",
    alt: "Deliveroo",
    h: 32,
    w: 120,
  },
];

const DEFAULT_TITLE = "Trusted by <b>1000+ Teams</b> across <b>100+ Countries</b>";

interface TrustedByProps {
  data?: TrustedBySection | null;
}

export default function TrustedBy({ data }: TrustedByProps) {
  // Use Strapi data or fallback to defaults
  const logos = data?.logos?.length
    ? data.logos.map((logo) => ({
        src: getStrapiMediaUrl(logo) ?? "/images/placeholder.svg",
        alt: logo.alternativeText ?? "Partner logo",
        h: logo.height ?? 32,
        w: logo.width ?? 120,
      }))
    : DEFAULT_LOGOS;

  const title = data?.tieu_de ?? DEFAULT_TITLE;

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

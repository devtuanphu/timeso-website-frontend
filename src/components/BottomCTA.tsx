"use client";

import Link from "next/link";
import Image from "next/image";
import type { CtaSection } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

const APP_STORE_BADGE = "/images/app-store-badge.svg";
const GOOGLE_PLAY_BADGE = "/images/google-play-badge.png";

interface BottomCTAProps {
  data?: CtaSection | null;
}

export default function BottomCTA({ data }: BottomCTAProps) {
  if (!data) return null;

  const title = data.tieu_de ?? "";
  const description = data.mo_ta ?? "";
  const phoneImage = getStrapiMediaUrl(data.hinh_anh) ?? "/images/placeholder.png";
  const appStoreUrl = data.app_store_url ?? "#";
  const googlePlayUrl = data.google_play_url ?? "#";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(278deg, #FFF -2.04%, #A6FFFF 97.41%)",
      }}
    >
      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center md:flex-row md:items-center">
        {/* Left Content */}
        <div className="w-full px-4 py-12 text-center md:w-[760px] md:py-[170px] md:pl-[131px] md:text-left">
          {/* Title */}
          <h2 className="text-2xl leading-tight font-bold tracking-tight text-[#00BAC7] uppercase md:text-[48px] md:leading-[58px] md:tracking-[-0.96px]">
            {title}
          </h2>
          <p className="mb-4 text-xl leading-tight font-medium text-[#101828] md:mb-[20px] md:text-[36px] md:leading-[44px]">
            {description}
          </p>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-[#475467] md:mb-[40px] md:max-w-[486px] md:text-[16px] md:leading-[30px]">
            {description}
          </p>

          {/* App Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-[12px]">
            <Link href={appStoreUrl} className="transition-opacity hover:opacity-80">
              <Image
                src={APP_STORE_BADGE}
                alt="Download on App Store"
                width={132}
                height={44}
                className="h-[40px] w-auto md:h-[44px]"
              />
            </Link>
            <Link href={googlePlayUrl} className="transition-opacity hover:opacity-80">
              <Image
                src={GOOGLE_PLAY_BADGE}
                alt="Get it on Google Play"
                width={165}
                height={64}
                className="-my-2 h-[56px] w-auto md:h-[64px]"
              />
            </Link>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative hidden flex-1 md:block">
          {/* Glowing Circle Background */}
          <div
            className="absolute top-[-6px] left-[21px] h-[557px] w-[557px] rounded-full border-14 border-white"
            style={{
              filter: "blur(8px)",
            }}
          />

          {/* Phone Image */}
          <div className="relative h-[558px] w-[558px]">
            <Image src={phoneImage} alt="Timeso Mobile App" fill className="object-cover" />
          </div>
        </div>

        {/* Mobile Phone Mockup - smaller version */}
        <div className="relative flex justify-center pb-8 md:hidden">
          <div className="relative h-[300px] w-[300px]">
            <Image src={phoneImage} alt="Timeso Mobile App" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

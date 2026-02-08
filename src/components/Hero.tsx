import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { HeroSection } from "@/types/strapi";

// Standard Badges - Local paths
const APP_STORE_BADGE = "/images/app-store-badge.svg";
const GOOGLE_PLAY_BADGE = "/images/google-play-badge.png";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

interface HeroProps {
  data?: HeroSection | null;
}

export default function Hero({ data }: HeroProps) {
  if (!data) return null;

  const title = data.tieu_de ?? "";
  const description = data.mo_ta ?? "";
  const showBadges = data.hien_thi_badges ?? true;
  const appStoreUrl = data.app_store_url ?? "#";
  const googlePlayUrl = data.google_play_url ?? "#";

  // Video URL
  const videoUrl = data?.video?.url
    ? data.video.url.startsWith("http")
      ? data.video.url
      : `${STRAPI_URL}${data.video.url}`
    : null;

  return (
    <section className="bg-white px-4 pt-[120px] pb-[60px] md:px-8 md:pt-[160px] md:pb-[100px]">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          {/* Top Label */}
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#34D9D9] md:text-4xl">
            Timeso
          </h2>

          {/* Main Heading - Single title with hardcoded AI */}
          <h1 className="mb-4 text-center text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-6 md:text-6xl">
            {title}{" "}
            <span className="inline-flex items-center text-[#34D9D9]">
              AI
              <Sparkles className="mb-1 ml-1 h-5 w-5 animate-pulse fill-current text-[#34D9D9] md:mb-2 md:h-8 md:w-8" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-[900px] px-2 text-sm leading-relaxed font-medium text-[#475467] md:mb-10 md:px-0 md:text-lg">
            {description}
          </p>

          {/* Action Buttons (Black Badges) */}
          {showBadges && (
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <Link
                href={appStoreUrl}
                className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
              >
                <Image
                  src={APP_STORE_BADGE}
                  alt="Download on the App Store"
                  width={132}
                  height={44}
                  className="h-[40px] w-auto md:h-[44px]"
                />
              </Link>
              <Link
                href={googlePlayUrl}
                className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
              >
                <Image
                  src={GOOGLE_PLAY_BADGE}
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  className="-my-2 h-[56px] w-auto md:h-[64px]"
                />
              </Link>
            </div>
          )}

          {/* Hero Video */}
          {videoUrl && (
            <div className="mt-10 w-full md:mt-16">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl md:rounded-3xl">
                <video
                  src={videoUrl}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

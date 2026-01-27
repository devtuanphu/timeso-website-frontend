"use client";

import Link from "next/link";
import Image from "next/image";

// Phone mockup image from Figma
const PHONE_MOCKUP = "/images/cta/927772feb12cf7bb3461f8731b250063c9238795.png";

// App store badges (same as Hero)
const APP_STORE_BADGE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1319760000";
const GOOGLE_PLAY_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

export default function BottomCTA() {
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
            TRẢI NGHIỆM NGAY
          </h2>
          <p className="mb-4 text-xl leading-tight font-medium text-[#101828] md:mb-[20px] md:text-[36px] md:leading-[44px]">
            - Nâng tầm cửa hàng của bạn!
          </p>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-[#475467] md:mb-[40px] md:max-w-[486px] md:text-[16px] md:leading-[30px]">
            Dễ dàng theo dõi và tối ưu hiệu suất làm việc của bạn mọi lúc, mọi nơi với bản dùng thử
            miễn phí.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-[12px]">
            <Link href="#" className="transition-opacity hover:opacity-80">
              <Image
                src={APP_STORE_BADGE}
                alt="Download on App Store"
                width={132}
                height={44}
                className="h-[40px] w-auto md:h-[44px]"
                unoptimized
              />
            </Link>
            <Link href="#" className="transition-opacity hover:opacity-80">
              <Image
                src={GOOGLE_PLAY_BADGE}
                alt="Get it on Google Play"
                width={165}
                height={64}
                className="-my-2 h-[56px] w-auto md:h-[64px]"
                unoptimized
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
            <Image src={PHONE_MOCKUP} alt="Timeso Mobile App" fill className="object-cover" />
          </div>
        </div>

        {/* Mobile Phone Mockup - smaller version */}
        <div className="relative flex justify-center pb-8 md:hidden">
          <div className="relative h-[300px] w-[300px]">
            <Image src={PHONE_MOCKUP} alt="Timeso Mobile App" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

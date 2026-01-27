import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Standard Badges
const APP_STORE_BADGE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1319760000";
const GOOGLE_PLAY_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-[120px] pb-[60px] md:px-8 md:pt-[160px] md:pb-[100px]">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          {/* Top Label */}
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#34D9D9] md:text-4xl">
            Timeso
          </h2>

          {/* Main Heading */}
          <h1 className="mb-4 flex flex-col items-center justify-center gap-1 text-center text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-6 md:flex-row md:gap-3 md:text-6xl">
            <span>Nền tảng quản lý</span>
            <span className="flex items-center">
              nhân sự bằng{" "}
              <span className="ml-1 flex items-center text-[#34D9D9]">
                AI
                <Sparkles className="mb-2 ml-1 h-5 w-5 animate-pulse fill-current text-[#34D9D9] md:mb-4 md:h-8 md:w-8" />
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 max-w-[900px] px-2 text-sm leading-relaxed font-medium text-[#475467] md:mb-10 md:px-0 md:text-lg">
            Timeso giúp doanh nghiệp tự động hóa HR bằng AI, từ tuyển dụng đến chấm công và quản lý
            hiệu suất,
            <br className="hidden md:block" />
            giảm giấy tờ để tập trung phát triển nhân tài.
          </p>

          {/* Action Buttons (Black Badges) */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <Link
              href="#"
              className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
            >
              <Image
                src={APP_STORE_BADGE}
                alt="Download on the App Store"
                width={132}
                height={44}
                className="h-[40px] w-auto md:h-[44px]"
                unoptimized
              />
            </Link>
            <Link
              href="#"
              className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
            >
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
      </div>
    </section>
  );
}

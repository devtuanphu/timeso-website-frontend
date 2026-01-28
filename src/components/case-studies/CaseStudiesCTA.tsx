import Image from "next/image";
import Link from "next/link";

const CTA_IMAGE = "/images/case-studies/image 2555.png";
const APP_STORE_BADGE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1319760000";
const GOOGLE_PLAY_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

export default function CaseStudiesCTA() {
  return (
    <section className="bg-[#E6FAFA] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-[80px]">
        <div className="relative overflow-hidden rounded-[32px] bg-[#E6FAFA] px-8 py-12 md:px-[120px] md:py-16">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            {/* Content */}
            <div className="max-w-[600px]">
              <h2 className="mb-4 text-2xl font-semibold text-[#101828] md:text-[36px] md:leading-[44px]">
                Start your free trial
              </h2>
              <p className="mb-8 text-lg text-[#475467]">
                Personal performance tracking made easy.
              </p>

              {/* App Store Badges */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src={APP_STORE_BADGE}
                    alt="Download on the App Store"
                    width={132}
                    height={44}
                    className="h-[44px] w-auto"
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
                    className="-my-2 h-[56px] w-auto"
                    unoptimized
                  />
                </Link>
              </div>
            </div>

            {/* Phone Image */}
            <div className="relative hidden h-[342px] w-[338px] md:block">
              <Image src={CTA_IMAGE} alt="Timeso App Preview" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

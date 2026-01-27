"use client";

import Link from "next/link";
import Image from "next/image";

// Logo image
const LOGO_IMAGE = "/images/footer/logo-footer.png";

// App store badges (same as Hero)
const APP_STORE_BADGE =
  "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1319760000";
const GOOGLE_PLAY_BADGE =
  "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png";

// Contact icons from Figma
const PHONE_ICON = "/images/footer/c5b35aea493fff243b2d2a3fbe675fce8e2d4c7a.svg";
const EMAIL_ICON = "/images/footer/0d0efe4f0ead71f5694ebc674cf4c96f038076e1.svg";
const ZALO_CONTACT_ICON = "/images/footer/zalo.png";

// Social icons from Figma
const FACEBOOK_ICON = "/images/footer/6bd9c262e9e909d471a840b94fd7662aa1acc7f1.svg";
const ZALO_SOCIAL_ICON = "/images/footer/6f421a738d5ec4bc0bd282faaba579a8aaafa88c.svg";
const LINKEDIN_ICON = "/images/footer/4863422491dbcd4863a4b7e02171f18fb2bcb639.svg";
const YOUTUBE_ICON = "/images/footer/4283bd307439130d9437ee8bcfc7baf5dffde60b.svg";

const NAVIGATION_LINKS = [
  { label: "Trang chủ", href: "#" },
  { label: "Tính năng", href: "#" },
  { label: "Case studies", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Về chúng tôi", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#12141D]">
      {/* Main Content */}
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-[80px] md:py-[48px]">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO_IMAGE}
              alt="Timeso"
              width={111}
              height={49}
              className="h-[40px] w-auto"
            />
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <Image
                src={PHONE_ICON}
                alt="Phone"
                width={19}
                height={19}
                className="mt-0.5 h-[18px] w-[18px]"
              />
              <div>
                <div className="text-sm text-[#01CFCF]">Phone</div>
                <div className="text-base font-medium text-white">(219) 555-0114</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Image
                src={EMAIL_ICON}
                alt="Email"
                width={20}
                height={18}
                className="mt-0.5 h-[16px] w-[18px]"
              />
              <div>
                <div className="text-sm text-[#01CFCF]">Email</div>
                <div className="text-base font-medium text-white">getpay@example.com</div>
              </div>
            </div>

            {/* Zalo */}
            <div className="flex items-start gap-3">
              <Image
                src={ZALO_CONTACT_ICON}
                alt="Zalo"
                width={24}
                height={24}
                className="mt-0.5 h-[22px] w-[22px]"
              />
              <div>
                <div className="text-sm text-[#01CFCF]">Zalo</div>
                <div className="text-base font-medium text-white">08748964646</div>
              </div>
            </div>
          </div>

          {/* Navigation + Social Row */}
          <div className="flex justify-between">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-base text-white transition-colors hover:text-[#01CFCF]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-base text-white">Follow us</span>
              <div className="flex flex-col gap-3">
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={FACEBOOK_ICON}
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={ZALO_SOCIAL_ICON}
                    alt="Zalo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={LINKEDIN_ICON}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
                <Link href="#" className="transition-opacity hover:opacity-80">
                  <Image
                    src={YOUTUBE_ICON}
                    alt="YouTube"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* App Downloads */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-[#01CFCF] uppercase">
              TẢI ỨNG DỤNG MIỄN PHÍ
            </span>
            <div className="flex gap-3">
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src={APP_STORE_BADGE}
                  alt="Download on App Store"
                  width={132}
                  height={44}
                  className="h-[44px] w-auto"
                  unoptimized
                />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src={GOOGLE_PLAY_BADGE}
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  className="-my-2 h-[60px] w-auto"
                  unoptimized
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between">
          {/* Column 1: Logo & Contact Info */}
          <div className="flex flex-col gap-[32px]">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={LOGO_IMAGE}
                alt="Timeso"
                width={200}
                height={49}
                className="h-[64px] w-[111px]"
              />
            </Link>

            {/* Contact Info */}
            <div className="flex flex-col gap-[16px]">
              {/* Phone */}
              <div className="flex items-center gap-[16px]">
                <Image
                  src={PHONE_ICON}
                  alt="Phone"
                  width={19}
                  height={19}
                  className="h-[19px] w-[19px]"
                />
                <div>
                  <div className="text-[14px] text-[#01CFCF]">Phone</div>
                  <div className="text-[16px] font-medium text-white">(219) 555-0114</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[16px]">
                <Image
                  src={EMAIL_ICON}
                  alt="Email"
                  width={20}
                  height={18}
                  className="h-[18px] w-[20px]"
                />
                <div>
                  <div className="text-[14px] text-[#01CFCF]">Email</div>
                  <div className="text-[16px] font-medium text-white">getpay@example.com</div>
                </div>
              </div>

              {/* Zalo */}
              <div className="flex items-center gap-[16px]">
                <Image
                  src={ZALO_CONTACT_ICON}
                  alt="Zalo"
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />
                <div>
                  <div className="text-[14px] text-[#01CFCF]">Zalo</div>
                  <div className="text-[16px] font-medium text-white">08456466578</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-[24px]">
            {NAVIGATION_LINKS.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-[16px] text-white transition-colors hover:text-[#01CFCF]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: App Downloads */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] font-medium text-[#01CFCF] uppercase">
              TẢI ỨNG DỤNG MIỄN PHÍ!
            </h3>
            <div className="flex gap-[12px]">
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src={APP_STORE_BADGE}
                  alt="Download on App Store"
                  width={132}
                  height={44}
                  className="h-[44px]"
                  unoptimized
                />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image
                  src={GOOGLE_PLAY_BADGE}
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  className="-my-2 h-[64px]"
                  unoptimized
                />
              </Link>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] text-white">Follow us</h3>
            <div className="flex gap-[16px]">
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image src={FACEBOOK_ICON} alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image src={ZALO_SOCIAL_ICON} alt="Zalo" width={24} height={24} />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image src={LINKEDIN_ICON} alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="transition-opacity hover:opacity-80">
                <Image src={YOUTUBE_ICON} alt="YouTube" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1D2939]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-6 text-center md:flex-row md:items-center md:justify-between md:px-[80px] md:py-[24px] md:text-left">
          <div className="text-sm text-[#667085]">
            © 2025, Copyright owned by Timeso
            <br className="md:hidden" />
            <span className="hidden md:inline"> – </span>
            Support Hotline: 0123456789
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#667085] md:gap-[24px]">
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

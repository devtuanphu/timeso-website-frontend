import Link from "next/link";
import Image from "next/image";
import { getChanTrang } from "@/lib/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";
import type { ThongTinLienLac, LienKet } from "@/types/strapi";

// ==================== Fallback Constants ====================

const LOGO_IMAGE = "/images/footer/logo-footer.png";
const APP_STORE_BADGE = "/images/app-store-badge.svg";
const GOOGLE_PLAY_BADGE = "/images/google-play-badge.png";

const PHONE_ICON = "/images/footer/c5b35aea493fff243b2d2a3fbe675fce8e2d4c7a.svg";
const EMAIL_ICON = "/images/footer/0d0efe4f0ead71f5694ebc674cf4c96f038076e1.svg";
const ZALO_CONTACT_ICON = "/images/footer/zalo.png";

const FACEBOOK_ICON = "/images/footer/6bd9c262e9e909d471a840b94fd7662aa1acc7f1.svg";
const ZALO_SOCIAL_ICON = "/images/footer/6f421a738d5ec4bc0bd282faaba579a8aaafa88c.svg";
const LINKEDIN_ICON = "/images/footer/4863422491dbcd4863a4b7e02171f18fb2bcb639.svg";
const YOUTUBE_ICON = "/images/footer/4283bd307439130d9437ee8bcfc7baf5dffde60b.svg";

const FALLBACK_CONTACTS: ThongTinLienLac[] = [
  { nhan: "Phone", gia_tri: "(219) 555-0114", loai: "phone" },
  { nhan: "Email", gia_tri: "getpay@example.com", loai: "email" },
  { nhan: "Zalo", gia_tri: "08748964646", loai: "zalo" },
];

const FALLBACK_NAV_LINKS: LienKet[] = [
  { nhan: "Trang chủ", duong_dan: "/" },
  { nhan: "Tính năng", duong_dan: "#" },
  { nhan: "Case studies", duong_dan: "/case-studies" },
  { nhan: "Blog", duong_dan: "/blog" },
  { nhan: "Về chúng tôi", duong_dan: "/ve-chung-toi" },
  { nhan: "Liên hệ", duong_dan: "/lien-he" },
];

const FALLBACK_SOCIAL_LINKS: LienKet[] = [
  { nhan: "Facebook", duong_dan: "#" },
  { nhan: "Zalo", duong_dan: "#" },
  { nhan: "LinkedIn", duong_dan: "#" },
  { nhan: "YouTube", duong_dan: "#" },
];

const FALLBACK_POLICY_LINKS: LienKet[] = [
  { nhan: "Terms of Service", duong_dan: "#" },
  { nhan: "Privacy Policy", duong_dan: "/chinh-sach-bao-mat" },
  { nhan: "Cookies", duong_dan: "#" },
];

// ==================== Helper ====================

const CONTACT_ICON_MAP: Record<string, string> = {
  phone: PHONE_ICON,
  email: EMAIL_ICON,
  zalo: ZALO_CONTACT_ICON,
};

const SOCIAL_ICON_MAP: Record<string, string> = {
  Facebook: FACEBOOK_ICON,
  Zalo: ZALO_SOCIAL_ICON,
  LinkedIn: LINKEDIN_ICON,
  YouTube: YOUTUBE_ICON,
};

function getContactIcon(loai: string): string {
  return CONTACT_ICON_MAP[loai] || PHONE_ICON;
}

function getSocialIcon(link: LienKet): string {
  // If CMS provides an icon, use it; otherwise fallback to local icon by name
  return SOCIAL_ICON_MAP[link.nhan] || FACEBOOK_ICON;
}

// ==================== Component ====================

export default async function Footer() {
  const data = await getChanTrang();

  // Resolve data with fallbacks
  const strapiLogoUrl = getStrapiMediaUrl(data?.logo);
  const logoUrl = strapiLogoUrl || LOGO_IMAGE;
  const contacts = data?.lien_lac?.length ? data.lien_lac : FALLBACK_CONTACTS;
  const navLinks = data?.dieu_huong?.length ? data.dieu_huong : FALLBACK_NAV_LINKS;
  const socialLinks = data?.mang_xa_hoi?.length ? data.mang_xa_hoi : FALLBACK_SOCIAL_LINKS;
  const appStoreUrl = data?.app_store_url || "#";
  const googlePlayUrl = data?.google_play_url || "#";
  const banQuyen = data?.ban_quyen || "© 2025, Copyright owned by Timeso";
  const hotline = data?.hotline || "0123456789";
  const policyLinks = data?.lien_ket_chinh_sach?.length ? data.lien_ket_chinh_sach : FALLBACK_POLICY_LINKS;

  return (
    <footer className="bg-[#12141D]">
      {/* Main Content */}
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-[80px] md:py-[48px]">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoUrl}
              alt="Timeso"
              width={111}
              height={49}
              className="h-[40px] w-auto"
              unoptimized={!!strapiLogoUrl}
            />
          </Link>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Image
                  src={getContactIcon(contact.loai)}
                  alt={contact.nhan}
                  width={19}
                  height={19}
                  className="mt-0.5 h-[18px] w-[18px]"
                />
                <div>
                  <div className="text-sm text-[#01CFCF]">{contact.nhan}</div>
                  <div className="text-base font-medium text-white">{contact.gia_tri}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation + Social Row */}
          <div className="flex justify-between">
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.duong_dan}
                  className="text-base text-white transition-colors hover:text-[#01CFCF]"
                >
                  {link.nhan}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-base text-white">Follow us</span>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, idx) => {
                  const iconUrl = link.icon ? getStrapiMediaUrl(link.icon) : null;
                  return (
                    <Link key={idx} href={link.duong_dan} className="transition-opacity hover:opacity-80">
                      <Image
                        src={iconUrl || getSocialIcon(link)}
                        alt={link.nhan}
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* App Downloads */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-[#01CFCF] uppercase">
              TẢI ỨNG DỤNG MIỄN PHÍ
            </span>
            <div className="flex gap-3">
              <Link href={appStoreUrl} className="transition-opacity hover:opacity-80">
                <Image
                  src={APP_STORE_BADGE}
                  alt="Download on App Store"
                  width={132}
                  height={44}
                  className="h-[44px] w-auto"
                />
              </Link>
              <Link href={googlePlayUrl} className="transition-opacity hover:opacity-80">
                <Image
                  src={GOOGLE_PLAY_BADGE}
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  className="-my-2 h-[60px] w-auto"
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
                src={logoUrl}
                alt="Timeso"
                width={200}
                height={49}
                className="h-[64px] w-[111px]"
                unoptimized={!!strapiLogoUrl}
              />
            </Link>

            {/* Contact Info */}
            <div className="flex flex-col gap-[16px]">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-center gap-[16px]">
                  <Image
                    src={getContactIcon(contact.loai)}
                    alt={contact.nhan}
                    width={19}
                    height={19}
                    className="h-[19px] w-[19px]"
                  />
                  <div>
                    <div className="text-[14px] text-[#01CFCF]">{contact.nhan}</div>
                    <div className="text-[16px] font-medium text-white">{contact.gia_tri}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-[24px]">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.duong_dan}
                className="text-[16px] text-white transition-colors hover:text-[#01CFCF]"
              >
                {link.nhan}
              </Link>
            ))}
          </div>

          {/* Column 3: App Downloads */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] font-medium text-[#01CFCF] uppercase">
              TẢI ỨNG DỤNG MIỄN PHÍ!
            </h3>
            <div className="flex gap-[12px]">
              <Link href={appStoreUrl} className="transition-opacity hover:opacity-80">
                <Image
                  src={APP_STORE_BADGE}
                  alt="Download on App Store"
                  width={132}
                  height={44}
                  className="h-[44px]"
                />
              </Link>
              <Link href={googlePlayUrl} className="transition-opacity hover:opacity-80">
                <Image
                  src={GOOGLE_PLAY_BADGE}
                  alt="Get it on Google Play"
                  width={165}
                  height={64}
                  className="-my-2 h-[64px]"
                />
              </Link>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] text-white">Follow us</h3>
            <div className="flex gap-[16px]">
              {socialLinks.map((link, idx) => {
                const iconUrl = link.icon ? getStrapiMediaUrl(link.icon) : null;
                return (
                  <Link key={idx} href={link.duong_dan} className="transition-opacity hover:opacity-80">
                    <Image
                      src={iconUrl || getSocialIcon(link)}
                      alt={link.nhan}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1D2939]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-6 text-center md:flex-row md:items-center md:justify-between md:px-[80px] md:py-[24px] md:text-left">
          <div className="text-sm text-[#667085]">
            {banQuyen}
            <br className="md:hidden" />
            <span className="hidden md:inline"> – </span>
            Support Hotline: {hotline}
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#667085] md:gap-[24px]">
            {policyLinks.map((link, idx) => (
              <Link key={idx} href={link.duong_dan} className="transition-colors hover:text-white">
                {link.nhan}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

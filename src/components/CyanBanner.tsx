"use client";

import Image from "next/image";
import { UserCheck, Sparkles, Wand2, BarChart3 } from "lucide-react";

// Image Assets
const ILLUSTRATION = "/images/banner/Layer 1.png";

export default function CyanBanner() {
  return (
    <section className="hidden bg-white py-10 md:block">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative h-[182px] w-full overflow-hidden rounded-[24px] bg-linear-to-r from-[#00ada3] via-[#00ada3] to-[#defffc] shadow-sm">
          {/* Background Decorative Ellipses (Simulated) */}
          <div
            className="pointer-events-none absolute top-0 left-0 h-[328px] w-[322px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(222,255,252,1) 0%, rgba(222,255,252,0) 70%)",
              transform: "translate(-50%, -20%)",
            }}
          />
          <div
            className="pointer-events-none absolute top-[-159px] left-[660px] h-[328px] w-[322px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(222,255,252,1) 0%, rgba(222,255,252,0) 70%)",
            }}
          />

          {/* Left Content */}
          <div className="absolute top-[29.7px] left-[30.54px] z-10 flex flex-col gap-[8px]">
            <h2 className="text-[24px] leading-normal font-bold tracking-tight text-white">
              Tăng tốc quản lý với sức mạnh AI
            </h2>
            <p className="font-['Ubuntu_Sans',sans-serif] text-[14px] font-medium text-white/90">
              Quản lý nhanh hơn – thông minh hơn với AI
            </p>
          </div>

          {/* Badges Container */}
          <div className="absolute top-[113.88px] left-[30.54px] z-10 flex items-center gap-[12px]">
            <Badge
              icon={<UserCheck className="h-4 w-4 text-[#62748E]" />}
              text="Chấm công chính xác"
            />
            <Badge
              icon={<Sparkles className="h-4 w-4 text-[#62748E]" />}
              text="Tối ưu chi phí nhân sự"
            />
            <Badge
              icon={<Wand2 className="h-4 w-4 text-[#62748E]" />}
              text="Phân ca tự động bằng AI"
            />
            <Badge
              icon={<BarChart3 className="h-4 w-4 text-[#62748E]" />}
              text="Báo cáo hiệu suất tức thì"
            />
          </div>

          {/* Right side illustration */}
          <div className="absolute top-1/2 right-[60px] z-10 -translate-y-1/2">
            <Image
              src={ILLUSTRATION}
              alt="AI Management Illustration"
              width={283}
              height={117}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-[8px] rounded-full border border-[#E6E8EB] bg-white px-[12px] py-[8px] shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.06),0px_4px_8px_-2px_rgba(16,24,40,0.1)] transition hover:bg-white/95">
      <div className="flex h-[20px] w-[20px] items-center justify-center">{icon}</div>
      <span className="text-[12px] font-medium whitespace-nowrap text-[#1D293D]">{text}</span>
    </div>
  );
}

import { Zap, Users, Headphones, Lock, Store } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading and supporting text */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-20">
          <h2 className="mb-3 text-2xl leading-tight font-bold tracking-tight text-[#101828] md:mb-4 md:text-[48px] md:leading-[1.1] md:tracking-[-0.96px]">
            Why Choose Timeso?
          </h2>
          <p className="text-sm leading-relaxed text-[#475467] md:text-[16px] md:leading-[24px]">
            Nền tảng HR hiện đại với tốc độ triển khai nhanh, dễ sử dụng và đảm bảo bảo mật
            <br className="hidden md:block" />
            chuẩn doanh nghiệp.
          </p>
        </div>

        {/* Cross Grid Layout */}
        <div className="relative">
          {/* Crossing Lines */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-px bg-linear-to-b from-[#00BAC7]/0 via-[#00BAC7]/40 to-[#00BAC7]/0 md:block"></div>
          <div className="absolute top-1/2 right-0 left-0 hidden h-px bg-linear-to-r from-[#00BAC7]/0 via-[#00BAC7]/40 to-[#00BAC7]/0 md:block"></div>

          {/* Center Badge */}
          <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="relative flex h-[100px] w-[100px] items-center justify-center">
              {/* External Ring */}
              <div className="absolute inset-0 rounded-full border border-[#00BAC7]/20"></div>
              {/* Glowing Background */}
              <div className="absolute inset-2 rounded-full bg-linear-to-br from-[#E6FAFA] to-[#00BAC7]/10 shadow-[0_0_40px_rgba(0,186,199,0.2)]"></div>
              {/* Central Circle */}
              <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#00BAC7] text-white shadow-lg">
                <Store className="h-6 w-6" />
              </div>
              {/* Decorative dots on external ring axis */}
              <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[#00BAC7]"></div>
              <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-[#00BAC7]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0">
            {/* Top Left - Triển khai nhanh */}
            <div
              className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-16"
              style={{
                background:
                  "linear-gradient(125.486deg, rgba(255, 255, 255, 0.1) 0%, rgba(117, 255, 255, 0.1) 100%)",
              }}
            >
              <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#00E5FF] shadow-lg shadow-[#00E5FF]/20 md:mb-8 md:h-[64px] md:w-[64px]">
                <Zap className="h-6 w-6 fill-white stroke-0 md:h-7 md:w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#101828] md:mb-4 md:text-[28px] md:tracking-[-0.56px]">
                Triển khai nhanh
              </h3>
              <p className="max-w-[280px] text-base leading-relaxed text-[#62748E] md:text-[20px] md:leading-[28px]">
                Tải về và dùng ngay!
              </p>
            </div>

            {/* Top Right - Đơn giản cho mọi đối tượng */}
            <div className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-16">
              <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#6366F1] shadow-lg shadow-[#6366F1]/20 md:mb-8 md:h-[64px] md:w-[64px]">
                <Users className="h-6 w-6 text-white md:h-7 md:w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#101828] md:mb-4 md:text-[28px] md:tracking-[-0.56px]">
                Đơn giản cho mọi đối tượng
              </h3>
              <p className="max-w-[320px] text-base leading-relaxed text-[#62748E] md:text-[20px] md:leading-[28px]">
                Giao diện hiện đại trực quan, thân thiện cho cả HR lẫn nhân viên.
              </p>
            </div>

            {/* Bottom Left - Luôn đồng hành cùng bạn */}
            <div className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-16">
              <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#B24A4A] shadow-lg shadow-[#B24A4A]/20 md:mb-8 md:h-[64px] md:w-[64px]">
                <div className="relative">
                  <Headphones className="h-6 w-6 text-white md:h-7 md:w-7" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-bold text-[#B24A4A]">
                    24
                  </span>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#101828] md:mb-4 md:text-[28px] md:tracking-[-0.56px]">
                Luôn đồng hành cùng bạn
              </h3>
              <p className="max-w-[320px] text-base leading-relaxed text-[#62748E] md:text-[20px] md:leading-[28px]">
                Hỗ trợ 24/7 và onboarding miễn phí cho toàn bộ đội ngũ.
              </p>
            </div>

            {/* Bottom Right - Bảo mật */}
            <div
              className="flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-16"
              style={{
                background:
                  "linear-gradient(125.486deg, rgba(255, 255, 255, 0.1) 0%, rgba(117, 255, 255, 0.1) 100%)",
              }}
            >
              <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#D97706] shadow-lg shadow-[#D97706]/20 md:mb-8 md:h-[64px] md:w-[64px]">
                <Lock className="h-6 w-6 text-white md:h-7 md:w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#101828] md:mb-4 md:text-[28px] md:tracking-[-0.56px]">
                Bảo mật tiêu chuẩn doanh nghiệp
              </h3>
              <p className="max-w-[320px] text-base leading-relaxed text-[#62748E] md:text-[20px] md:leading-[28px]">
                Tuân thủ ISO, mã hóa AES-256 và nhiều lớp bảo vệ dữ liệu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

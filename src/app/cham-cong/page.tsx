import Image from "next/image";
import Link from "next/link";

// Assets from Figma - Hero Section
const heroImage = "/figma_assets/e8c319bd8f21d8adccc55871dd5f19444f498af7.png";

// Assets from Figma - Features Section
const featureCard1Image = "/figma_assets/921e6cc61bedd673112e65a4e2276974bbfea3aa.png";
const featureCard2Image = "/figma_assets/96e33c5f95eab3e4b2fb914ad8d4898e0f0e3297.png";

export default async function AttendancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[160px] md:pb-24">
        {/* Background gradient - light cyan arc */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-full w-[70%] rounded-bl-[50%] bg-linear-to-bl from-[#01CFCF]/20 via-[#55DFDF]/10 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-[28px] leading-tight font-semibold text-[#101828] md:text-4xl lg:text-[48px] lg:leading-[1.2]">
                <span className="">Chấm Công</span>
                <br />
                <span className="">& AI Theo Dõi Hiệu Suất</span>
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-lg lg:mx-0">
                Hệ thống Timeso theo dõi giờ làm, công suất và hiệu suất liên tục của từng nhân viên
                theo thời gian thực, giúp bạn nhanh chóng nắm bắt biến động, tối ưu quy trình và
                giảm thiểu sai sót trong quản lý.
              </p>

              {/* App Store Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:justify-start">
                <Link
                  href="#"
                  className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={132}
                    height={44}
                    className="h-[40px] w-auto md:h-[44px]"
                  />
                </Link>
                <Link
                  href="#"
                  className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={165}
                    height={64}
                    className="-my-2 h-[56px] w-auto md:h-[64px]"
                  />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative mx-auto h-[400px] w-full max-w-[600px] lg:h-[569px]">
                <Image
                  src={heroImage}
                  alt="Timeso Attendance App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 2 Feature Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Feature Card 1 - Chấm công QR & GPS */}
            <div className="relative overflow-hidden rounded-[16px] bg-[#b7ffff] p-6 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] md:p-8">
              {/* Text Content */}
              <div className="mb-6">
                <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                  Chấm công tự động bằng QR & GPS
                </h3>
                <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                    <span>
                      Ghi nhận giờ làm chính xác tại đúng vị trí, hạn chế gian lận và tránh chấm
                      công hộ.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                    <span>
                      Dữ liệu được đồng bộ theo thời gian thực, giúp quản lý nắm bắt tình trạng nhân
                      sự mọi lúc.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] md:h-[350px]">
                <Image
                  src={featureCard1Image}
                  alt="QR GPS Attendance"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Feature Card 2 - Theo dõi hiệu suất */}
            <div className="relative overflow-hidden rounded-[16px] bg-[#f5f5f5] p-6 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] md:p-8">
              {/* Text Content */}
              <div className="mb-6">
                <h3 className="mb-4 text-[20px] font-bold text-[#101828] md:text-[24px]">
                  Giảm sai sót – Tăng minh bạch – <br className="hidden md:inline" />
                  Theo dõi hiệu suất theo thời gian thực
                </h3>
                <ul className="space-y-2 text-[14px] leading-relaxed text-[#475467] md:text-[16px]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                    <span>
                      Tự động tổng hợp giờ làm, ca làm và hiệu suất của từng nhân viên trên một hệ
                      thống duy nhất.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                    <span>
                      Mọi thay đổi được cập nhật tức thì, đảm bảo quy trình vận hành nhanh chóng và
                      chính xác.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] md:h-[350px]">
                <Image
                  src={featureCard2Image}
                  alt="Performance Tracking"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Đa lĩnh vực */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-[80px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">
              <p className="mb-3 text-[14px] text-[#212121] md:text-[16px]">Phát triển ứng dụng</p>
              <h2 className="mb-8 text-[28px] font-bold tracking-[-0.02em] text-[#01CFCF] uppercase md:mb-10 md:text-[40px] lg:text-[56px]">
                ĐA LĨNH VỰC
              </h2>

              {/* Stats - vertical on mobile, horizontal on md+ */}
              <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
                {[
                  { value: "12", label: "Ngành nghề áp dụng từ bán lẻ, F&B đến sản xuất" },
                  { value: "30%", label: "Tăng hiệu suất vận hành HR trung bình" },
                  { value: "5.000+", label: "Nhân viên được quản lý và chấm công bằng AI" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center md:flex-1 lg:items-start lg:text-left"
                  >
                    <p className="mb-2 text-[32px] font-bold text-[#212121] md:text-[40px] lg:text-[48px]">
                      {stat.value}
                    </p>
                    <p className="text-[14px] leading-[20px] text-[#475467]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images - Circular scattered layout - Scaled for mobile */}
            <div className="relative mt-8 h-[400px] w-full lg:mt-0 lg:h-[650px] lg:w-[55%]">
              <div className="absolute top-0 left-1/2 h-[650px] w-[580px] origin-top -translate-x-1/2 scale-[0.6] sm:scale-75 md:scale-90 lg:static lg:top-auto lg:left-auto lg:w-full lg:origin-top-left lg:translate-x-0 lg:scale-100">
                {/* === LEFT SIDE === */}

                {/* Left top - Cafe scene */}
                <div className="absolute top-[80px] left-0 h-[100px] w-[100px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/c29b80739a21e6e6f8454883c205bbe7ec0bece7.png"
                    alt="Cafe"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Cyan Dots - left middle (below cafe) */}
                <div className="absolute top-[200px] left-[15px] grid grid-cols-7 gap-[6px]">
                  {[...Array(56)].map((_, i) => (
                    <div key={i} className="h-[6px] w-[6px] rounded-full bg-[#00E2E2]" />
                  ))}
                </div>

                {/* Left bottom - Restaurant with drinks */}
                <div className="absolute top-[350px] left-0 h-[140px] w-[120px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/302e714f58fb2257078dca46e95644f6aba9f063.png"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* === TOP === */}

                {/* Top center - Scanner (above main) */}
                <div className="absolute top-0 left-[220px] h-[80px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/cba621839bc1ea790ec7c154187f1ea99c30bcaf.png"
                    alt="Scanner"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* === CENTER === */}

                {/* Main large center image */}
                <div className="absolute top-[100px] left-[140px] h-[350px] w-[280px] overflow-hidden rounded-[16px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/092303d6b5d08b91913494a824974d41576925b6.png"
                    alt="Business Owner"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* === RIGHT SIDE === */}

                {/* Right top - Skyscraper */}
                <div className="absolute top-[100px] right-0 h-[110px] w-[110px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/59aa5e0633c5fca8d22df2512de0f75309adbc61.png"
                    alt="Skyscraper"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right middle - Spa */}
                <div className="absolute top-[240px] right-0 h-[120px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/66056b79e40cf5f1996db88693618e15b5821922.png"
                    alt="Spa"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right bottom - Warehouse */}
                <div className="absolute top-[390px] right-0 h-[130px] w-[140px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/4209405a7a0ff7ca7d106c8406eb08ad095ed876.png"
                    alt="Warehouse"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* === BOTTOM === */}

                {/* Bottom center - Exhibition */}
                <div className="absolute top-[470px] left-[250px] h-[110px] w-[130px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/4c59d259432e0ebbba2d36665b07b30807b01fed.png"
                    alt="Exhibition"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom left - Office meeting */}
                <div className="absolute top-[580px] left-[140px] h-[100px] w-[100px] overflow-hidden rounded-[12px] shadow-[0px_22px_64px_0px_rgba(22,28,45,0.19)]">
                  <Image
                    src="/images/recruitment/ee7c6dcf45a3ab37da88ff4c8e46e7253921d18c.png"
                    alt="Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Timeso Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/figma_assets/bd51c0107e692e159ec599e45ef839f872296d2b.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
          {/* Outer Container with semi-transparent background */}
          <div className="rounded-[40px] bg-gray-500/10 p-8 backdrop-blur-sm md:p-10">
            {/* Title */}
            <h2 className="mb-8 text-center text-[24px] font-semibold capitalize md:mb-10 md:text-[32px] lg:text-[40px]">
              <span className="text-white">Lý do nên chọn </span>
              <span
                className="bg-clip-text"
                style={{
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(174deg, rgb(0, 226, 226) 5%, rgb(0, 150, 158) 94%)",
                }}
              >
                Timeso
              </span>
              <span className="text-white">?</span>
            </h2>

            {/* Cards Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                "Giải Pháp Quản Lý Nhân Sự Toàn Diện",
                "Tự Động Hóa Quy Trình Tuyển Dụng",
                "Quản Lý Ca Làm Thông Minh",
                "Tính Lương Chính Xác & Minh Bạch",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex h-[80px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6"
                >
                  <p className="text-center text-[12px] leading-tight font-bold text-white md:text-[16px] lg:text-[20px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center overflow-hidden rounded-[16px] bg-[#E6FEFF] p-6 md:flex-row md:rounded-[24px] md:p-0">
            {/* Left Content */}
            <div className="flex-1 text-center md:p-16 md:text-left">
              <h2 className="mb-3 text-[18px] font-semibold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[28px] lg:text-[36px]">
                TẢI MIỄN PHÍ NGAY
              </h2>
              <p className="mb-5 text-[12px] text-[#475467] md:mb-6 md:text-[16px] lg:text-[20px]">
                Mọi lúc mọi nơi – chấm công dễ dàng.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start md:gap-6">
                <Link
                  href="#"
                  className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={132}
                    height={44}
                    className="h-[36px] w-auto md:h-[44px]"
                  />
                </Link>
                <Link
                  href="#"
                  className="transform transition-opacity duration-200 hover:scale-105 hover:opacity-80"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={165}
                    height={64}
                    className="-my-2 h-[52px] w-auto md:h-[64px]"
                  />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-6 h-[180px] w-full md:mt-0 md:h-[342px] md:w-[400px]">
              <Image
                src="/images/recruitment/0fde196edc3946aa5fa9569f9c8de980a700b345.png"
                alt="Timeso App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

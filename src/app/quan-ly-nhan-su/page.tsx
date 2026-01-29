import Image from "next/image";
import Link from "next/link";

// Assets from Figma
const heroImage = "/figma_assets/e5cdb3bf6163b94e35b1793feba180e15ba1ccd0.png";

export default async function HRManagementPage() {
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
                <span className="">Quản lý nhân sự</span>
                <br />
                <span className="">thông minh với</span>{" "}
                <span className="text-[#01CFCF]">AI Timeso</span>
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-lg lg:mx-0">
                Timeso ứng dụng AI để tự động xử lý quy trình nhân sự, từ ca làm, theo dõi hiệu suất
                đến tính lương. Mọi thao tác đều được tính giản để cửa hàng vận hành mượt mà và hiện
                đại.
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
                  alt="Timeso HR Management App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Tối Ưu Quản Lý Nhân Sự */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/figma_assets/a1193e240fa10f272aec1f31a1dea2954ac0116d.png"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(139deg, rgba(67, 67, 67, 0.8) 32%, rgba(2, 255, 255, 0.8) 105%)",
            }}
          />
        </div>

        {/* Decorative element - right side */}
        <div className="absolute -top-12 right-[-200px] hidden h-[1200px] w-[1000px] opacity-20 lg:block">
          <Image
            src="/figma_assets/d9604ce46f024691e775e6c26b729e9ac388812c.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-20">
            {/* Left Content */}
            <div className="flex flex-col gap-8 lg:w-[55%]">
              {/* Title */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[28px] leading-tight font-bold text-white md:text-[40px] md:leading-[1.2]">
                  Tối Ưu Quản Lý Nhân Sự Với Timeso
                </h2>
                <p className="text-[14px] text-[#8AE9E9] md:text-[16px]">
                  Tiết kiệm thời gian – tăng hiệu quả – vận hành minh bạch hơn
                </p>
              </div>

              {/* Dashboard Images */}
              <div className="relative h-[280px] md:h-[400px]">
                {/* Laptop/Dashboard */}
                <div className="absolute bottom-0 left-0 z-10 w-[85%] md:w-[75%]">
                  <Image
                    src="/figma_assets/0fd8f800d0f2f7eb1866b9bd476c71682ec6b10a.png"
                    alt="Timeso Dashboard"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                  />
                </div>

                {/* Floating Chart Card - top right */}
                <div className="absolute top-0 right-0 z-20 w-[45%] md:w-[40%]">
                  <Image
                    src="/figma_assets/4497a927567742ae9f6df344dfc6b3f449cf1918.png"
                    alt="Active Subscriptions"
                    width={280}
                    height={180}
                    className="h-auto w-full rounded-lg shadow-xl"
                  />
                </div>

                {/* Floating Stats Card - bottom right */}
                <div className="absolute right-[5%] bottom-[10%] z-20 w-[30%] md:w-[25%]">
                  <Image
                    src="/figma_assets/afafc21c7d09a8230013ff69442b760b2856ff36.png"
                    alt="Total Sales"
                    width={160}
                    height={80}
                    className="h-auto w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right - Feature Cards */}
            <div className="flex flex-col gap-5 lg:w-[45%]">
              {/* Feature Card 1 */}
              <div className="rounded-[16px] border border-[#00e2e2] bg-[#003e42] px-7 py-8">
                <h3 className="mb-4 text-[18px] font-bold text-slate-50 md:text-[20px]">
                  Tính lương tự động và chính xác
                </h3>
                <p className="text-[14px] leading-[1.7] text-slate-200 md:text-[16px]">
                  Tự động tính lương từ dữ liệu chấm công thực tế, AI phát hiện gian lận và chấm
                  công bất thường, giảm sai sót và đảm bảo công bằng.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-[16px] border border-[#00e2e2] bg-[#003e42] px-7 py-8">
                <h3 className="mb-4 text-[18px] font-bold text-slate-50 md:text-[20px]">
                  Theo Dõi & Dự Báo Nhân Sự
                </h3>
                <p className="text-[14px] leading-[1.7] text-slate-200 md:text-[16px]">
                  Phân tích dữ liệu nhân sự, dự báo nhu cầu nhân viên theo từng thời điểm và cảnh
                  báo bất thường để nhà quản lý chủ động xử lý.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="rounded-[16px] border border-[#00e2e2] bg-[#003e42] px-7 py-8">
                <h3 className="mb-4 text-[18px] font-bold text-slate-50 md:text-[20px]">
                  AI Quản Lý Nhân Sự
                </h3>
                <p className="text-[14px] leading-[1.7] text-slate-200 md:text-[16px]">
                  Theo dõi hiệu suất, giờ làm và báo cáo ngay trên một nền tảng, giúp cửa hàng tối
                  ưu quy trình và nâng cao năng suất.
                </p>
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
      <section className="bg-[#f3f4f3] py-12 md:pt-[80px] md:pb-12">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            {/* Left - Image */}
            <div className="relative mx-auto h-[250px] w-full max-w-[350px] shrink-0 md:mx-0 md:h-[464px] md:w-[480px] md:max-w-none">
              <Image
                src="/figma_assets/aa8c071d3f9776b24f6f1b013ae03273897075e1.png"
                alt="Business professionals"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right - Content */}
            <div className="flex flex-1 flex-col gap-6 p-4 md:gap-10 md:p-10">
              {/* Title */}
              <h2 className="text-center text-[22px] font-semibold tracking-[-0.02em] capitalize md:text-left md:text-[28px] lg:text-[40px]">
                <span className="text-[#101828]">Lý do nên chọn </span>
                <span
                  className="bg-clip-text"
                  style={{
                    WebkitTextFillColor: "transparent",
                    backgroundImage:
                      "linear-gradient(174deg, rgb(0, 226, 226) 5%, rgb(0, 150, 158) 94%)",
                  }}
                >
                  timeso
                </span>
                <span className="text-[#101828]">?</span>
              </h2>

              {/* Cards Grid - 2x2 on all screens */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="flex h-[90px] items-center justify-center rounded-[12px] bg-white p-3 shadow-[0px_2px_4px_0px_rgba(16,24,40,0.1)] md:h-[120px] md:p-4">
                  <p className="text-center text-[12px] leading-tight font-bold text-black md:text-[16px] lg:text-[20px]">
                    Giải pháp quản lý toàn diện, tiết kiệm thời gian
                  </p>
                </div>

                <div className="flex h-[90px] items-center justify-center rounded-[12px] bg-white p-3 shadow-[0px_2px_4px_0px_rgba(16,24,40,0.1)] md:h-[120px] md:p-4">
                  <p className="text-center text-[12px] leading-tight font-bold text-black md:text-[16px] lg:text-[20px]">
                    Tính năng vượt trội, giúp tối ưu hóa mọi quy trình
                  </p>
                </div>

                <div className="flex h-[90px] items-center justify-center rounded-[12px] bg-white p-3 shadow-[0px_2px_4px_0px_rgba(16,24,40,0.1)] md:h-[120px] md:p-4">
                  <p className="text-center text-[12px] leading-tight font-bold text-black md:text-[16px] lg:text-[20px]">
                    AI đề xuất & quản lý nhân viên thông minh
                  </p>
                </div>

                <div className="flex h-[90px] items-center justify-center rounded-[12px] bg-white p-3 shadow-[0px_2px_4px_0px_rgba(16,24,40,0.1)] md:h-[120px] md:p-4">
                  <p className="text-center text-[12px] leading-tight font-bold text-black md:text-[16px] lg:text-[20px]">
                    Đảm bảo sự phát triển bền vững
                  </p>
                </div>
              </div>
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
              <h2 className="mb-3 text-[20px] font-semibold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[28px] lg:text-[36px]">
                TẢI MIỄN PHÍ NGAY
              </h2>
              <p className="mb-5 text-[14px] text-[#475467] md:mb-6 md:text-[16px] lg:text-[20px]">
                Trải nghiệm giải pháp quản lý nhân sự 4.0 từ Timeso
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
            <div className="relative mt-6 h-[200px] w-full md:mt-0 md:h-[342px] md:w-[400px]">
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

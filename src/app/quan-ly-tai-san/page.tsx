import Image from "next/image";
import Link from "next/link";

// Assets from Figma - node 325:5961
const heroImage = "/figma_assets/9c2595df78e94d7405bb4b531ceb329dbb04e509.png"; // Rectangle 18029
const quyTrinhImage = "/figma_assets/85b42fc8e141b80565f28cff8ba1d70ac8e47064.png";
const whyChooseImage = "/figma_assets/68937d368169e6dd5d1307e63a2509097b9d3014.png";

export default async function AssetManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - matching Figma node 325:5962 */}
      <section className="relative overflow-hidden pt-[120px] pb-16 md:pt-[140px] md:pb-24">
        {/* Background gradient - light cyan arc */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-full w-[70%] rounded-bl-[50%] bg-linear-to-bl from-[#01CFCF]/20 via-[#55DFDF]/10 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-[28px] leading-tight font-semibold text-[#101828] md:text-4xl lg:text-[48px] lg:leading-[1.2]">
                Quản Lý Tài Sản
                <br />
                Thông Minh & Chính Xác
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-[16px] lg:mx-0">
                Timeso giúp bạn theo dõi tài sản, thiết bị và kho hàng một cách rõ ràng và chính
                xác. Mọi thay đổi đều được cập nhật theo thời gian thực, giúp giảm thất thoát và tối
                ưu chi phí vận hành.
              </p>

              {/* App Store Badges - Same as Hero.tsx */}
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

            {/* Right - Hero Image (Rectangle 18029 - includes badges) */}
            <div className="relative">
              <div className="relative mx-auto h-[350px] w-full max-w-[700px] md:h-[450px] lg:h-[559px]">
                <Image
                  src={heroImage}
                  alt="Timeso Asset Management App"
                  fill
                  className="rounded-3xl object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Horizontal Scroll matching Figma node 346:8736 */}
      <section className="bg-[#00D3D3] px-4 py-6 md:px-20 md:py-10">
        <div className="container mx-auto overflow-x-auto">
          <div className="flex min-w-max items-center justify-start gap-6 md:min-w-0 md:justify-between md:gap-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12141D]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
              </div>
              <span className="text-[16px] leading-[30px] font-medium text-[#18181B] md:text-[18px]">
                Quản lý tài sản chi tiết
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12141D]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <span className="text-[16px] leading-[30px] font-medium text-[#18181B] md:text-[18px]">
                Kiểm soát tình trạng tài sản
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12141D]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <span className="text-[16px] leading-[30px] font-medium text-[#18181B] md:text-[18px]">
                Tối ưu hóa quy trình kho
              </span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#12141D]">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <span className="text-[16px] leading-[30px] font-medium text-[#18181B] md:text-[18px]">
                Kiểm soát chất lượng sản phẩm trong kho
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quy Trình Quản Lý Kho & Tài Sản Section - matching Figma node 325:6003 */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header - Centered */}
          <div className="mb-8 text-center md:mb-16">
            <h2 className="mb-3 text-[20px] font-bold tracking-tight text-[#101828] capitalize md:mb-4 md:text-[40px] md:leading-[44px]">
              Quy Trình Quản Lý Kho & Tài Sản
            </h2>
            <p className="mx-auto max-w-[768px] text-[12px] leading-[20px] text-[#475467] md:text-[16px] md:leading-[26px]">
              Tự động hóa toàn bộ quy trình từ nhập – gán – theo dõi – kiểm kê,
              <br className="hidden md:block" />
              đảm bảo dữ liệu chính xác và minh bạch.
            </p>
          </div>

          {/* Content Grid - Two Columns (Image first on mobile) */}
          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Left Column - Features Grid 2x2 */}
            <div className="grid w-full max-w-[560px] grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:flex-1 lg:gap-x-8 lg:gap-y-8">
              {/* Feature 1 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#01CFCF] md:text-[20px]">
                  Nhập và Gán Tài Sản
                </h3>
                <p className="mb-4 text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Gán tài sản cho nhân viên và theo dõi đầy đủ tình trạng, lịch sử sử dụng của từng
                  vật phẩm như đồng phục, thiết bị, dụng cụ.
                </p>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01CFCF] text-white transition-colors hover:bg-[#00BAC7]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Feature 2 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                  Theo Dõi Số Lượng và Tình Trạng
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Quản lý kho tự động, cập nhật tồn kho theo thời gian thực và trạng thái sản phẩm
                  (hỏng, mất, đổi mới) để nhân viên dễ dàng kiểm tra và cập nhật.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                  Quản Lý Quy Trình Kho
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Kiểm soát quy trình xuất–nhập kho, tối ưu không gian lưu trữ và giảm thiểu sai sót
                  trong kiểm kê.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                  Báo Cáo và Phân Tích
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Báo cáo tài sản & kho chi tiết, hỗ trợ doanh nghiệp nắm bắt biến động và ra quyết
                  định nhanh – chính xác.
                </p>
              </div>
            </div>

            {/* Right Column - Dashboard Image (appears first on mobile due to flex-col-reverse) */}
            <div className="relative w-full max-w-[560px] lg:order-2 lg:flex-1">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl md:aspect-auto md:h-[480px]">
                <Image
                  src={quyTrinhImage}
                  alt="Dashboard quản lý kho và tài sản"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lý Do Nên Chọn Timeso Section - matching Figma node 325:6032 */}
      <section className="relative overflow-hidden py-10 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={whyChooseImage} alt="" fill className="object-cover" />
          {/* Gradient Overlay - dark from right */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(260deg, rgba(0,0,0,0.7) 1%, rgba(255,255,255,0) 97%)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-end md:flex-row md:items-center">
            {/* Right-aligned content */}
            <div className="w-full max-w-[776px] py-6 md:py-10">
              {/* Title */}
              <h2 className="mb-6 text-center text-[22px] font-bold tracking-tight capitalize md:mb-10 md:text-[40px] md:leading-[58px]">
                <span className="text-white">Lý Do Nên Chọn </span>
                <span
                  className="bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(174deg, #00E2E2 6%, #00969E 94%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Timeso
                </span>
                <span className="text-white">?</span>
              </h2>

              {/* Reason Cards - 2x2 Grid matching Figma 346:9008 */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Reason 1 */}
                <div className="flex h-[120px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-normal">
                    Giải pháp
                    <br />
                    quản lý toàn diện, tiết kiệm thời gian
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="flex h-[120px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-normal">
                    Tính năng
                    <br />
                    vượt trội, giúp tối ưu hóa mọi quy trình
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="flex h-[120px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-normal">
                    Tối ưu hóa
                    <br />
                    hiệu suất nhân viên
                  </p>
                </div>

                {/* Reason 4 */}
                <div className="flex h-[120px] items-center justify-center rounded-[16px] bg-gray-500/40 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-normal">
                    Đảm bảo sự
                    <br />
                    phát triển bền vững
                  </p>
                </div>
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

      {/* CTA Section - matching cham-cong pattern */}
      <section className="bg-white px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center overflow-hidden rounded-[16px] bg-[#E6FEFF] p-6 md:flex-row md:rounded-[24px] md:p-0">
            {/* Left Content */}
            <div className="flex-1 text-center md:p-16 md:text-left">
              <h2 className="mb-3 text-[18px] font-semibold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[28px] lg:text-[36px]">
                TẢI MIỄN PHÍ NGAY
              </h2>
              <p className="mb-5 text-[12px] text-[#475467] md:mb-6 md:text-[16px] lg:text-[20px]">
                Quản lý tài sản & kho thông minh – mọi lúc mọi nơi.
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

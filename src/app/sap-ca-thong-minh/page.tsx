import Image from "next/image";
import Link from "next/link";

// Assets from Figma - node 325:6064
const heroImage = "/figma_assets/3d4deb506f9fd18b409cb0aafaf717ea62928e41.png"; // Phone with calendar (Image 2556)
const quyTrinhImage = "/figma_assets/b815100b65d1f0c80f92a83097c9e4a7454621c3.png";

export default async function SmartSchedulingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - matching Figma node 325:6065 */}
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
                Tự động hóa phân ca —
                <br />
                Vận hành mượt hơn mỗi ngày
              </h1>
              <p className="mx-auto mb-6 max-w-lg text-[14px] leading-relaxed text-[#475467] md:text-[16px] lg:mx-0">
                AI tối ưu lịch làm việc theo nhu cầu thực tế: giảm thiếu người, hạn chế trùng ca và
                tiết kiệm đến 60% thời gian sắp ca thủ công.
              </p>

              {/* Feature bullets with arrow icons */}
              <ul className="mx-auto mb-8 max-w-lg space-y-3 text-left text-[14px] text-[#101828] md:text-[16px] lg:mx-0">
                <li className="flex items-center gap-3">
                  <span className="text-lg text-[#01CFCF]">&gt;</span>
                  <span className="font-medium">Tối ưu theo kỹ năng</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg text-[#01CFCF]">&gt;</span>
                  <span className="font-medium">Giảm xung đột & OT</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-lg text-[#01CFCF]">&gt;</span>
                  <span className="font-medium">Đồng bộ chấm công–lương</span>
                </li>
              </ul>

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

            {/* Right - Hero Image (phones with calendar app) */}
            <div className="relative">
              <div className="relative mx-auto h-[350px] w-full max-w-[700px] md:h-[450px] lg:h-[569px]">
                <Image
                  src={heroImage}
                  alt="Timeso Smart Scheduling App"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - matching Figma node 325:6092 */}
      <section className="bg-[#005757] pt-8 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-hidden bg-white shadow-xl">
            <div className="flex flex-col md:flex-row">
              {/* Left - Image */}
              <div className="relative h-[200px] w-full shrink-0 md:h-[464px] md:w-[480px]">
                <Image
                  src="/figma_assets/056252f0d48e9864cce3ff92bdd1ed61a7a2f54e.png"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div className="flex flex-1 flex-col items-end justify-center p-4 md:p-10">
                <div className="w-full space-y-4 md:space-y-6">
                  {/* Title */}
                  <h2 className="text-[18px] leading-tight font-semibold text-black md:text-[36px]">
                    Sắp ca thủ công tốn thời gian và dễ sai sót
                  </h2>

                  {/* Grid Cards - 1 col mobile, 2 col desktop */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                    {/* Card 1 */}
                    <div className="flex h-[70px] items-center justify-center rounded-[12px] bg-[#f1f5f9] p-3 md:h-[120px] md:p-4">
                      <p className="text-center text-[14px] leading-tight font-bold text-[#005757] md:text-[20px]">
                        Giải pháp quản lý toàn diện, tiết kiệm thời gian
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex h-[70px] items-center justify-center rounded-[12px] bg-[#f1f5f9] p-3 md:h-[120px] md:p-4">
                      <p className="text-center text-[14px] leading-tight font-bold text-[#005757] md:text-[20px]">
                        Tính năng vượt trội, giúp tối ưu hóa mọi quy trình
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex h-[70px] items-center justify-center rounded-[12px] bg-[#f1f5f9] p-3 md:h-[120px] md:p-4">
                      <p className="text-center text-[14px] leading-tight font-bold text-[#005757] md:text-[20px]">
                        AI đề xuất & quản lý nhân viên thông minh
                      </p>
                    </div>

                    {/* Card 4 */}
                    <div className="flex h-[70px] items-center justify-center rounded-[12px] bg-[#f1f5f9] p-3 md:h-[120px] md:p-4">
                      <p className="text-center text-[14px] leading-tight font-bold text-[#005757] md:text-[20px]">
                        Đảm bảo sự phát triển bền vững
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quy Trình Section - matching Figma node 325:6110 */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header - Centered */}
          <div className="mb-8 text-center md:mb-16">
            <h2 className="mb-3 text-[20px] font-bold tracking-tight text-[#101828] capitalize md:mb-4 md:text-[40px] md:leading-[44px]">
              Quản Lý Ca Làm Thông Minh & Tự Động
            </h2>
            <p className="mx-auto max-w-[768px] text-[12px] leading-[20px] text-[#475467] md:text-[16px] md:leading-[26px]">
              Tự động hóa việc xếp lịch dựa trên dữ liệu và quy tắc doanh nghiệp, giảm thiểu sai sót
              và tiết kiệm thời gian quản lý.
            </p>
          </div>

          {/* Content Grid - Two Columns (Image first on mobile) */}
          <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Left Column - Features Grid 2x2 */}
            <div className="grid w-full max-w-[560px] grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:flex-1 lg:gap-x-8 lg:gap-y-8">
              {/* Feature 1 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#01CFCF] md:text-[20px]">
                  AI Tự Động Đề Xuất Ca Làm
                </h3>
                <p className="mb-4 text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Tính toán tối ưu phân ca nhân viên dựa trên công, lỹ năng, quy định lý độ lao động
                  mà không cần thao tác thủ công.
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
                  Cảnh Báo Thiếu Người & Xung Đột
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Phát hiện ca thiếu người, lớn ca xung đột thời gian giữa các ca – giúp tốn quản lý
                  sắp xếp lại nhanh chóng.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                  Nhân Viên Đề Xuất Đổi Ca
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Gợi ý đổi ca phù hợp, quản lý duyệt một chạm nhanh với notification và sắp nhật
                  lại.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <h3 className="mb-3 text-[18px] leading-[28px] font-semibold text-[#101828] md:text-[20px]">
                  Lịch Ca Trực Quan Theo Ngày/Tuần/Tháng
                </h3>
                <p className="text-[14px] leading-[24px] text-[#475467] md:text-[16px]">
                  Xem lịch làm việc dạng lịch, calendar bằng hình, dễ hiểu trực quan dám thấy số
                  liệu nhanh chóng.
                </p>
              </div>
            </div>

            {/* Right Column - Dashboard Image (appears first on mobile due to flex-col-reverse) */}
            <div className="relative w-full max-w-[560px] lg:order-2 lg:flex-1">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-2xl md:aspect-auto md:h-[480px]">
                <Image
                  src={quyTrinhImage}
                  alt="Dashboard quản lý ca làm"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lý Do Nên Chọn Timeso Section - matching Figma 325:6139 */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/figma_assets/928c2c2cdc67a507253902630c28d4919917d32c.png"
            alt=""
            fill
            className="object-cover"
          />
          {/* Gradient Overlay - dark from left to gray */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(260deg, rgb(0, 0, 0) 1%, rgba(121, 121, 121, 0.37) 97%)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* Centered content */}
            <div className="w-full max-w-[900px] py-6 md:py-10">
              {/* Title */}
              <h2 className="mb-2 text-center text-[22px] font-bold tracking-tight capitalize md:text-[40px] md:leading-[58px]">
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

              <p className="mb-8 text-center text-[14px] text-white/80 italic md:mb-10 md:text-[18px]">
                Kết Quả Rõ Ràng Ngay Từ Tuần Đầu Sử Dụng
              </p>

              {/* Reason Cards - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {/* Reason 1 */}
                <div className="flex h-[100px] items-center justify-center rounded-[12px] bg-black/30 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-[28px]">
                    Giảm 50–60% thời gian phân ca
                    <br />
                    lỗi trùng ca, thiếu ca
                  </p>
                </div>

                {/* Reason 2 */}
                <div className="flex h-[100px] items-center justify-center rounded-[12px] bg-black/30 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-[28px]">
                    Tối ưu chi phí nhân sự theo giờ cao điểm
                  </p>
                </div>

                {/* Reason 3 */}
                <div className="flex h-[100px] items-center justify-center rounded-[12px] bg-black/30 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-[28px]">
                    Tăng sự chủ động của nhân viên
                  </p>
                </div>

                {/* Reason 4 */}
                <div className="flex h-[100px] items-center justify-center rounded-[12px] bg-black/30 p-4 md:h-[120px] md:p-6">
                  <p className="text-center text-[14px] leading-tight font-bold text-white md:text-[20px] md:leading-[28px]">
                    Minh bạch dữ liệu – dễ dàng đối soát
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
                Quản lý ca làm thông minh – mọi lúc mọi nơi.
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

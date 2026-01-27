"use client";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-24" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div>
            <span className="mb-2 block text-sm font-bold tracking-wider text-[#00BAC7] uppercase">
              Liên hệ với chúng tôi
            </span>
            <h2 className="mb-6 text-3xl leading-tight font-bold text-gray-900 lg:text-5xl">
              Sẵn sàng tối ưu hóa <br /> doanh nghiệp của bạn?
            </h2>
            <p className="mb-10 max-w-md text-lg text-gray-600">
              Để lại thông tin, đội ngũ Timeso sẽ liên hệ tư vấn giải pháp phù hợp nhất cho quy mô
              doanh nghiệp của bạn trong vòng 24h.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-[#00BAC7]/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6FAFA] text-[#00BAC7]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">1900 1234</div>
                  <div className="text-sm text-gray-500">Hotline tư vấn miễn phí</div>
                </div>
              </div>
              <div className="flex items-center gap-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-[#00BAC7]/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6FAFA] text-[#00BAC7]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">support@timeso.vn</div>
                  <div className="text-sm text-gray-500">Email hỗ trợ khách hàng</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form (269:5629) */}
          <div className="rounded-4xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-200/50 lg:p-10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Họ tên</label>
                <input
                  type="text"
                  className="h-[56px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all outline-none focus:border-[#00BAC7] focus:bg-white focus:ring-4 focus:ring-[#00BAC7]/10"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Email làm việc
                </label>
                <input
                  type="email"
                  className="h-[56px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all outline-none focus:border-[#00BAC7] focus:bg-white focus:ring-4 focus:ring-[#00BAC7]/10"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="h-[56px] w-full rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all outline-none focus:border-[#00BAC7] focus:bg-white focus:ring-4 focus:ring-[#00BAC7]/10"
                  placeholder="0912 345 678"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">
                  Nội dung tư vấn
                </label>
                <textarea
                  className="h-[140px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition-all outline-none focus:border-[#00BAC7] focus:bg-white focus:ring-4 focus:ring-[#00BAC7]/10"
                  placeholder="Tôi quan tâm đến giải pháp..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-black font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl"
                >
                  Gửi thông tin tư vấn
                </button>
                <p className="mt-4 text-center text-xs text-gray-400">
                  Thông tin của bạn được bảo mật an toàn.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

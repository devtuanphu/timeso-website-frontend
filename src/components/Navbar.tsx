"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ChevronUp, X } from "lucide-react";
import { useState, useEffect } from "react";

const FEATURES = [
  {
    title: "Tuyển dụng hiện đại AI",
    desc: "Gợi ý ứng viên tự động.",
  },
  {
    title: "Quản lý nhân sự thông minh AI",
    desc: "Nhân viên đông, quản lý vẫn gọn gàng.",
  },
  {
    title: "Chấm công & theo dõi KPI",
    desc: "Chấm công chuẩn, đánh giá rõ ràng.",
  },
  {
    title: "Auto sắp ca làm thông minh",
    desc: "Xếp ca tối ưu, giảm chi phí.",
  },
  {
    title: "Quản lý tài sản & hàng hóa",
    desc: "Theo dõi xuất-nhập-tồn tiện lợi.",
  },
  {
    title: "Quản lý đơn hàng",
    desc: "Tạo đơn hàng nhanh, thanh toán dễ dàng.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(true);

  // Block page scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="pointer-events-none fixed top-0 z-50 hidden w-full px-4 pt-6 lg:block">
        <nav className="pointer-events-auto mx-auto flex h-[64px] max-w-[1020px] items-center justify-between rounded-full bg-[#363f4d] px-8 shadow-2xl transition-all">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Timeso Logo"
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-10">
            <div className="group relative cursor-pointer">
              <div className="flex items-center gap-1.5 text-[15px] font-medium text-white/90 transition-colors hover:text-[#34D9D9]">
                Các tính năng
                <ChevronDown className="mt-0.5 h-4 w-4" />
              </div>
              <div className="invisible absolute top-full left-0 translate-y-2 transform pt-4 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="pointer-events-auto w-48 overflow-hidden rounded-xl bg-white p-4 shadow-xl">
                  <Link
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00BAC7]"
                  >
                    Chấm công AI
                  </Link>
                  <Link
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00BAC7]"
                  >
                    Tính lương
                  </Link>
                  <Link
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00BAC7]"
                  >
                    Quản lý hồ sơ
                  </Link>
                </div>
              </div>
            </div>

            {["Case studies", "Về chúng tôi", "Blog", "Liên hệ"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[15px] font-medium text-white/90 transition-colors hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-white px-6 py-2.5 text-[14px] font-bold whitespace-nowrap text-[#101828] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl">
              Download app
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile: Combined Navbar + Dropdown Container */}
      <div className="pointer-events-none fixed top-0 z-50 w-full px-4 pt-4 lg:hidden">
        <div
          className="pointer-events-auto mx-auto max-w-[1020px] overflow-hidden shadow-2xl"
          style={{
            background: "rgba(56, 63, 82, 0.95)",
            borderRadius: isOpen ? "24px" : "9999px",
            // Instant change when opening, smooth transition when closing
            transition: isOpen ? "none" : "border-radius 0.3s ease-out",
          }}
        >
          {/* Navbar Header */}
          <div className="flex h-[64px] items-center justify-between px-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Timeso Logo"
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#01CFCF] transition-transform duration-200 hover:scale-110 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {/* Dropdown Content - Attached below navbar */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="max-h-[calc(100vh-120px)] overflow-y-auto px-5 pb-6">
                {/* Features Accordion */}
                <div className="border-b border-white/10">
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className="flex w-full items-center justify-between py-4 text-base font-semibold text-[#01CFCF]"
                  >
                    Các tính năng
                    {featuresOpen ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      featuresOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 pb-4 pl-4">
                        {FEATURES.map((feature, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="block transition-colors hover:opacity-80"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="text-base font-semibold text-white">
                              {feature.title}
                            </div>
                            <div className="text-sm text-[#667085]">{feature.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Links */}
                {["Case studies", "Về chúng tôi", "Blog", "Liên hệ"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block border-b border-white/10 py-4 text-base font-medium text-white transition-colors hover:text-[#01CFCF]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop when menu is open */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

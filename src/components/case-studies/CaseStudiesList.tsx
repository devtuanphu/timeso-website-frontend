"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "experience", label: "Chia sẻ kinh nghiệm" },
  { id: "operations", label: "Quản lý vận hành" },
  { id: "payroll", label: "Tính lương" },
  { id: "recruitment", label: "Tuyển dụng" },
];

const CASE_STUDIES = [
  {
    id: 1,
    categoryId: "experience",
    category: "Chia sẻ kinh nghiệm",
    title: "Quản lý nhân sự cho cửa hàng vừa và nhỏ",
    description: "Timeso giúp cửa hàng quản lý từ 0-30 nhân sự đơn giản và hiệu quả.",
    image: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
    imagePosition: "left" as const,
  },
  {
    id: 2,
    categoryId: "operations",
    category: "Quản lý cửa hàng",
    title: "Phát Triển Chuỗi Cửa Hàng",
    description:
      "Trước: Mỗi chi nhánh làm 1 kiểu, khó chuẩn hoá. Sau: Một nền tảng thống nhất cho vận hành & nhân sự. Kết quả: Mở thêm chi nhánh nhanh chóng.",
    image: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
    imagePosition: "right" as const,
  },
  {
    id: 3,
    categoryId: "operations",
    category: "Quản lý kho",
    title: "Quản Lý Tài Sản – Kho – Thiết Bị",
    description:
      "Trước: Tài sản thất lạc, bỏ quên bảo trì, ghi tay. Sau: Quản lý trên app, cảnh báo, lịch bảo trì tự động.",
    image: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
    imagePosition: "left" as const,
  },
];

export default function CaseStudiesList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredStudies =
    activeCategory === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((s) => s.categoryId === activeCategory);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-[80px]">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[#101828] md:text-[40px] md:leading-[48px]">
            Tự Động Hóa Vận Hành Với Nền Tảng AI <span className="text-[#01CFCF]">Timeso</span>
          </h2>
        </div>

        {/* Mobile Dropdown - shown on mobile only */}
        <div className="mb-8 md:hidden">
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full appearance-none rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 pr-10 text-base font-medium text-[#101828] shadow-sm focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF] focus:outline-none"
            >
              <option value="all">Chọn loại case studies</option>
              {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-[#667085]"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 8l4 4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Category Tabs - hidden on mobile */}
        <div className="mb-12 hidden flex-wrap justify-center gap-6 md:flex">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`rounded-[10px] px-6 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-linear-to-r from-[#00E1E1] to-[#24BABB] text-white shadow-md"
                  : "border border-[#D0D5DD] bg-white text-[#111927] hover:border-[#00BAC7] hover:text-[#00BAC7]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {filteredStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              category={study.category}
              title={study.title}
              description={study.description}
              image={study.image}
              imagePosition={study.imagePosition}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-6 px-4 py-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="flex h-10 w-10 items-center justify-center text-[#575865] transition-colors hover:text-[#01CFCF]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  currentPage === page
                    ? "bg-[#01CFCF] text-white shadow-[0_0_0_4px_#F2F4F7]"
                    : "text-[#475467] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="flex h-10 w-10 items-center justify-center text-sm text-[#475467]">
              ...
            </span>

            {[8, 9, 10].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  currentPage === page
                    ? "bg-[#01CFCF] text-white shadow-[0_0_0_4px_#F2F4F7]"
                    : "text-[#475467] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
            className="flex h-10 w-10 items-center justify-center text-[#575865] transition-colors hover:text-[#01CFCF]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

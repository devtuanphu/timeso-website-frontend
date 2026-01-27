"use client";

import Image from "next/image";

// Decorative highlight SVG
const HIGHLIGHT_SVG = "/images/comparison/704011790be524e124547ff7c942359a3da3ddb5.svg";

const COMPARISON_DATA = [
  {
    feature: "Chấm công",
    traditional: "Dễ lỗi",
    timeso: "AI + FaceID + GPS",
  },
  {
    feature: "Quản lý ca kíp",
    traditional: "Rời rạc",
    timeso: "Tự động sắp ca",
  },
  {
    feature: "Quản lý ca kíp",
    traditional: "Khó tìm kiếm",
    timeso: "Hồ sơ điện tử 1 chạm",
  },
  {
    feature: "Tính lương",
    traditional: "Mất 3–5 ngày",
    timeso: "Tự động, chính xác",
  },
  {
    feature: "Hiệu suất",
    traditional: "Không đo được",
    timeso: "Báo cáo AI",
  },
  {
    feature: "Trợ giúp",
    traditional: "Chậm trễ",
    timeso: "AI chat 24/7",
  },
];

export default function Comparison() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-6 px-4 py-12 md:gap-[40px] md:px-[80px] md:py-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 px-4 md:gap-[16px] md:px-[32px]">
          <h2 className="text-center text-2xl leading-tight font-bold tracking-tight text-[#101828] md:text-[48px] md:leading-[58px] md:tracking-[-0.96px]">
            So sánh với cách làm truyền thống
          </h2>
          <p className="text-center text-sm leading-relaxed font-normal text-[#475467] md:text-[18px] md:leading-[24px]">
            Tự động hóa quy trình và tối ưu vận hành từ tuyển dụng đến quản lý nhân sự.
          </p>
        </div>

        {/* Comparison Table - with dashed border */}
        <div
          className="relative flex w-full flex-col overflow-x-auto"
          style={{
            border: "1.5px dashed #B0F0F0",
            borderRadius: "8px",
          }}
        >
          {/* Table Header */}
          <div
            className="flex min-w-[500px] items-stretch md:min-w-0"
            style={{ borderBottom: "1.5px dashed #B0F0F0" }}
          >
            {/* Empty feature column */}
            <div className="w-[120px] shrink-0 md:w-[300px]" />

            {/* Excel / thủ công column header */}
            <div
              className="flex flex-1 items-center justify-center p-3 md:p-[26px]"
              style={{ borderLeft: "1.5px dashed #8AE9E9" }}
            >
              <div className="rounded-full border border-[#D0D5DD] bg-[#F9FAFB] px-3 py-1.5 md:px-[24px] md:py-[10px]">
                <span className="text-xs font-bold text-[#333] md:text-[16px]">
                  Excel / thủ công
                </span>
              </div>
            </div>

            {/* TIMESO column header */}
            <div
              className="relative flex flex-1 items-center justify-center p-3 md:p-[26px]"
              style={{ borderLeft: "1.5px dashed #8AE9E9" }}
            >
              <div
                className="rounded-full px-3 py-1.5 md:px-[24px] md:py-[10px]"
                style={{
                  background: "linear-gradient(171deg, #00E2E2 5.54%, #00969E 93.59%)",
                }}
              >
                <span className="text-xs font-bold text-white md:text-[16px]">TIMESO</span>
              </div>
              {/* Decorative highlight */}
              <div className="absolute top-[5px] right-[calc(50%-60px)] hidden md:right-[calc(50%-100px)] md:block">
                <Image
                  src={HIGHLIGHT_SVG}
                  alt=""
                  width={45}
                  height={49}
                  className="h-[30px] w-[28px] md:h-[49px] md:w-[45px]"
                />
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {COMPARISON_DATA.map((row, idx) => (
            <div
              key={idx}
              className="flex min-w-[500px] items-stretch md:min-w-0"
              style={{
                borderBottom: idx < COMPARISON_DATA.length - 1 ? "1.5px dashed #B0F0F0" : "none",
              }}
            >
              {/* Feature name */}
              <div className="flex w-[120px] shrink-0 items-center p-3 md:w-[300px] md:p-[26px]">
                <span className="text-sm font-medium text-[#101828] md:text-[20px]">
                  {row.feature}
                </span>
              </div>

              {/* Traditional value */}
              <div
                className="flex flex-1 items-center justify-center p-3 md:p-[26px]"
                style={{ borderLeft: "1.5px dashed #8AE9E9" }}
              >
                <span className="text-center text-sm font-normal text-[#45556C] md:text-[20px]">
                  {row.traditional}
                </span>
              </div>

              {/* Timeso value */}
              <div
                className="flex flex-1 items-center justify-center p-3 md:p-[26px]"
                style={{ borderLeft: "1.5px dashed #8AE9E9" }}
              >
                <span className="text-center text-sm font-bold text-[#02A4BD] md:text-[20px]">
                  {row.timeso}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

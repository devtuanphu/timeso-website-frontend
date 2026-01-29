"use client";

import { useState } from "react";

// Categories for contact form
const CATEGORIES = [
  { id: "chia-se", label: "Chia sẻ kinh nghiệm" },
  { id: "quan-ly", label: "Quản lý vận hành" },
  { id: "tinh-huong", label: "Tình huống" },
  { id: "tuyen-dung", label: "Tuyển dụng" },
];

export default function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <h1 className="mb-2 text-3xl font-semibold text-[#101828] md:text-4xl">
        Liên hệ với <span className="text-[#01CFCF]">Timeso</span>
      </h1>
      <p className="mb-8 text-lg text-[#475467]">
        Hãy để đội ngũ Timeso đồng hành cùng cửa hàng của bạn.
      </p>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-[#344054]">Lĩnh vực của bạn</label>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? "border-[#01CFCF] bg-[#E6FAFA] text-[#019393]"
                  : "border-gray-300 bg-white text-[#344054] hover:border-[#01CFCF]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#344054]">Họ và tên</label>
          <input
            type="text"
            placeholder="Nhập họ và tên"
            className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-base text-[#101828] shadow-xs outline-none placeholder:text-[#667085] focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#344054]">Phone number</label>
          <input
            type="tel"
            placeholder="+84 000-0000-000"
            className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-base text-[#101828] shadow-xs outline-none placeholder:text-[#667085] focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#344054]">Email</label>
          <input
            type="email"
            placeholder="Nhập địa chỉ email"
            className="w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-base text-[#101828] shadow-xs outline-none placeholder:text-[#667085] focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#344054]">Lời nhắn</label>
          <textarea
            placeholder="Nhập nội dung"
            rows={4}
            className="w-full resize-none rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-base text-[#101828] shadow-xs outline-none placeholder:text-[#667085] focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#01CFCF] focus:ring-[#01CFCF]"
          />
          <label htmlFor="agree" className="text-sm text-[#475467]">
            Tôi đồng ý với{" "}
            <a href="#" className="font-medium text-[#01CFCF] underline">
              chính sách quyền riêng tư
            </a>{" "}
            của Timeso.
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full rounded-full bg-[#01CFCF] px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#01BCBC]">
          Gửi liên hệ
        </button>
      </div>
    </div>
  );
}

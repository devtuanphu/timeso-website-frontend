"use client";

import React, { useState } from "react";
import Image from "next/image";

// Assets
const heroImage = "/figma_assets/463c3571bb784baeb275a97250798b8cbdc26b2c.png";
const officeImage = "/figma_assets/2fb5e002bbde20b8fcf8bb51fa906026401747e4.png";

// Categories for contact form
const CATEGORIES = [
  { id: "chia-se", label: "Chia sẻ kinh nghiệm" },
  { id: "quan-ly", label: "Quản lý vận hành" },
  { id: "tinh-huong", label: "Tình huống" },
  { id: "tuyen-dung", label: "Tuyển dụng" },
];

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-[120px] md:pt-[160px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            <h1 className="mb-2 text-3xl font-semibold text-[#101828] md:text-4xl">
              Liên hệ với <span className="text-[#01CFCF]">Timeso</span>
            </h1>
            <p className="mb-8 text-lg text-[#475467]">
              Hãy để đội ngũ Timeso đồng hành cùng cửa hàng của bạn.
            </p>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-[#344054]">
                Lĩnh vực của bạn
              </label>
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
                <label className="mb-1.5 block text-sm font-medium text-[#344054]">
                  Phone number
                </label>
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

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image src={heroImage} alt="Timeso App" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Office Image Section */}
      <div className="container mx-auto mt-16 px-4 md:mt-24">
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image src={officeImage} alt="Timeso Office" fill className="object-cover" />
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Chat Card */}
          <div className="rounded-2xl bg-white p-6">
            <div className="mb-6">
              <Image src="/images/contact/Featured icon.png" alt="Chat" width={48} height={48} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#101828]">Chat to sales</h3>
            <p className="mb-4 text-base text-[#475467]">Speak to our friendly team.</p>
            <a
              href="mailto:sales@untitledui.com"
              className="font-semibold text-[#01CFCF] hover:underline"
            >
              sales@untitledui.com
            </a>
          </div>

          {/* Visit Card */}
          <div className="rounded-2xl bg-white p-6">
            <div className="mb-6">
              <Image src="/images/contact/Featured icon2.png" alt="Visit" width={48} height={48} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#101828]">Visit us</h3>
            <p className="mb-4 text-base text-[#475467]">Visit our office HQ.</p>
            <a href="#" className="font-semibold text-[#01CFCF] hover:underline">
              100 Smith Street
              <br />
              Collingwood VIC 3068 AU
            </a>
          </div>

          {/* Call Card */}
          <div className="rounded-2xl bg-white p-6">
            <div className="mb-6">
              <Image src="/images/contact/Featured icon3.png" alt="Call" width={48} height={48} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-[#101828]">Call us</h3>
            <p className="mb-4 text-base text-[#475467]">Mon-Fri from 8am to 5pm.</p>
            <a href="tel:+15550000000" className="font-semibold text-[#01CFCF] hover:underline">
              +1 (555) 000-0000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

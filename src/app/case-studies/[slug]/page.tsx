import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data - replace with actual data fetching
const CASE_STUDY = {
  id: 1,
  category: "Chia sẻ kinh nghiệm",
  title: "TỐI ƯU QUẢN LÝ KHO CHO CỬA HÀNG VỪA & NHỎ",
  description:
    "Với Timeso, bạn không chỉ quản lý kho chính xác và nhanh chóng, mà còn kết nối được với hàng trăm chủ doanh nghiệp & cửa hàng — giúp tối ưu tồn kho, giảm sai lệch, và tăng tốc nhập – xuất hàng mỗi ngày.",
  heroImage: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
  contentImage: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
  context: {
    title: "1. Bối cảnh & Vấn đề",
    intro: "Nhiều cửa hàng, shop online, doanh nghiệp bán lẻ gặp các khó khăn:",
    problems: [
      "Hàng hóa thừa, thiếu giữa các tồn kho và thực tế, gây thất thoát lớn, sai phạm kê 0.1% mỗi lần.",
      "Không quản lý được hàng tồn chính xác tại từng điểm bán hàng – dễ hàng.",
      "Mất rất nhiều thời gian – một nhân viên phải mất thời gian để té to check, điểm lại nguồn lực, dễ dễ mắc lại.",
      "Kiểm soát và tính công nhân viên sau mỗi ngày — quá tải với điều kiếm kho hàng, không tự động.",
      "Không có hệ thống nhập xuất kho tự động — cập nhật thủ công dễ lỗi, không tự động.",
    ],
    conclusion:
      "Hàng còn nhiều phải bằng phải nhầm lẫn – chi tiêu gấp 4 lần nhân viên cho doanh hàng không tối ưu.",
  },
  solution: {
    title: "2. Giải pháp của Timeso",
    intro:
      "Timeso mang đến một hệ thống Quản Lý Kho thông minh, đồng bộ từ nhập hàng, theo dõi tồn kho đến xuất kho và kết nối vận cung cấp.",
    subIntro: "Timeso cụng cử hàng:",
    features: [
      {
        title: "Quản lý tồn kho theo thời gian thực",
        items: [
          "Tự động cập nhật khi có giao dịch nhập – xuất.",
          "Điểm hàng bán ra nhiều lần đó với.",
        ],
      },
      {
        title: "Kết nối trực tiếp với kênh mở doanh nghiệp & các hàng",
        items: ["Nhập và x lý đơn hàng nhanh hơn.", "Tối ưu nguồn cung & thời chế tiết hàng."],
      },
      {
        title: "Theo dõi lịch sử giao dịch minh bạch",
        items: ["AI trình ra, vi phát, thời gian vào — xây dọ 40-000 lịch."],
      },
      {
        title: "Dự đoán tồn kho & cảnh báo hàng",
        items: [
          "Hệ thống đưa ra cảnh báo sớm khi đến nhập.",
          "Giúp trải chung để dùng đảm bảo, không lỡ đi lát hàng.",
        ],
      },
      {
        title: "Quản lý Drifference",
        items: ["Nhập – xuất hàng chỉ trong vài giây.", "Tự động đồng bộ dữ liệu đến kế thống..."],
      },
    ],
  },
  results: {
    title: "Kết quả đạt được:",
    subtitle: "Sau khi triển khai, khách hàng nhận được:",
    metrics: [
      "Giảm 40-80% thời gian kiểm kho",
      "Sai lệch tồn kho gần như bằng 0",
      "Tăng tốc độ nhập – xuất hàng lên 2–3 lần",
      "Giảm chi phí nhân sự vận hành kho",
      "Tồn kho được tối ưu → không còn dư hàng chậm",
      "Quản lý nhiều điểm bán trong cùng một giao diện",
    ],
    cta: "Bạn muốn trải nghiệm thử tính năng AI sáp có?",
    ctaLink: "Tải app miễn phí ngay!",
  },
  relatedCase: {
    category: "Quản lý cửa hàng",
    title: "Phát Triển Chuỗi Cửa Hàng",
    description:
      "Trước: Mỗi chi nhánh làm 1 kiểu, khó chuẩn hoá. Sau: Một nền tảng thống nhất cho vận hành & nhân sự. Kết quả: Mở thêm chi",
    image: "/images/case-studies/22e4c682258f224f70841b23f4805d4f91d23c3a.png",
  },
};

export default async function CaseStudyDetailPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="bg-white px-4 pt-[100px] pb-6 md:px-8 md:pt-[160px] md:pb-10">
        <div className="mx-auto max-w-[1024px] text-center">
          <h1 className="mb-3 text-[20px] leading-tight font-bold tracking-[-0.02em] text-[#101828] md:mb-4 md:text-[48px] md:leading-[60px]">
            {CASE_STUDY.title}
          </h1>
          <p className="mx-auto mb-4 max-w-[960px] text-sm leading-relaxed text-[#475467] md:mb-6 md:text-lg md:leading-[28px]">
            {CASE_STUDY.description}
          </p>
          <span className="inline-block rounded-[24px] border border-[#00E2E2] px-3 py-1.5 text-xs font-medium text-[#005757] md:px-4 md:py-2 md:text-sm">
            {CASE_STUDY.category}
          </span>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-6 md:py-16">
        <div className="mx-auto max-w-[920px] px-4 md:px-8">
          {/* Section 1: Bối cảnh & Vấn đề */}
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-lg font-bold text-[#101828] md:mb-6 md:text-[28px]">
              {CASE_STUDY.context.title}
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-[#475467] md:mb-4 md:text-base">
              {CASE_STUDY.context.intro}
            </p>
            <ul className="mb-4 space-y-2 pl-1 text-[#475467] md:mb-6 md:space-y-3">
              {CASE_STUDY.context.problems.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#475467]" />
                  <span className="text-sm leading-relaxed md:text-base">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-[#475467] md:text-base">
              {CASE_STUDY.context.conclusion}
            </p>
          </div>

          {/* Image */}
          <div className="mb-8 overflow-hidden rounded-[16px] md:mb-12 md:rounded-[24px]">
            <Image
              src={CASE_STUDY.heroImage}
              alt="Case Study"
              width={920}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Section 2: Giải pháp của Timeso */}
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-lg font-bold text-[#101828] md:mb-6 md:text-[28px]">
              {CASE_STUDY.solution.title}
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-[#475467] md:mb-4 md:text-base">
              {CASE_STUDY.solution.intro}
            </p>
            <p className="mb-4 text-sm font-medium text-[#314242] md:mb-6 md:text-base">
              {CASE_STUDY.solution.subIntro}
            </p>

            <ol className="mb-6 space-y-4 pl-1 md:mb-8 md:space-y-6">
              {CASE_STUDY.solution.features.map((feature, idx) => (
                <li key={idx}>
                  <p className="mb-1.5 text-sm font-medium text-[#314242] md:mb-2 md:text-base">
                    {idx + 1}. {feature.title}
                  </p>
                  <ul className="space-y-1 pl-3 text-[#475467] md:pl-4">
                    {feature.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-sm leading-relaxed md:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#475467]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          {/* Results Section */}
          <div className="mb-8 md:mb-12">
            <h3 className="mb-3 text-base font-bold text-[#101828] md:mb-4 md:text-xl">
              {CASE_STUDY.results.title}
            </h3>
            <p className="mb-3 text-sm text-[#475467] md:mb-4 md:text-base">
              {CASE_STUDY.results.subtitle}
            </p>
            <ul className="space-y-2 md:space-y-3">
              {CASE_STUDY.results.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm md:gap-3 md:text-base">
                  <Check className="h-4 w-4 shrink-0 text-[#01CFCF] md:h-5 md:w-5" />
                  <span className="text-[#314242]">{metric}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-[#475467] md:mt-8 md:text-base">
              {CASE_STUDY.results.cta}{" "}
              <Link href="#" className="font-medium text-[#01CFCF] underline hover:text-[#005757]">
                {CASE_STUDY.results.ctaLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="mx-auto max-w-[1075px] px-4 md:px-8">
          <h2 className="mb-6 text-center text-xl font-bold text-[#101828] md:mb-8 md:text-[32px]">
            Case studies liên quan
          </h2>

          {/* Related Case Study Card */}
          <div className="flex flex-col gap-6 rounded-[16px] bg-[#EEEEEE] p-4 md:flex-row md:items-center md:gap-20 md:rounded-[24px] md:px-10 md:py-6">
            <div className="flex flex-1 flex-col gap-4 md:gap-6">
              <span className="w-fit rounded-[24px] border border-[#00E2E2] px-3 py-1.5 text-xs font-medium text-[#005757] md:px-4 md:py-2 md:text-sm">
                {CASE_STUDY.relatedCase.category}
              </span>
              <div>
                <h3 className="mb-1.5 text-xl font-bold text-[#314242] md:mb-2 md:text-[32px]">
                  {CASE_STUDY.relatedCase.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#314242] md:text-base">
                  {CASE_STUDY.relatedCase.description}
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-[#101828] transition-colors hover:text-[#00BAC7] md:text-base"
                >
                  Liên hệ
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-[#01CFCF] transition-colors hover:text-[#005757] md:text-base"
                >
                  Xem chi tiết
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-[#00E1E1] to-[#24BABB] md:h-8 md:w-8">
                    <ArrowRight className="h-3.5 w-3.5 text-white md:h-4 md:w-4" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[16px] md:h-[300px] md:w-[375px] md:rounded-[24px]">
              <Image
                src={CASE_STUDY.relatedCase.image}
                alt={CASE_STUDY.relatedCase.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#01CFCF] py-8 md:py-12">
        <div className="mx-auto max-w-[600px] px-4 text-center">
          <h2 className="mb-2 text-xl font-bold text-white md:mb-4 md:text-3xl">
            TẢI MIỄN PHÍ NGAY
          </h2>
          <p className="mb-6 text-sm text-white/90 md:text-base">Mang liền trải nghiệm cửa bạn!</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-white transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm font-medium">App Store</span>
            </Link>
            <Link
              href="#"
              className="flex h-10 items-center gap-2 rounded-lg bg-black px-4 text-white transition-opacity hover:opacity-80"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              <span className="text-sm font-medium">Google Play</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import type { BaiViet } from "@/types/strapi";
import { getStrapiMediaUrl } from "@/lib/strapi";

// Arrow icon from Figma
const ARROW_ICON = "/images/news/266f668087d1051c6ee2d22f45366e87a0618c23.svg";

// Default fallback data
const FALLBACK_POSTS = [
  {
    id: 1,
    title: "Tự động hóa Quyết định",
    desc: "Tự động Chấp thuận: Giảm Tải 80% Công việc Hành chính cho Quản lý",
    image: "/images/news/9f2dfde3dc3cba8c21f04f9b90074b1ec656da49.png",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    slug: "#",
    tags: [
      { label: "Design", color: "bg-[#F9F5FF] text-[#6941C6]" },
      { label: "Research", color: "bg-[#EEF4FF] text-[#3538CD]" },
    ],
  },
  {
    id: 2,
    title: "Quản Lý Vận Hành Hiệu Quả",
    desc: "Đơn Giản Hóa Quản Lý Chuỗi: Tạm biệt Ca kíp Rối Rắm!",
    image: "/images/news/b10b6e2f81e8cd130fc5980ac1e70319d7eb4fb0.png",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    slug: "#",
    tags: [{ label: "Software Development", color: "bg-[#ECFDF3] text-[#027A48]" }],
  },
  {
    id: 3,
    title: "AI Theo dõi Hiệu suất",
    desc: "Sử dụng AI để nhanh chóng xác định các điểm bất thường",
    image: "/images/news/961775ee44c3d63e0abfba137bcda5e250751037.png",
    author: "Phoenix Baker",
    date: "19 Jan 2022",
    slug: "#",
    tags: [
      { label: "Product", color: "bg-[#F9F5FF] text-[#6941C6]" },
      { label: "SaaS", color: "bg-[#FFF1F3] text-[#C01048]" },
    ],
  },
];

interface NewsAndBlogProps {
  posts?: BaiViet[];
}

// Format date to readable string
function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Get tag colors based on category
function getTagColor(category?: string): string {
  const colors: Record<string, string> = {
    "Công nghệ": "bg-[#F9F5FF] text-[#6941C6]",
    AI: "bg-[#EEF4FF] text-[#3538CD]",
    "Quản lý": "bg-[#ECFDF3] text-[#027A48]",
    HR: "bg-[#F0F9FF] text-[#026AA2]",
    default: "bg-[#FDF2FA] text-[#C11574]",
  };
  return colors[category ?? "default"] ?? colors.default;
}

export default function NewsAndBlog({ posts }: NewsAndBlogProps) {
  // Transform Strapi posts or use fallback
  const blogPosts =
    posts && posts.length > 0
      ? posts.slice(0, 3).map((post) => ({
          id: post.id,
          title: post.tieu_de,
          desc: post.mo_ta ?? "",
          image: getStrapiMediaUrl(post.hinh_dai_dien) ?? FALLBACK_POSTS[0].image,
          author: post.tac_gia ?? "Timeso Team",
          date: formatDate(post.createdAt),
          slug: post.slug,
          tags: post.danh_muc ? [{ label: post.danh_muc, color: getTagColor(post.danh_muc) }] : [],
        }))
      : FALLBACK_POSTS;

  return (
    <section className="bg-white py-12 md:py-[96px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-[32px]">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:mb-[64px] md:flex-row md:items-start md:justify-between">
          <h2 className="text-2xl leading-tight font-bold tracking-tight text-[#101828] md:text-[48px] md:leading-[44px] md:tracking-[-0.96px]">
            Tin tức mới nhất từ Timeso
          </h2>
          <Link
            href="/blog"
            className="flex w-fit items-center justify-center gap-2 rounded-[24px] bg-[#01CFCF] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00A3AF] md:w-[160px] md:gap-[8px] md:px-[20px] md:py-[12px] md:text-[16px]"
          >
            Xem tất cả
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[32px]">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              {/* Image */}
              <Link
                href={post.slug !== "#" ? `/blog/${post.slug}` : "#"}
                className="relative mb-5 h-[180px] overflow-hidden rounded-[12px] md:mb-[32px] md:h-[240px] md:rounded-[16px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Author & Date */}
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold md:mb-[12px] md:gap-[8px] md:text-[14px]">
                <span className="text-[#00BAC7]">{post.author}</span>
                <span className="text-[#475467]">•</span>
                <span className="text-[#475467]">{post.date}</span>
              </div>

              {/* Title with Arrow */}
              <Link
                href={post.slug !== "#" ? `/blog/${post.slug}` : "#"}
                className="mb-2 flex items-start justify-between gap-3 md:mb-[8px] md:gap-[16px]"
              >
                <h3 className="text-lg leading-tight font-semibold text-[#101828] transition-colors group-hover:text-[#00BAC7] md:text-[24px] md:leading-[32px]">
                  {post.title}
                </h3>
                <Image
                  src={ARROW_ICON}
                  alt=""
                  width={24}
                  height={24}
                  className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:mt-[4px] md:h-6 md:w-6"
                />
              </Link>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-[#475467] md:mb-[24px] md:text-[16px] md:leading-[24px]">
                {post.desc}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 md:gap-[8px]">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium md:px-[10px] md:py-[2px] md:text-[14px] ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Calendar, ArrowRight, X } from "lucide-react";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { BaiViet, TrangBlogData } from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// --- Types ---

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  desc: string;
  author: {
    name: string;
    avatar: string;
    color: string;
  };
  date: string;
  tags: string[];
  category: string;
  image: string;
  featured?: boolean;
}

interface BlogPageClientProps {
  pageData?: TrangBlogData | null;
  posts: BaiViet[];
}

// --- Helper Functions ---

function getStrapiImageUrl(url?: string): string {
  if (!url) return "/images/blog/placeholder.png";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function mapStrapiPostToBlogPost(post: BaiViet): BlogPost {
  return {
    id: post.id,
    title: post.tieu_de,
    slug: post.slug,
    desc: post.mo_ta || "",
    author: {
      name: post.tac_gia || "Timeso Team",
      avatar: "/images/blog/avatar-default.png",
      color: "#01CFCF",
    },
    date: formatDate(post.createdAt),
    tags: post.tags || [],
    category: post.danh_muc || "Tin tức",
    image: getStrapiImageUrl(post.hinh_dai_dien?.url),
    featured: post.noi_bat,
  };
}

// --- Mock Data (fallback) ---

const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "hr", label: "Quản trị nhân sự" },
  { id: "tech", label: "Công nghệ & AI" },
  { id: "performance", label: "Quản lý hiệu suất" },
  { id: "data", label: "Quản lý dữ liệu" },
];

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Tối Ưu Ca Làm Bằng AI",
    slug: "toi-uu-ca-lam-bang-ai",
    desc: "Làm sao để AI dự đoán nhu cầu theo giờ cao điểm và tự động đề xuất ca làm tối ưu?",
    author: {
      name: "Timeso Team",
      avatar: "/images/blog/avatar-default.png",
      color: "#C7B9DA",
    },
    date: "20 Jan 2022",
    tags: ["AI", "Đề xuất xem"],
    category: "Công nghệ & AI",
    image: "/images/blog/31db83164c6379a997eca9fe6670a6346ec9afdf.png",
    featured: true,
  },
];

// --- Components ---

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-all duration-200 lg:pointer-events-auto lg:visible lg:static lg:z-auto lg:block lg:w-full lg:bg-transparent lg:p-0 lg:opacity-100 ${
        isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="flex max-h-[85vh] w-[90%] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:h-auto lg:max-h-none lg:w-full lg:overflow-visible lg:rounded-none lg:bg-transparent lg:shadow-none">
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 lg:hidden">
          <span className="text-xl font-semibold text-gray-900">Bộ lọc</span>
          <button onClick={() => setIsOpen(false)} className="rounded-lg p-2 hover:bg-gray-100">
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 lg:p-0">
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-4 pl-10 text-sm text-gray-500 placeholder-gray-500 shadow-xs outline-none focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
              />
              <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold text-[#01CFCF]">Bộ lọc</h3>

            {/* Categories */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Danh mục bài viết
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-900 shadow-xs outline-none focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]">
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-3 right-3 h-4 w-4 text-gray-500" />
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Thời gian</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tất cả"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-900 shadow-xs outline-none focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
                />
                <Calendar className="pointer-events-none absolute top-2.5 right-3 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Sắp xếp</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pr-10 pl-3 text-sm text-gray-900 shadow-xs outline-none focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]">
                  <option>Mới nhất</option>
                  <option>Cũ nhất</option>
                  <option>Xem nhiều nhất</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-3 right-3 h-4 w-4 text-gray-500" />
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-gray-100 focus:outline-none">
                Đặt lại
              </button>
              <button className="flex items-center justify-center rounded-full border border-[#01CFCF] bg-[#01CFCF] px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:border-[#01BCBC] hover:bg-[#01BCBC] focus:ring-2 focus:ring-[#01CFCF] focus:outline-none">
                Áp dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group mb-12 flex cursor-pointer flex-col gap-8 lg:flex-row"
    >
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[320px] lg:w-[560px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl bg-[#E6FAFA] py-1 pr-2.5 pl-1 mix-blend-multiply">
            <span className="rounded-2xl bg-white px-2 py-0.5 text-xs font-medium text-[#019393]">
              {post.category}
            </span>
            <span className="text-xs font-medium text-[#019393]">
              {post.featured ? "Nổi bật" : "Đề xuất xem"}
            </span>
          </div>
          <h2 className="mb-4 text-3xl leading-tight font-semibold text-[#101828] md:text-4xl">
            {post.title}
          </h2>
          <p className="line-clamp-3 text-base text-[#475467]">{post.desc}</p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 overflow-hidden rounded-full border border-white shadow-sm"
            style={{ backgroundColor: post.author.color }}
          >
            <div className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
              {post.author.name.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#344054]">{post.author.name}</span>
            <span className="text-sm text-[#475467]">{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex cursor-pointer flex-col gap-6">
      <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-2xl bg-[#E6FAFA] py-1 pr-2.5 pl-1 mix-blend-multiply">
            <span className="rounded-2xl bg-white px-2 py-0.5 text-xs font-medium text-[#019393]">
              {post.category}
            </span>
          </div>

          <div className="mb-2">
            <h3 className="line-clamp-2 text-xl font-bold text-[#101828] transition-colors group-hover:text-[#01CFCF]">
              <span className="flex items-start justify-between gap-2">
                {post.title}
                <ArrowRight className="mt-1 h-6 w-6 shrink-0 -rotate-45 text-[#101828] transition-colors group-hover:text-[#01CFCF]" />
              </span>
            </h3>
          </div>

          <p className="line-clamp-2 text-base text-[#475467]">{post.desc}</p>
        </div>

        <div className="mt-auto flex items-center gap-3">
          <div
            className="h-10 w-10 overflow-hidden rounded-full border border-white shadow-sm"
            style={{ backgroundColor: post.author.color }}
          >
            <div className="flex h-full w-full items-center justify-center text-xs font-bold text-white">
              {post.author.name.substring(0, 2).toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#101828]">{post.author.name}</span>
            <span className="text-sm text-[#475467]">{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// --- Page Component ---

export default function BlogPageClient({ pageData, posts }: BlogPageClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Map Strapi posts to BlogPost format, or use fallback
  const blogPosts: BlogPost[] =
    posts.length > 0 ? posts.map(mapStrapiPostToBlogPost) : FALLBACK_POSTS;

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const gridPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  // Page content from Strapi or defaults
  const heroTitle = pageData?.hero?.tieu_de || "Kiến Thức Quản Lý & Vận Hành Hiện Đại";
  const heroDesc =
    pageData?.hero?.mo_ta ||
    "Nơi cập nhật thông tin, góc nhìn thực tiễn và kinh nghiệm triển khai Timeso.";

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <AnimatedHero>
        <div className="bg-white pt-[120px] pb-12 md:pt-[160px] md:pb-[80px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl leading-tight font-semibold tracking-tight text-[#101828] md:text-[48px] md:leading-[60px] md:tracking-[-0.96px]">
                {heroTitle}
              </h1>
              <p className="max-w-3xl text-lg text-[#475467] md:text-[20px] md:leading-[30px]">
                {heroDesc}
              </p>
            </div>
          </div>
        </div>
      </AnimatedHero>

      <AnimatedPageSection delay={0.1}>
        <div className="container mx-auto px-4 py-12 lg:py-16">
          {/* Mobile Filter & Search */}
          <div className="mb-8 flex gap-3 lg:hidden">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="h-11 w-full rounded-lg border border-[#D0D5DD] bg-white pr-4 pl-10 text-sm text-[#101828] placeholder-[#667085] shadow-xs outline-none focus:border-[#01CFCF] focus:ring-1 focus:ring-[#01CFCF]"
              />
              <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[#667085]" />
            </div>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D0D5DD] bg-white p-0 text-[#344054] shadow-xs hover:bg-gray-50 focus:outline-none"
            >
              <Image
                src="/images/news/mage_filter.png"
                alt="Filter"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Sidebar: 4 Columns */}
            <div className="hidden lg:col-span-4 lg:block">
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </div>

            {/* Main Content: 8 Columns */}
            <div className="lg:col-span-8">
              {/* Featured Post */}
              {featuredPost && <FeaturedPost post={featuredPost} />}

              {/* Grid Posts */}
              <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                {gridPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* No posts message */}
              {blogPosts.length === 0 && (
                <div className="py-16 text-center">
                  <p className="text-lg text-gray-500">Chưa có bài viết nào.</p>
                </div>
              )}

              {/* Pagination */}
              {blogPosts.length > 0 && (
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <button className="flex items-center gap-2 rounded-lg py-2 pr-4 pl-0 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50">
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Trước
                  </button>

                  {/* Mobile Text */}
                  <span className="text-sm font-medium text-gray-700 md:hidden">Trang 1 / 1</span>

                  {/* Desktop Number List */}
                  <div className="hidden items-center gap-1 md:flex">
                    <button className="h-10 w-10 rounded-lg bg-[#F9F5FF] text-sm font-medium text-[#01CFCF]">
                      1
                    </button>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg py-2 pr-0 pl-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Tiếp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedPageSection>

      {/* Mobile Sidebar (Drawer) */}
      <div className="lg:hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
}

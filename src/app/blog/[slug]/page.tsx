import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getBaiVietBySlug, getBaiViets, getStrapiMediaUrl } from "@/lib/strapi";
import type { BaiViet } from "@/types/strapi";
import Navbar from "@/components/Navbar";

// Default SEO
const DEFAULT_SEO = {
  title: "Bài Viết - Timeso Blog",
  description:
    "Đọc các bài viết về quản lý nhân sự, chấm công và giải pháp HR thông minh từ Timeso.",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBaiVietBySlug(slug);

  if (!post) {
    return {
      title: DEFAULT_SEO.title,
      description: DEFAULT_SEO.description,
    };
  }

  const seo = post.seo;
  return {
    title: seo?.tieu_de ?? post.tieu_de ?? DEFAULT_SEO.title,
    description: seo?.mo_ta ?? post.mo_ta ?? DEFAULT_SEO.description,
    keywords: seo?.tu_khoa,
    openGraph: {
      title: seo?.tieu_de ?? post.tieu_de ?? DEFAULT_SEO.title,
      description: seo?.mo_ta ?? post.mo_ta ?? DEFAULT_SEO.description,
      images: post.hinh_dai_dien ? [getStrapiMediaUrl(post.hinh_dai_dien) ?? ""] : [],
    },
    alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
  };
}

// Blog Card Component
function BlogCard({ post }: { post: BaiViet }) {
  const imageUrl = getStrapiMediaUrl(post.hinh_dai_dien) ?? "/images/blog/default.png";
  const authorName = post.tac_gia ?? "Timeso Team";
  const authorInitials = authorName.substring(0, 2).toUpperCase();
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-6">
      <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={imageUrl}
          alt={post.tieu_de}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-3">
        {post.danh_muc && (
          <div className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#E6FAFA] py-1 pr-2.5 pl-1">
            <span className="rounded-2xl bg-white px-2 py-0.5 text-xs font-medium text-[#019393]">
              {post.danh_muc}
            </span>
          </div>
        )}
        <h3 className="flex items-start justify-between gap-2 text-xl font-semibold text-[#101828] group-hover:text-[#01CFCF]">
          {post.tieu_de}
          <ArrowRight className="mt-1 h-6 w-6 shrink-0 -rotate-45" />
        </h3>
        <p className="line-clamp-2 text-base text-[#475467]">{post.mo_ta}</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7B9DA] text-xs font-bold text-white">
            {authorInitials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#101828]">{authorName}</span>
            <span className="text-sm text-[#475467]">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBaiVietBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch related posts
  const relatedResult = await getBaiViets({
    pagination: { pageSize: 3 },
    filters: { slug: { $ne: slug } },
    sort: "publishedAt:desc",
  });
  const relatedPosts = relatedResult?.data ?? [];

  // Extract data
  const title = post.tieu_de;
  const description = post.mo_ta ?? "";
  const content = post.noi_dung ?? "";
  const heroImage = getStrapiMediaUrl(post.hinh_dai_dien) ?? "/images/blog/default.png";
  const authorName = post.tac_gia ?? "Timeso Team";
  const authorInitials = authorName.substring(0, 2).toUpperCase();
  const category = post.danh_muc ?? "Bài viết";
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 pt-[120px] text-center md:pt-[160px]">
          {/* Title */}
          <h1 className="mx-auto mb-6 max-w-4xl text-[30px] leading-[38px] font-semibold text-[#101828] md:text-[48px] md:leading-[60px]">
            {title}
          </h1>

          {/* Subtitle */}
          {description && (
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-[30px] text-[#475467]">
              {description}
            </p>
          )}

          {/* Author Info & Category */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-[#C7B9DA]">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                  {authorInitials}
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-[#101828]">{authorName}</span>
                <span className="text-sm text-[#475467]">{date}</span>
              </div>
            </div>
            <span className="rounded-2xl bg-[#E6FAFA] px-2.5 py-0.5 text-xs font-medium text-[#019393]">
              {category}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto mb-12 px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 lg:aspect-[2.5/1]">
            <Image src={heroImage} alt={title} fill className="object-cover" priority />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            {/* Render rich text content */}
            <div
              className="prose prose-lg prose-headings:text-[#101828] prose-p:text-[#475467] prose-a:text-[#01CFCF] prose-strong:text-[#101828] max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-[#101828]">Bài viết liên quan</h2>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-[#01CFCF] hover:text-[#019393]"
                >
                  Xem tất cả →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

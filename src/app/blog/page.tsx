import type { Metadata } from "next";
import BlogPageClient from "@/components/blog/BlogPageClient";
import { getTrangBlog, getBaiViets } from "@/lib/strapi";
import type { BaiViet, TrangBlogData } from "@/types/strapi";

// Default SEO
const DEFAULT_SEO = {
  title: "Blog - Timeso",
  description:
    "Tin tức, hướng dẫn và insights về quản lý nhân sự, chấm công, và các giải pháp HR thông minh từ Timeso.",
};

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getTrangBlog();

  const title = pageData?.seo?.tieu_de ?? DEFAULT_SEO.title;
  const description = pageData?.seo?.mo_ta ?? DEFAULT_SEO.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function BlogPage() {
  // Fetch page config and blog posts in parallel
  const [pageData, postsResult] = await Promise.all([
    getTrangBlog(),
    getBaiViets({ sort: "createdAt:desc", pagination: { pageSize: 20 } }),
  ]);

  const posts: BaiViet[] = postsResult?.data ?? [];

  return <BlogPageClient pageData={pageData} posts={posts} />;
}

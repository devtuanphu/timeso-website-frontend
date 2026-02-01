import type { Metadata } from "next";
import { getQuanLyDonHang, getStrapiMediaUrl } from "@/lib/strapi";
import { OrderManagementPageClient } from "@/components/pages/OrderManagementPageClient";

// Default SEO
const DEFAULT_SEO = {
  title: "Quản Lý Đơn Hàng - Timeso",
  description:
    "Giải pháp quản lý đơn hàng thông minh: theo dõi đơn, tối ưu quy trình và tăng hiệu quả kinh doanh.",
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getQuanLyDonHang();
  const seo = data?.seo;

  return {
    title: seo?.tieu_de ?? DEFAULT_SEO.title,
    description: seo?.mo_ta ?? DEFAULT_SEO.description,
    keywords: seo?.tu_khoa,
    openGraph: {
      title: seo?.tieu_de ?? DEFAULT_SEO.title,
      description: seo?.mo_ta ?? DEFAULT_SEO.description,
      images: seo?.hinh_og ? [getStrapiMediaUrl(seo.hinh_og) ?? ""] : [],
    },
    alternates: seo?.canonical_url ? { canonical: seo.canonical_url } : undefined,
  };
}

export default async function OrderManagementPage() {
  const strapiData = await getQuanLyDonHang();
  return <OrderManagementPageClient strapiData={strapiData} />;
}

import type {
  TrangChuData,
  ChamCongData,
  QuanLyNhanSuData,
  QuanLyDonHangData,
  SapCaThongMinhData,
  QuanLyTaiSanData,
  TuyenDungData,
  VeChungToiData,
  LienHeData,
  TrangBlogData,
  TrangCaseStudyData,
  ChinhSachBaoMatData,
  BaiViet,
  CaseStudy,
  ThanhVien,
  KhachHang,
  DoiTac,
  StrapiMedia,
} from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface FetchOptions {
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

// ==================== Helper Functions ====================

/**
 * Get full URL for Strapi media
 */
export function getStrapiMediaUrl(media?: StrapiMedia | null): string | null {
  if (!media?.url) return null;
  if (media.url.startsWith("http")) return media.url;
  return `${STRAPI_URL}${media.url}`;
}

/**
 * Check if Strapi is available
 */
export async function isStrapiAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${STRAPI_URL}/api`, {
      method: "HEAD",
      next: { revalidate: 300 },
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function fetchFromStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<StrapiResponse<T> | null> {
  const { filters, sort, pagination } = options;

  const params = new URLSearchParams();

  // Use pLevel for deep populate (requires strapi-v5-plugin-populate-deep)
  params.append("pLevel", "5");

  // Add filters
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value as Record<string, unknown>).forEach(([op, val]) => {
          params.append(`filters[${key}][${op}]`, String(val));
        });
      } else {
        params.append(`filters[${key}]`, String(value));
      }
    });
  }

  // Add sort
  if (sort) {
    if (Array.isArray(sort)) {
      sort.forEach((s) => params.append("sort", s));
    } else {
      params.append("sort", sort);
    }
  }

  // Add pagination
  if (pagination) {
    if (pagination.page) params.append("pagination[page]", String(pagination.page));
    if (pagination.pageSize) params.append("pagination[pageSize]", String(pagination.pageSize));
  }

  const url = `${STRAPI_URL}/api/${endpoint}?${params.toString()}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.warn(`Strapi fetch failed: ${response.statusText}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.warn(`Strapi fetch error:`, error);
    return null;
  }
}

// ==================== Single Types ====================

export async function getTrangChu(): Promise<TrangChuData | null> {
  // Use pLevel to deeply populate all nested fields including media
  // Requires strapi-v5-plugin-populate-deep installed in Strapi
  const url = `${STRAPI_URL}/api/trang-chu?pLevel=5`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.warn(`getTrangChu failed: ${response.status} ${response.statusText}`);
      // Try fallback with manual populate
      return getTrangChuFallback();
    }

    const result = await response.json();
    return result?.data ?? null;
  } catch (error) {
    console.warn(`getTrangChu error:`, error);
    return null;
  }
}

// Fallback function with explicit deep populate for all nested components
async function getTrangChuFallback(): Promise<TrangChuData | null> {
  const params = new URLSearchParams();

  // Hero
  params.append("populate[hero][populate]", "*");
  params.append("populate[seo]", "*");

  // Trusted By
  params.append("populate[trusted_by][populate]", "*");

  // Why Choose
  params.append("populate[why_choose][populate][cac_ly_do][populate]", "*");

  // All in One
  params.append("populate[all_in_one][populate][modules][populate]", "*");

  // AI Section
  params.append("populate[ai_section][populate]", "*");
  params.append("populate[ai_section][populate][tinh_nang][populate]", "*");

  // Cyan Banner
  params.append("populate[cyan_banner][populate][thong_ke]", "*");

  // Target Audience
  params.append("populate[target_audience][populate][doi_tuong][populate]", "*");

  // User Stories
  params.append("populate[user_stories][populate][stories][populate]", "*");

  // Comparison
  params.append("populate[comparison]", "*");

  // Pricing
  params.append("populate[pricing][populate][goi_gia]", "*");

  // Testimonials - need to populate deep for avatar and logo_cong_ty
  params.append("populate[testimonials][populate][danh_gia][populate][avatar]", "*");
  params.append("populate[testimonials][populate][danh_gia][populate][logo_cong_ty]", "*");

  // CTA
  params.append("populate[cta][populate]", "*");

  // Featured blog posts
  params.append("populate[bai_viet_noi_bat][populate][hinh_dai_dien]", "*");
  params.append("populate[bai_viet_noi_bat][populate][tac_gia]", "*");
  params.append("populate[bai_viet_noi_bat][populate][danh_muc]", "*");

  const url = `${STRAPI_URL}/api/trang-chu?${params.toString()}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.warn(`getTrangChu fallback failed: ${response.status} ${response.statusText}`);
      return null;
    }

    const result = await response.json();
    return result?.data ?? null;
  } catch (error) {
    console.warn(`getTrangChu fallback error:`, error);
    return null;
  }
}

export async function getChamCong(): Promise<ChamCongData | null> {
  const response = await fetchFromStrapi<ChamCongData>("cham-cong");
  return response?.data ?? null;
}

export async function getQuanLyNhanSu(): Promise<QuanLyNhanSuData | null> {
  const response = await fetchFromStrapi<QuanLyNhanSuData>("quan-ly-nhan-su");
  return response?.data ?? null;
}

export async function getQuanLyDonHang(): Promise<QuanLyDonHangData | null> {
  const response = await fetchFromStrapi<QuanLyDonHangData>("quan-ly-don-hang");
  return response?.data ?? null;
}

export async function getSapCaThongMinh(): Promise<SapCaThongMinhData | null> {
  const response = await fetchFromStrapi<SapCaThongMinhData>("sap-ca-thong-minh");
  return response?.data ?? null;
}

export async function getQuanLyTaiSan(): Promise<QuanLyTaiSanData | null> {
  const response = await fetchFromStrapi<QuanLyTaiSanData>("quan-ly-tai-san");
  return response?.data ?? null;
}

export async function getTuyenDung(): Promise<TuyenDungData | null> {
  const response = await fetchFromStrapi<TuyenDungData>("tuyen-dung");
  return response?.data ?? null;
}

export async function getVeChungToi(): Promise<VeChungToiData | null> {
  const response = await fetchFromStrapi<VeChungToiData>("ve-chung-toi");
  return response?.data ?? null;
}

export async function getLienHe(): Promise<LienHeData | null> {
  const response = await fetchFromStrapi<LienHeData>("lien-he");
  return response?.data ?? null;
}

export async function getChinhSachBaoMat(): Promise<ChinhSachBaoMatData | null> {
  const response = await fetchFromStrapi<ChinhSachBaoMatData>("chinh-sach-bao-mat");
  return response?.data ?? null;
}

export async function getTrangBlog(): Promise<TrangBlogData | null> {
  const response = await fetchFromStrapi<TrangBlogData>("trang-blog");
  return response?.data ?? null;
}

export async function getTrangCaseStudy(): Promise<TrangCaseStudyData | null> {
  const response = await fetchFromStrapi<TrangCaseStudyData>("trang-case-study");
  return response?.data ?? null;
}

// ==================== Collection Types ====================

export async function getBaiViets(options?: FetchOptions): Promise<{
  data: BaiViet[];
  total: number;
} | null> {
  const response = await fetchFromStrapi<BaiViet[]>("bai-viets", options);
  if (!response) return null;
  return {
    data: response.data ?? [],
    total: response.meta?.pagination?.total ?? 0,
  };
}

export async function getBaiVietBySlug(slug: string): Promise<BaiViet | null> {
  const response = await fetchFromStrapi<BaiViet[]>("bai-viets", {
    filters: { slug: { $eq: slug } },
  });
  return response?.data?.[0] ?? null;
}

export async function getCaseStudies(options?: FetchOptions): Promise<{
  data: CaseStudy[];
  total: number;
} | null> {
  const response = await fetchFromStrapi<CaseStudy[]>("case-studies", options);
  if (!response) return null;
  return {
    data: response.data ?? [],
    total: response.meta?.pagination?.total ?? 0,
  };
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const response = await fetchFromStrapi<CaseStudy[]>("case-studies", {
    filters: { slug: { $eq: slug } },
  });
  return response?.data?.[0] ?? null;
}

export async function getThanhViens(options?: FetchOptions): Promise<ThanhVien[] | null> {
  const response = await fetchFromStrapi<ThanhVien[]>("thanh-viens", {
    sort: "thu_tu:asc",
    ...options,
  });
  return response?.data ?? null;
}

export async function getKhachHangs(options?: FetchOptions): Promise<KhachHang[] | null> {
  const response = await fetchFromStrapi<KhachHang[]>("khach-hangs", options);
  return response?.data ?? null;
}

export async function getDoiTacs(options?: FetchOptions): Promise<DoiTac[] | null> {
  const response = await fetchFromStrapi<DoiTac[]>("doi-tacs", {
    sort: "thu_tu:asc",
    ...options,
  });
  return response?.data ?? null;
}

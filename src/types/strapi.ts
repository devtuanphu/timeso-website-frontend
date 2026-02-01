// ==================== Base Types ====================

export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  previewUrl?: string;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface StrapiResponse<T> {
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

// ==================== Component Types ====================

export interface SeoMeta {
  tieu_de: string;
  mo_ta?: string;
  tu_khoa?: string;
  hinh_og?: StrapiMedia;
  canonical_url?: string;
}

export interface StatItem {
  gia_tri: string;
  hau_to?: string;
  mo_ta: string;
}

export interface FeatureItem {
  icon?: StrapiMedia;
  tieu_de: string;
  mo_ta?: string;
}

export interface PricingPlan {
  ten_goi: string;
  gia: string;
  don_vi?: string;
  mo_ta?: string;
  tinh_nang?: string[];
  noi_bat?: boolean;
  nut_text?: string;
}

export interface TestimonialItem {
  noi_dung: string;
  ten: string;
  chuc_vu?: string;
  avatar?: StrapiMedia;
  logo_cong_ty?: StrapiMedia;
  so_sao?: number;
}

// ==================== Section Types ====================

export interface HeroSection {
  tieu_de: string;
  mo_ta?: string;
  hien_thi_badges?: boolean;
  app_store_url?: string;
  google_play_url?: string;
  video?: StrapiMedia;
}

export interface FeatureCard {
  tieu_de: string;
  danh_sach?: string[];
  hinh_anh?: StrapiMedia;
  mau_nen?: string;
}

export interface DaLinhVucSection {
  tieu_de_phu?: string;
  tieu_de?: string;
  thong_ke?: StatItem[];
  hinh_anh?: StrapiMedia[];
}

export interface WhyChooseSection {
  tieu_de?: string;
  hinh_nen?: StrapiMedia;
  cac_ly_do?: FeatureItem[];
}

export interface CtaSection {
  tieu_de: string;
  mo_ta?: string;
  hinh_anh?: StrapiMedia;
  mau_nen?: string;
  app_store_url?: string;
  google_play_url?: string;
}

export interface ServicesGridSection {
  tieu_de_phu?: string;
  tieu_de?: string;
  mo_ta?: string;
  dich_vu?: FeatureItem[];
  hinh_anh?: StrapiMedia;
}

export interface ChallengesGridSection {
  tieu_de?: string;
  hinh_anh?: StrapiMedia;
  thach_thuc?: FeatureItem[];
}

export interface SolutionsGridSection {
  tieu_de_phu?: string;
  tieu_de?: string;
  mo_ta?: string;
  giai_phap?: FeatureItem[];
}

export interface TestimonialsSection {
  tieu_de?: string;
  danh_gia?: TestimonialItem[];
}

export interface PricingSection {
  tieu_de?: string;
  mo_ta?: string;
  goi_gia?: PricingPlan[];
}

export interface TrustedBySection {
  tieu_de?: string;
  logos?: StrapiMedia[];
}

// New Homepage Section Types
export interface AllInOneModule {
  tieu_de: string;
  mo_ta?: string;
  hinh_anh?: StrapiMedia;
  link?: string;
}

export interface AllInOneSection {
  tieu_de?: string;
  tieu_de_phu?: string;
  mo_ta?: string;
  modules?: AllInOneModule[];
}

export interface AiSection {
  tieu_de?: string;
  tieu_de_noi_bat?: string;
  mo_ta?: string;
  hinh_anh?: StrapiMedia;
  tinh_nang?: FeatureItem[];
}

export interface CyanBannerSection {
  tieu_de?: string;
  tieu_de_phu?: string;
  thong_ke?: StatItem[];
}

export interface TargetAudienceItem {
  tieu_de: string;
  mo_ta?: string;
  icon?: StrapiMedia;
}

export interface TargetAudienceSection {
  tieu_de?: string;
  mo_ta?: string;
  doi_tuong?: TargetAudienceItem[];
}

export interface UserStoryItem {
  tieu_de: string;
  mo_ta?: string;
  hinh_anh?: StrapiMedia;
  link?: string;
}

export interface UserStoriesSection {
  tieu_de?: string;
  mo_ta?: string;
  stories?: UserStoryItem[];
}

export interface ComparisonSection {
  tieu_de?: string;
  mo_ta?: string;
  du_lieu?: Record<string, unknown>;
}

// ==================== Single Type Data ====================

export interface TrangChuData {
  seo?: SeoMeta;
  hero?: HeroSection;
  trusted_by?: TrustedBySection;
  why_choose?: WhyChooseSection;
  all_in_one?: AllInOneSection;
  ai_section?: AiSection;
  cyan_banner?: CyanBannerSection;
  target_audience?: TargetAudienceSection;
  user_stories?: UserStoriesSection;
  comparison?: ComparisonSection;
  pricing?: PricingSection;
  testimonials?: TestimonialsSection;
  cta?: CtaSection;
  bai_viet_noi_bat?: BaiViet[];
}

export interface ChamCongData {
  seo?: SeoMeta;
  hero?: HeroSection;
  tinh_nang?: FeatureCard[];
  da_linh_vuc?: DaLinhVucSection;
  why_choose?: WhyChooseSection;
  cta?: CtaSection;
}

export interface QuanLyNhanSuData {
  seo?: SeoMeta;
  hero?: HeroSection;
  tinh_nang?: FeatureCard[];
  da_linh_vuc?: DaLinhVucSection;
  why_choose?: WhyChooseSection;
  cta?: CtaSection;
}

export interface QuanLyDonHangData {
  seo?: SeoMeta;
  hero?: HeroSection;
  tinh_nang?: FeatureCard[];
  da_linh_vuc?: DaLinhVucSection;
  cta?: CtaSection;
}

export interface SapCaThongMinhData {
  seo?: SeoMeta;
  hero?: HeroSection;
  tinh_nang?: FeatureCard[];
  da_linh_vuc?: DaLinhVucSection;
  why_choose?: WhyChooseSection;
  cta?: CtaSection;
}

export interface QuanLyTaiSanData {
  seo?: SeoMeta;
  hero?: HeroSection;
  tinh_nang?: FeatureCard[];
  da_linh_vuc?: DaLinhVucSection;
  why_choose?: WhyChooseSection;
  cta?: CtaSection;
}

export interface TuyenDungData {
  seo?: SeoMeta;
  hero?: HeroSection;
  dich_vu?: ServicesGridSection;
  da_linh_vuc?: DaLinhVucSection;
  thach_thuc?: ChallengesGridSection;
  giai_phap?: SolutionsGridSection;
  why_choose?: WhyChooseSection;
  cta?: CtaSection;
}

export interface VeChungToiData {
  seo?: SeoMeta;
  hero?: HeroSection;
  cau_chuyen?: string;
  hinh_cau_chuyen?: StrapiMedia;
  gia_tri_cot_loi?: FeatureItem[];
  doi_ngu?: ThanhVien[];
  cta?: CtaSection;
}

export interface LienHeData {
  seo?: SeoMeta;
  hero?: HeroSection;
  dia_chi?: string;
  email?: string;
  so_dien_thoai?: string;
  gio_lam_viec?: string;
  ban_do_url?: string;
}

export interface TrangBlogData {
  seo?: SeoMeta;
  hero?: HeroSection;
  mo_ta_trang?: string;
}

export interface TrangCaseStudyData {
  seo?: SeoMeta;
  hero?: HeroSection;
  mo_ta_trang?: string;
  cta?: CtaSection;
}

// ==================== Collection Types ====================

export interface BaiViet {
  id: number;
  tieu_de: string;
  slug: string;
  mo_ta?: string;
  noi_dung?: string;
  hinh_dai_dien?: StrapiMedia;
  tac_gia?: string;
  danh_muc?: string;
  tags?: string[];
  seo?: SeoMeta;
  noi_bat?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface CaseStudy {
  id: number;
  tieu_de: string;
  slug: string;
  mo_ta?: string;
  noi_dung?: string;
  hinh_dai_dien?: StrapiMedia;
  khach_hang?: string;
  nganh?: string;
  ket_qua?: Record<string, string>;
  seo?: SeoMeta;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface ThanhVien {
  id: number;
  ten: string;
  chuc_vu?: string;
  mo_ta?: string;
  avatar?: StrapiMedia;
  thu_tu?: number;
}

export interface KhachHang {
  id: number;
  ten: string;
  chuc_vu?: string;
  cong_ty?: string;
  noi_dung: string;
  avatar?: StrapiMedia;
  logo_cong_ty?: StrapiMedia;
  so_sao?: number;
}

export interface DoiTac {
  id: number;
  ten: string;
  logo: StrapiMedia;
  website?: string;
  thu_tu?: number;
}

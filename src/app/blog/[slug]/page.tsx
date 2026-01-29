import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Assets from Figma
const heroImage = "/figma_assets/872fe73e6959dccc0d8741c6d62d7a239e4771ab.png";
const contentImage1 = "/figma_assets/eaab8f14010496eb9054953d335828536efc9655.png";
const contentImage2 = "/figma_assets/8e5709bc39bd97b7babaafdcc89adde870301011.png";
const contentImage3 = "/figma_assets/1b1c01504104cb582594f7bcdd1eedb1ca8b27d3.png";

// --- Mock Related Posts ---
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  desc: string;
  author: { name: string; color: string };
  date: string;
  category: string;
  image: string;
}

const MOCK_RELATED_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Chấm Công Thông Minh",
    slug: "cham-cong-thong-minh",
    desc: "Timeso giúp cửa hàng loại bỏ ghi chép thủ công, tăng minh bạch và tối ưu chi phí nhân sự.",
    author: { name: "Phoenix Baker", color: "#AA9C75" },
    date: "19 Jan 2024",
    category: "Quản trị nhân sự",
    image: "/images/blog/2f1190870d753151f58657595136f67c584b5c8c.png",
  },
  {
    id: 2,
    title: "Giảm 70% Lỗi Chi Với 1 Hệ Thống",
    slug: "giam-70-loi-chi",
    desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: { name: "Lana Steiner", color: "#D4B5AD" },
    date: "18 Jan 2024",
    category: "Công nghệ & AI",
    image: "/images/blog/961775ee44c3d63e0abfba137bcda5e250751037.png",
  },
  {
    id: 3,
    title: "AI Trong Tuyển Dụng",
    slug: "ai-trong-tuyen-dung",
    desc: "Cách cửa hàng F&B và bán lẻ ứng dụng AI để giảm tải cho HR trong mùa cao điểm tuyển dụng.",
    author: { name: "Alec Whitten", color: "#ABB677" },
    date: "17 Jan 2024",
    category: "Quản trị nhân sự",
    image: "/images/blog/2780e16db1a4a364d3d872737f7fe9563d7abb29.png",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-6">
    <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-gray-100">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col gap-3">
      <div className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#E6FAFA] py-1 pr-2.5 pl-1">
        <span className="rounded-2xl bg-white px-2 py-0.5 text-xs font-medium text-[#019393]">
          {post.category}
        </span>
      </div>
      <h3 className="flex items-start justify-between gap-2 text-xl font-semibold text-[#101828] group-hover:text-[#01CFCF]">
        {post.title}
        <ArrowRight className="mt-1 h-6 w-6 shrink-0 -rotate-45" />
      </h3>
      <p className="line-clamp-2 text-base text-[#475467]">{post.desc}</p>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: post.author.color }}
        >
          {post.author.name.substring(0, 2)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#101828]">{post.author.name}</span>
          <span className="text-sm text-[#475467]">{post.date}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default async function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-[120px] text-center md:pt-[160px]">
        {/* Title */}
        <h1 className="mx-auto mb-6 max-w-4xl text-[30px] leading-[38px] font-semibold text-[#101828] md:text-[48px] md:leading-[60px]">
          Tối Ưu Ca Làm Bằng AI: Cách Các Chuỗi F&B Giảm 30% Chi Phí Nhân Sự
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-3xl text-xl leading-[30px] text-[#475467]">
          Trong ngành F&B, chi phí nhân sự luôn chiếm tỉ trọng lớn nhất của một cửa hàng. Làm sao để
          tối ưu chi phí mà không ảnh hưởng chất lượng phục vụ?
        </p>

        {/* Author Info & Category */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-[#C7B9DA]">
              <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                OR
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-[#101828]">Olivia Rhye</span>
              <span className="text-sm text-[#475467]">20 Jan 2024</span>
            </div>
          </div>
          <span className="rounded-2xl bg-[#E6FAFA] px-2.5 py-0.5 text-xs font-medium text-[#019393]">
            Công nghệ & AI
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container mx-auto mb-12 px-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 lg:aspect-[2.5/1]">
          <Image src={heroImage} alt="Hero" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-3xl">
          {/* Section 1 */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">
            1. Vì sao F&B luôn gặp khó khăn khi xếp ca?
          </h2>
          <p className="mb-4 text-lg leading-7 text-[#475467]">Lượng khách thất thường:</p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Buổi sáng = vắng khách</li>
            <li>Trưa/Tối = đông đúc bất ngờ</li>
            <li>Cuối tuần, lễ tết = khó lường</li>
          </ul>
          <p className="mb-6 text-lg leading-7 text-[#475467]">
            Nếu không có Phần Mềm, quản lý sẽ đau đầu với 2 tình huống quen mặt: nhân sự ngồi chơi
            vào giờ vắng, hoặc thiếu người vào giờ cao điểm.
          </p>
          <p className="mb-8 text-lg leading-7 text-[#475467]">Điều này dẫn đến:</p>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Vượt chi tiền lương vô ý.</li>
            <li>Chất lượng phục vụ giảm khi quá tải.</li>
            <li>Nhân viên kiệt sức vì xoay ca không hợp lý – và ai cũng muốn nghỉ cuối tuần.</li>
          </ul>

          {/* Image 1 */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image src={contentImage1} alt="Content" fill className="object-cover" />
          </div>

          {/* Section 2 */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">
            AI giải quyết bài toán này như thế nào?
          </h2>
          <p className="mb-6 text-lg leading-7 text-[#475467]">
            Phần mềng Timeso dùng AI data từ lịch sử bán hàng và mô hình học máy để đoán được:
          </p>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Số lượng khách theo từng khung giờ.</li>
            <li>Ngày cao điểm trong tuần/tháng.</li>
            <li>Yếu tố ảnh hưởng như thời tiết hoặc sự kiện.</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            Từ đó để xuất bảng xếp ca tự động với số nhân sự tối thiểu tối ưu cho mỗi khung giờ.
          </p>

          {/* Section 3 */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">
            Một số ví dụ trải nghiệm của khách hàng sử dụng AI
          </h2>
          <p className="mb-4 text-lg leading-7 text-[#475467]">Lịch sử chấm công:</p>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Ca sáng</li>
            <li>Ca chiều</li>
            <li>Ca tối</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">Số liệu được tổng hợp mỗi tuần:</p>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Số nhân viên = 12</li>
            <li>Chi phí/tuần = 18 triệu</li>
            <li>Giờ trùng lặp = 23%</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            AI phân tích giúp giảm giờ trùng lặp xuống còn 5%, tiết kiệm 4 triệu/tháng.
          </p>

          {/* Image 2 */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image src={contentImage2} alt="Content" fill className="object-cover" />
          </div>

          {/* Section 4 */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">Hệ thống suy rộng</h2>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Cho nhà hàng/quán bar (mùa nóng, lạnh)</li>
            <li>Trung tâm chăm sóc khách hàng</li>
            <li>Bán lẻ mùa lễ, Flash sale</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            Ứng dụng phù hợp với mọi lĩnh vực cần xoay ca theo nhu cầu thay đổi nhanh-chậm trong
            ngày.
          </p>

          {/* Quote Box */}
          <div className="mb-8 rounded-2xl bg-[#F9FAFB] p-6">
            <p className="mb-4 text-lg leading-7 text-[#475467]">
              {
                '"Sử dụng AI xếp ca giúp chúng tôi dễ dàng hơn 1 bước so với việc xếp ca thủ công. Bây giờ tôi có thể quản lý 6 chi nhánh mà chỉ cần check app mỗi sáng."'
              }
            </p>
            <p className="text-sm font-medium text-[#101828]">
              — Chị Hà, Quản lý chuỗi The Coffee House
            </p>
          </div>

          {/* Image 3 */}
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
            <Image src={contentImage3} alt="Content" fill className="object-cover" />
          </div>

          {/* Section 5 */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">
            Các chuỗi F&B tiết kiệm 30% chi phí nhân sự bằng cách nào?
          </h2>
          <p className="mb-4 text-lg leading-7 text-[#475467]">Loại bỏ thời gian chết:</p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Giảm số giờ nhân viên ngồi chờ khách</li>
            <li>Xếp lịch sát nhu cầu thực tế</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            Điều chỉnh nhanh khi có sự kiện đột xuất. Với AI hỗ trợ thêm trên điều kiện đám đông, hệ
            thống sẽ đưa ra đề xuất ca bổ sung hợp lý nhất.
          </p>
          <p className="mb-4 text-lg leading-7 text-[#475467]">Giảm phụ thuộc vào quản lý:</p>
          <ul className="mb-8 list-disc space-y-2 pl-6 text-lg leading-7 text-[#475467]">
            <li>Nhân viên có thể xem ca, đổi ca qua app</li>
            <li>Quản lý chỉ cần duyệt - giảm 80% thời gian</li>
          </ul>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            Kết hợp chấm công và tính lương tự động. Mọi dữ liệu đều được đồng bộ tự động theo quy
            trình xác nhận vào-ra, không bỏ sót phút làm thêm hay sai số nào đáng kể khác.
          </p>

          {/* Conclusion */}
          <h2 className="mb-4 text-2xl font-semibold text-[#101828]">Kết luận</h2>
          <p className="mb-6 text-lg leading-7 text-[#475467]">
            Phần mềm quản lý nhân sự không chỉ là công cụ hỗ trợ, nó là một bước tiến lớn giúp doanh
            nghiệp F&B tối ưu hóa chi phí vận hành đến 30%.
          </p>
          <p className="mb-6 text-lg leading-7 text-[#475467]">
            Với việc ứng dụng AI hiện tại Timeso đã giúp 500+ doanh nghiệp F&B tiết kiệm chi phí
            nhân sự.
          </p>
          <p className="mb-8 text-lg leading-7 text-[#475467]">
            Thay vì phải xếp lịch thủ công mất 3-4 tiếng/tuần, giờ đây toàn bộ quy trình chỉ mất
            chưa đầy 5 phút mỗi sáng.
          </p>

          {/* CTA */}
          <p className="mb-12 text-lg leading-7 text-[#475467]">
            Bạn muốn tiết nghiệm thử như khách hàng của chúng tôi đã làm?{" "}
            <Link
              href="/demo"
              className="font-semibold text-[#01CFCF] underline hover:text-[#019393]"
            >
              Đăng ký demo ngay!
            </Link>
          </p>
        </article>
      </div>

      {/* Related Posts Section */}
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
            {MOCK_RELATED_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer is handled by layout.tsx */}
    </div>
  );
}

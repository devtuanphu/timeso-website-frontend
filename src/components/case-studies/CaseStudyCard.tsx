import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  slug?: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
}

export default function CaseStudyCard({
  slug = "default",
  category,
  title,
  description,
  image,
  imagePosition = "left",
}: CaseStudyCardProps) {
  const imageSection = (
    <div className="relative h-[250px] w-full shrink-0 overflow-hidden rounded-[24px] md:h-[300px] md:w-[375px]">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
  );

  const contentSection = (
    <div className="flex flex-1 flex-col gap-6 md:w-[540px] md:gap-10">
      {/* Category Badge */}
      <span className="w-fit rounded-[24px] border border-[#00E2E2] px-[14px] py-2 text-sm font-medium text-[#005757]">
        {category}
      </span>

      {/* Title & Description */}
      <div className="flex flex-col gap-2 text-[#314242]">
        <h3 className="text-2xl leading-[1.3] font-bold tracking-[-0.02em] md:text-[32px]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#475467] md:text-base">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="text-sm font-medium text-[#101828] transition-colors hover:text-[#00BAC7] md:text-base"
        >
          Liên hệ
        </Link>
        <Link
          href={`/case-studies/${slug}`}
          className="flex items-center gap-2 text-sm font-medium text-[#01CFCF] transition-colors hover:text-[#005757] md:text-base"
        >
          Xem chi tiết
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-[#00E1E1] to-[#24BABB]">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 rounded-[24px] bg-[#E6FAFA] p-6 md:flex-row md:items-center md:gap-20 md:px-10 md:py-6">
      {imagePosition === "left" ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}

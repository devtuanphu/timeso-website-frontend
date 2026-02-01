"use client";

import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhyChoose from "@/components/WhyChoose";
import AllInOne from "@/components/AllInOne";
import AISectionRefined from "@/components/AISectionRefined";
import CyanBanner from "@/components/CyanBanner";
import TargetAudience from "@/components/TargetAudience";
import UserStories from "@/components/UserStories";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import NewsAndBlog from "@/components/NewsAndBlog";
import Testimonials from "@/components/Testimonials";
import BottomCTA from "@/components/BottomCTA";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { TrangChuData } from "@/types/strapi";

interface HomePageClientProps {
  strapiData?: TrangChuData | null;
}

export function HomePageClient({ strapiData }: HomePageClientProps) {
  return (
    <main>
      <AnimatedHero>
        <Hero data={strapiData?.hero} />
      </AnimatedHero>

      <AnimatedPageSection delay={0.1}>
        <TrustedBy data={strapiData?.trusted_by} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <WhyChoose data={strapiData?.why_choose} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <AllInOne data={strapiData?.all_in_one} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <AISectionRefined data={strapiData?.ai_section} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <CyanBanner data={strapiData?.cyan_banner} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <TargetAudience data={strapiData?.target_audience} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <UserStories data={strapiData?.user_stories} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Comparison data={strapiData?.comparison} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Pricing data={strapiData?.pricing} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <NewsAndBlog posts={strapiData?.bai_viet_noi_bat} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Testimonials data={strapiData?.testimonials} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <BottomCTA data={strapiData?.cta} />
      </AnimatedPageSection>
    </main>
  );
}

"use client";

import Hero from "@/components/Hero";
import HeroVideo from "@/components/HeroVideo";
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

export function HomePageClient() {
  return (
    <main>
      <AnimatedHero>
        <Hero />
      </AnimatedHero>

      <AnimatedPageSection delay={0.1}>
        <HeroVideo />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <TrustedBy />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <WhyChoose />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <AllInOne />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <AISectionRefined />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <CyanBanner />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <TargetAudience />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <UserStories />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Comparison />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Pricing />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <NewsAndBlog />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <Testimonials />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <BottomCTA />
      </AnimatedPageSection>
    </main>
  );
}

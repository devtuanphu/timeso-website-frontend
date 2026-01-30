"use client";

import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";

export function CaseStudiesPageClient() {
  return (
    <main>
      <AnimatedHero>
        <CaseStudiesHero />
      </AnimatedHero>

      <AnimatedPageSection delay={0.1}>
        <CaseStudiesList />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <CaseStudiesCTA />
      </AnimatedPageSection>
    </main>
  );
}

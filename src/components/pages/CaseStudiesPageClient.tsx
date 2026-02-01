"use client";

import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";
import { AnimatedPageSection, AnimatedHero } from "@/components/ui";
import type { TrangCaseStudyData, CaseStudy } from "@/types/strapi";

interface CaseStudiesPageClientProps {
  pageData?: TrangCaseStudyData | null;
  caseStudies?: CaseStudy[];
}

export function CaseStudiesPageClient({ pageData, caseStudies = [] }: CaseStudiesPageClientProps) {
  return (
    <main>
      <AnimatedHero>
        <CaseStudiesHero data={pageData?.hero} />
      </AnimatedHero>

      <AnimatedPageSection delay={0.1}>
        <CaseStudiesList caseStudies={caseStudies} />
      </AnimatedPageSection>

      <AnimatedPageSection delay={0.1}>
        <CaseStudiesCTA data={pageData?.cta} />
      </AnimatedPageSection>
    </main>
  );
}

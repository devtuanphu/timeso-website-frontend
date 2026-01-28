import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

export default async function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesCTA />
    </main>
  );
}

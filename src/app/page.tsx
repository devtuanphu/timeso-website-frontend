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

export default async function Home() {
  return (
    <main>
      <Hero />
      <HeroVideo />
      <TrustedBy />
      <WhyChoose />
      <AllInOne />
      <AISectionRefined />
      <CyanBanner />
      <TargetAudience />
      <UserStories />
      <Comparison />
      <Pricing />
      <NewsAndBlog />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}

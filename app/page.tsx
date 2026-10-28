import { EditorialPathways } from "@/components/sections/editorial-pathways";
import { FeaturedArticles } from "@/components/sections/featured-articles";
import { FeaturedStories } from "@/components/sections/featured-stories";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";
import { SelfCareQuiz } from "@/components/sections/self-care-quiz";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <EditorialPathways />
      <FeaturedStories />
      <SelfCareQuiz />
      <Newsletter />
    </>
  );
}

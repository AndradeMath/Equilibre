import { Approach } from "@/components/sections/approach";
import { Benefits } from "@/components/sections/benefits";
import { CallToAction } from "@/components/sections/call-to-action";
import { Hero } from "@/components/sections/hero";
import { Ritual } from "@/components/sections/ritual";
import { Testimonials } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <Benefits />
      <Ritual />
      <Testimonials />
      <CallToAction />
    </>
  );
}

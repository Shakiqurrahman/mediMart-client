import FeaturedProducts from "@/components/modules/home/featuredProducts/FeaturedProducts";
import Hero from "@/components/modules/home/hero/Hero";
import HeroFooter from "@/components/modules/home/hero/HeroFooter";
import MedicalBanner from "@/components/modules/home/medicalBanner/MedicalBanner";
import Testimonials from "@/components/modules/home/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroFooter />
      <FeaturedProducts />
      <MedicalBanner />
      <Testimonials />
    </div>
  );
}

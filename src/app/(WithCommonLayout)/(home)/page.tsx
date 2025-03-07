import Hero from "@/components/modules/home/hero/Hero";
import HeroFooter from "@/components/modules/home/hero/HeroFooter";
import MedicalBanner from "@/components/modules/home/medicalBanner/MedicalBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroFooter />
      <MedicalBanner />
    </div>
  );
}

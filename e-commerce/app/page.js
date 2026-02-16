import Header from "@/components/modules/Header/Header";
import SunGlasses from "@/components/templates/Home/SunGlasses";
import HeroSection from "@/components/templates/Home/HeroSection";
import PrescriptionGlasses from "@/components/templates/Home/PrescriptionGlasses";
import HelpSection from "@/components/templates/Home/HelpSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-350!">
        <HeroSection />
        <SunGlasses />
        <PrescriptionGlasses />
        <HelpSection />
      </div>
    </>
  );
}

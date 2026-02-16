import Header from "@/components/modules/Header/Header";
import SunGlasses from "@/components/templates/Home/SunGlasses";
import HeroSection from "@/components/templates/Home/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-350!">
        <HeroSection />
        <SunGlasses />
      </div>
    </>
  );
}

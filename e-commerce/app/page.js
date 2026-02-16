import Header from "@/components/modules/Header/Header";
import HeroSection from "@/components/templates/Home/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-350!">
        <HeroSection />
      </div>
    </>
  );
}

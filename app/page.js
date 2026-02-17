import Header from "@/components/modules/Header/Header";
import SunGlasses from "@/components/templates/Home/SunGlasses";
import HeroSection from "@/components/templates/Home/HeroSection";
import PrescriptionGlasses from "@/components/templates/Home/PrescriptionGlasses";
import HelpSection from "@/components/templates/Home/HelpSection";
import Footer from "@/components/modules/Footer/Footer";

export const metadata = {
  title: "عینک رهام | فروشگاه تخصصی عینک",
  description:
    "خرید انواع عینک آفتابی و طبی با بهترین کیفیت و طراحی مدرن. دید بهتر و استایلی جذاب را با عینک رهام تجربه کنید.",
  keywords: ["عینک", "عینک آفتابی", "عینک طبی", "فروشگاه عینک", "اپتیک"],
  icons: {
    icon: "public/Images/photo_2026-02-14_01-04-33.jpg",
  },
  openGraph: {
    title: "عینک رهام | فروشگاه تخصصی عینک",
    description:
      "مجموعه‌ای از بهترین عینک‌های آفتابی و طبی با قیمت مناسب و کیفیت بالا.",
    url: "https://yourdomain.com",
    siteName: "عینک فروشی رهام",
    images: [
      {
        url: "public/Images/photo_2026-02-14_01-04-33.jpg",
        width: 1200,
        height: 630,
        alt: "عینک فروشی رهام",
      },
    ],
    type: "website",
  },
};

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
      <Footer />
    </>
  );
}

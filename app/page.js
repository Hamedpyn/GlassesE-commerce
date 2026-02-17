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
  keywords: [
    "عینک",
    "عینک آفتابی",
    "عینک طبی",
    "فروشگاه عینک",
    "اپتیک",
    "عینک مدرن",
    "عینک ایرانی"
  ],
  icons: {
    icon: "/Images/photo_2026-02-14_01-04-33.jpg", // مسیر از public
  },
  openGraph: {
    title: "عینک رهام | فروشگاه تخصصی عینک",
    description:
      "مجموعه‌ای از بهترین عینک‌های آفتابی و طبی با قیمت مناسب و کیفیت بالا. خرید آسان و ارسال سریع.",
    url: "https://glasses-e-commerce-five.vercel.app",
    siteName: "عینک رهام",
    images: [
      {
        url: "/Images/photo_2026-02-14_01-04-33.jpg",
        width: 1200,
        height: 630,
        alt: "عینک رهام | فروشگاه تخصصی عینک",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "عینک رهام | فروشگاه تخصصی عینک",
    description:
      "خرید انواع عینک آفتابی و طبی با بهترین کیفیت و طراحی مدرن. دید بهتر و استایلی جذاب را با عینک رهام تجربه کنید.",
    images: ["/Images/photo_2026-02-14_01-04-33.jpg"],
    site: "@YourTwitterHandle", // اگر داری، می‌تونی قرار بدی
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

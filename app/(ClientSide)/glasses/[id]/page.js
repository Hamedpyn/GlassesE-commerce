import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import GlassesDetails from "@/components/templates/Glasses/GlassesDetails";
import SuggestedGlasses from "@/components/templates/Glasses/SuggestedGlasses";

export const metadata = {
  title: "خرید عینک خاص | قیمت روز + ارسال فوری | عینک رهام",

  description:
    "خرید عینک خاص با طراحی مدرن و کیفیت فوق‌العاده. مشاهده قیمت به‌روز، مشخصات کامل و ارسال سریع به سراسر کشور. همین حالا از فروشگاه عینک رهام سفارش دهید.",

  keywords: [
    "خرید عینک خاص",
    "قیمت عینک خاص",
    "عینک مدرن",
    "عینک ترند",
    "عینک طبی و آفتابی",
    "فروشگاه عینک",
    "عینک رهام"
  ],

  icons: {
    icon: "/Images/photo_2026-02-14_01-04-33.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "خرید عینک خاص | بهترین قیمت | عینک رهام",
    description:
      "اگر دنبال یک عینک خاص و متفاوت هستید، این مدل بهترین انتخاب شماست. کیفیت عالی، طراحی مدرن و ارسال سریع.",
    url: "https://yourdomain.com/products/special-glasses",
    siteName: "عینک رهام",
    images: [
      {
        url: "/Images/photo_2026-02-14_01-04-33.jpg",
        width: 1200,
        height: 630,
        alt: "خرید عینک خاص از فروشگاه عینک رهام",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "خرید عینک خاص | عینک رهام",
    description:
      "مشاهده قیمت و خرید عینک خاص با طراحی مدرن و کیفیت بالا.",
    images: ["/Images/photo_2026-02-14_01-04-33.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com/products/special-glasses",
  },

  category: "ecommerce",
};

export default function Home() {
  return (
    <>
      <Header />
      <BreadCrumb conditionalTag={"عینک خاص"} title={"عینک آفتابی/طبی"} tag={"محصولات"} />
      <div className="w-full">
      <GlassesDetails />
      <SuggestedGlasses />
      </div>
      <Footer />
    </>
  );
}

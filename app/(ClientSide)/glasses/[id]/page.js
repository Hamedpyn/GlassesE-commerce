import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import GlassesDetails from "@/components/templates/Glasses/GlassesDetails";
import SuggestedGlasses from "@/components/templates/Glasses/SuggestedGlasses";


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

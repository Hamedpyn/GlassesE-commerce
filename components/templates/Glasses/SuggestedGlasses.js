import GlassesCard from "@/components/modules/Card/Card";
import SectionsTitle from "../Home/SectionsTitle";

export default function SuggestedGlasses() {
    return (
        <div className='px-2 w-full flex justify-center'>
            <div className="max-w-350 w-full">

                <SectionsTitle
                    title={"سایر محصولات"}
                    path={'/glasses/'}
                    buttonText={"محصولات"}
                    alert={"bg-brand"}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/Images/test.webp"} />
                    <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/Images/test.webp"} />
                    <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/Images/test.webp"} />
                    <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/Images/test.webp"} />
                </div>
            </div>
        </div>
    )
}

import GlassesCard from '@/components/modules/Card/Card'
import SectionsTitle from './SectionsTitle'

export default function SunGlasses() {
    return (
        <div className='px-2'>

            <SectionsTitle
                title={"همراه همیشگی روزهای آفتابی"}
                path={'/glasses/'}
                text={'انتخابی هوشمندانه برای استایل شما'}
                buttonText={"محصولات"}
                alert={"bg-brand"}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/images/test.webp"} />
                <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/images/test.webp"} />
                <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/images/test.webp"} />
                <GlassesCard title={"عینک آفتابی SUNCRUISER"} src={"/images/test.webp"} />
            </div>
        </div>

    )
}

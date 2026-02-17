import GlassesCard from '@/components/modules/Card/Card'
import SectionsTitle from './SectionsTitle'

export default function PrescriptionGlasses() {
    return (
        <div className='px-2'>

            <SectionsTitle
                title={"نگاهت را زیبا قاب بگیر"}
                path={'/glasses/'}
                text={'دیدی شفاف، استایلی ماندگار'}
                buttonText={"محصولات"}
                alert={"bg-brand"}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <GlassesCard title={"عینک طبی برند خاص"} src={"/Images/test2.jpg"} />
                <GlassesCard title={"عینک طبی برند خاص"} src={"/Images/test2.jpg"} />
                <GlassesCard title={"عینک طبی برند خاص"} src={"/Images/test2.jpg"} />
                <GlassesCard title={"عینک طبی برند خاص"} src={"/Images/test2.jpg"} />
            </div>
        </div>

    )
}

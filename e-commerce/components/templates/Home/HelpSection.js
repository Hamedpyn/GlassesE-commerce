import SectionsTitle from './SectionsTitle';
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import HelpCard from './HelpCard';
import { LiaGlassesSolid } from "react-icons/lia";
import { LuPackageCheck } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";
export default function HelpSection() {
    // Data for the help cards
    const helpCards = [{
        icon: MdVerifiedUser,
        bgColor: "bg-[#F0FDF4] dark:bg-[#244940]",
        iconColor: "text-[#22C55E]",
        title: "ضمانت اصالت و کیفیت کالا",
        description: "بزار خیالت رو راحت کنم تمام محصولات رهام به‌صورت اورجینال و از نمایندگی‌های معتبر تامین می‌شوند.",
    },
    {
        icon: HiOutlineChatBubbleLeftRight,
        // bgColor: "bg-[#FFFBEB] dark:bg-[#4F4834]",
        bgColor: "bg-[#F0F9FF] dark:bg-[#1D3C55]",
        iconColor: "text-brand",
        title: "مشاوره تخصصی و پشتیبانی",
        description:
            "تیم کارشناسان رهام برای راهنمایی در انتخاب فریم مناسب و خواندن نسخه چشم در کنار شما هستند.",
    },
    {
        icon: LiaGlassesSolid,
        bgColor: "bg-[#FEF2F2] dark:bg-[#4D303B]",
        iconColor: "text-[#ef4444]",
        title: "تنوع بالا در عینک و لنز",
        description:
            "رهام با ارائه مدل های مختلف عینک طبی، آفتابی و لنز از برندهای معتبر، پاسخگوی همه سلیقه‌هاست.",
    },
    // ef4444
    {
        icon: LuPackageCheck,
        bgColor: "bg-[#FFFBEB] dark:bg-[#4F4834]",
        iconColor: "text-[#FBBF24]",
        title: "ارسال سریع و مطمئن",
        description:"تمام محصولات قبل از ارسال بررسی و در بسته‌بندی‌های ایمن در اسرع وقت به شما تحویل داده می شوند.",
    },
    ];
    return (
        <div className="slide px-2">
            <SectionsTitle
                title={"چطور می‌تونیم کمکت کنیم؟"}
                text={"از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"}
                alert={"bg-brand"}
            />
            <div className="flex justify-center">
                <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center lg:px-0">
                    {helpCards.map((card, index) => (
                        <HelpCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
}
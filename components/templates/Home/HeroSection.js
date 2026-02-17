import Image from "next/image";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";

function HeroSection() {
    return (
        <section className="mt-10! px-2" aria-label="hero section">
            <div className="flex justify-between flex-col-reverse gap-5 lg:flex-row items-center bg-foreground m-4 p-3 sm:p-7 sm:m-10 lg:p-14 rounded-3xl ">
                {/* Content Section */}
                <div className="basis-1/2 flex flex-col items-center lg:items-start gap-5">
                    <div className="flex flex-col gap-4 sm:gap-10 items-center lg:items-start">
                        {/* Heading */}
                        <h1 className="text-center lg:text-start font-heading leading-10 text-2xl sm:text-[2.2rem]/[70px] md:text-[2.4rem]/[70px] xl:text-[2.625rem]/[70px] 3xl:text-5xl text-theme">
                            با عینک ما، دنیا رو زیباتر ببین
                        </h1>

                        {/* Subtitle */}
                        <p className="text-center lg:text-start sm:text-2xl lg:max-w-110 xl:max-w-117.5 text-menu">
                            مجموعه ای از جدیدترین و شیک‌ترین عینک‌های آفتابی و طبی با بهترین کیفیت و قیمت مناسب
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-6">
                            <Link
                                href="/glasses"
                                className="bg-brand transition-colors hover:bg-hover dana-regular py-3 px-5 rounded-full text-lg text-white"
                                aria-label="مشاهده محصولات"
                            >
                                مشاهده محصولات
                            </Link>
                            <div className="flex items-center gap-3">
                                <span
                                    className="bg-hover h-13 w-13 rounded-full hover:bg-brand transition-all flex items-center justify-center "
                                    aria-label="معرفی فروشگاه"
                                >
                                    <CiPlay1 className="w-6 h-6 text-white" />
                                </span>
                                <span className="dana-medium text-menu">معرفی فروشگاه</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Responsive Image Section */}
                <div className="h-full">
                    <Image
                        className="lg:h-95 object-cover rounded-3xl"
                        // className="lg:w-145 lg:h-95 object-cover xl:w-auto rounded-3xl"
                        src="/Images/photo_2026-02-14_01-04-33.jpg"
                        alt="مدل عینک آفتابی شیک"
                        width={580}
                        height={380}
                        priority
                        sizes="(max-width: 768px) 100vw, 580px"
                        quality={85} // Adjust quality as needed (default is 75)
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
import { RiShoppingCartLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function GlassesCard({ src, title }) {

    return (
        <div className="relative flex items-center flex-col mb-10!">
            <Link href={`/glasses/name`}
                className={`bg-foreground rounded-3xl w-10/12 sm:w-1/2 md:w-[300px] group flex items-center flex-col`}
            >
                <div>
                    <Image
                        className={`h-[300px] object-cover w-67.5 rounded-3xl bg-cover lg:w-87.5`}
                        src={src}
                        alt="مدل عینک شیک"
                        width={580}
                        height={380}
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 580px"
                    />

                </div>
                <div className="w-[80%] gap-3 h-auto pb-10 sm:pb-13">
                    <div className="pt-4 flex items-end flex-wrap justify-between">
                        <h3 className="cursor-pointer text-xl sm:text-2xl text-theme font-title group-hover:text-brand transition-all ease-linear">
                            {title}
                        </h3>
                        <span className="flex gap-1 opacity-90 text-color group-hover:opacity-100 transition-all ease-linear">
                            ۳,۰۰۰,۰۰۰ <span>تومان</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mt-4! justify-center">
                        <span title="مشکی" className="w-3 h-3 rounded-full bg-black outline outline-offset-4 outline-black hover:scale-120 transition-all"></span>
                        <span title="طلایی" className="w-3 h-3 rounded-full bg-yellow-400 outline outline-offset-4 outline-yellow-400 hover:scale-120 transition-all"></span>
                        <span title="صورتی" className="w-3 h-3 rounded-full bg-pink-500 outline outline-offset-4 outline-pink-500 hover:scale-120 transition-all"></span>
                        <span title="سبز" className="w-3 h-3 rounded-full bg-green-500 outline outline-offset-4 outline-green-500 hover:scale-120 transition-all"></span>
                        <span title="نقره‌ای" className="w-3 h-3 rounded-full bg-gray-300 outline outline-offset-4 outline-gray-300 hover:scale-120 transition-all"></span>
                    </div>
                </div>
            </Link>


            <button
                className="bg-brand cursor-pointer absolute -bottom-8.75 sm:-bottom-6.25 px-4 sm:px-10 flex py-3 text-lg justify-center gap-2 rounded-full text-white transition-all items-center hover:bg-black"
            >
                <RiShoppingCartLine className="w-6 h-6" />
                <span className="font-thin text-xl">خرید</span>
            </button>
        </div>
    );
}

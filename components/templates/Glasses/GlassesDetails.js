import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { RiShoppingCartLine } from 'react-icons/ri';

export default function GlassesDetails() {
    return (
        <div className="flex w-full px-5 flex-col items-center justify-center mt-20 lg:flex-row relative bg-foreground py-20 lg:gap-20 gap-5 lg:items-start navbar-logo">
            <div className="max-w-350! relative flex w-full flex-col items-center justify-center gap-5 lg:gap-20 lg:flex-row lg:items-start">
                <div className={`rounded-xl overflow-hidden max-w-[600px] lg:sticky top-12`}>
                    <Image height={400} width={400} src={"/images/test.webp"} className="h-100 rounded-2xl object-cover" quality={100} alt={"عینک آفتابی/طبی از برند خاص"} />

                </div>
                <div className="flex flex-col items-start mt-10">
                    <div className="flex flex-col items-start gap-5 border-menu/30 border-b pb-5">
                        <h1 className='font-title text-4xl text-menu'>عینک آفتابی برند خاص</h1>
                        <h3 className='text-brand text-2xl'>4,000,000 تومان</h3>
                        <p className='light text-[16px] w-11/12 mb-14 text-menu/70 max-w-[600px]'>
                            با عینک برند خاص، دنیا را با وضوح بیشتری ببینید و استایل خود را متحول کنید. این فریم با طراحی مینیمال و الهام گرفته از آخرین ترندهای روز، انتخابی ایده‌آل برای آقایان و بانوانی است که به جزئیات اهمیت می‌دهند. چه در محیط کار باشید و چه در مهمانی، این عینک می‌تواند همراه همیشگی شما باشد.
                        </p>

                        <button
                            className={`bg-brand sm:px-7 flex px-10 py-3 sm:py-2 text-lg justify-center gap-2 rounded-full text-white hover:bg-black transition-all items-center`}
                        >
                            <RiShoppingCartLine className="w-6 h-6" />
                            <span className="font-thin text-xl">خرید</span>
                        </button>
                    </div>
                    <div className="flex flex-row items-center gap-10 border-b border-menu/30 w-full py-5">
                        <div className="flex flex-col items-start gap-2">
                            <span className='text-sm'>برند</span>
                            <span className='text-sm'>کد محصول</span>
                            <span className='text-sm'>وضعیت</span>
                            <span className='text-sm'>دسته بندی</span>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <span className='text-sm light'>اکسترا</span>
                            <span className='text-sm light'>0001</span>
                            <span className='text-sm light'>موجود</span>
                            <span className='text-sm light'>عینک آفتابی</span>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl text-[#22c55e]' />
                            <span className='light'>ارسال رایگان برای سفارش های بالای 4 میلیون تومان</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl text-[#22c55e]' />
                            <span className='light'>ضمانت اصالت کالا</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <CiCircleCheck className='text-xl text-[#22c55e]' />
                            <span className='light'> محصول دارای مالیات و عوارض گمرکی نیست</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

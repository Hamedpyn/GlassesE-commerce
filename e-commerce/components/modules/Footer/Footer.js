import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { BsTelephonePlus } from "react-icons/bs";
import { PiCopyright } from "react-icons/pi";
const Footer = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-24! sm:mt-40! bg-foreground">
      <div className="w-full gap-2 flex-wrap flex-col sm:flex-row max-w-350 p-10 flex justify-between">
        <div>
          <div className="flex flex-col items-start gap-4">
            <Image height={100} width={100} className="rounded" src="/images/photo_2026-02-14_01-04-33.jpg" alt="logo" />
            <h4 className="text-menu">فروشگاه اینترنتی عینک رهام</h4>
          </div>
          <div className="pt-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-2xl" />
              <span className="font-thin text-xl">بوشهر - چهارراه وليعصر - ابتداي نواب صفوي جنوبی</span>
            </div>
            <div className="flex items-center gap-2">
              <SlBasket className="text-2xl" />
              <span className="font-thin text-xl">پیگیری سفارشات: 07733351197</span>
            </div>
            <div className="flex items-center gap-2">
              <BsTelephonePlus className="text-2xl" />
              <span className="font-thin text-xl">پشتیبانی تلفنی: 09177723279</span>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div>
            <h5 className="font-title text-2xl text-menu pb-2">دسترسی سریع</h5>
          </div>
          <div>
            <ul>
              <li >فروشگاه</li>
              <li >علاقه مندی ها</li>
            </ul>
          </div>
        </div>
        <div className="pt-5">
          <div>
            <h5 className="font-title text-2xl text-menu pb-2">لینک های مفید</h5>
          </div>
          <div>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>قوانین و مقررات</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start pt-5">
          <Image height={100} width={100} className="rounded" src="/images/license1.png" alt="اینماد" />
          <Image height={80} width={80} className="rounded" src="/images/license2.svg" alt="اینماد" />

        </div>
      </div>
      <div className="border-t justify-center border-menu/30 py-3 w-full max-w-350 flex items-center gap-1 flex-wrap">
        <PiCopyright />
        <span className="text-center">
        کدنویسی شده با ❤️ توسط{" "}
          <a href="https://t.me/hamedpyn" title="Front-End" target="_blank" rel="noopener noreferrer" className="underline transition-all text-brand">hamedpyn</a>{" "}
          و{" "}
          <a href="https://t.me/devue4" title="Back-End" target="_blank" rel="noopener noreferrer" className="underline transition-all text-brand">Najji</a>
        </span>
      </div>
      
    </section>
  );
};

export default Footer;

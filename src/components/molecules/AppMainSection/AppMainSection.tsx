import { IoIosArrowDown } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa6";
import { IoLogoPwa } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

export default function AppMainSection(): JSX.Element {
  return (
    <main className="flex flex-col sm:flex-row gap-36 items-center px-2 my-36">
      <section className="flex flex-col gap-5">
        <p className="text-xs text-black font-normal">جستجو در میان هزاران آگهی</p>
        <h1 className="text-2xl text-black font-bold">دریافت برنامهٔ دیوار</h1>
        <p className="text-gray font-normal text-sm">
          برنامه را در گوشی خود نصب کنید، کالای موردنظرتان را پیدا کنید یا آگهی
          <br /> رایگان ثبت کنید.
        </p>
        <div className="flex items-center gap-2">
          <FaAndroid className="text-gray w-6 h-6" />
          <a href="#">
            <img
              src="/img/svg/bazar-download.svg"
              alt="bazar-download-link"
              className="w-36 h-10 object-cover border-r border-zinc-300 pr-2"
            />
          </a>
          <a href="#">
            <img
              src="/img/svg/android-download.svg"
              alt="android-download-link"
              className="w-36 h-10 bg-cover"
            />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <IoLogoPwa className="text-gray w-6 h-6" />
          <a href="#">
            <img
              src="/img/svg/pwa-download.svg"
              alt="pwa-download-link"
              className="w-36 h-10 object-cover border-r border-zinc-300 pr-2"
            />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm-300 font-medium text-gray hover:text-black transition-all duration-300"
          >
            <FaQuestionCircle />
            راهنمای وب‌اپلیکیشن
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaApple className="text-gray w-6 h-6" />
          <a href="#">
            <img
              src="/img/svg/sib-app-ios-download.svg"
              alt="sib-app-download-link"
              className="w-36 h-10 object-cover border-r border-zinc-300 pr-2"
            />
          </a>
        </div>
        <p className="text-sm-300 font-normal">
          ۵۰هزارتومن تخفیف حق عضویت، برای تمام بسته‌ها. فقط مخصوص کاربران دیوار.‌
          <br /> بدون نیاز به کد تخفیف
        </p>
        <a
          href="#"
          className="flex gap-1 items-center justify-center text-sm-300 font-medium text-gray hover:text-black transition-all duration-300"
        >
          <IoIosArrowDown />
          مشاهده موارد بیشتر
        </a>
      </section>
      <img
        src="/img/svg/app-page-gif-device.svg"
        alt="app-device-gif"
        className="w-40 h-80 object-cover scale-150 drop-shadow-2xl"
      />
    </main>
  );
}
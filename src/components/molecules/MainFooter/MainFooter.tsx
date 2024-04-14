import { Link } from "react-router-dom";
import DivarLogo from "../../atoms/DivarLogo/DivarLogo";
import FooterSocials from "../FooterSocials/FooterSocials";
import { memo } from "react";

// * the main footer component which we will use alot fot footer of pages in this project
const MainFooter = memo(() => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between px-4 w-full gap-4 mb-2">
      <div className="flex items-center sm:gap-6 gap-2 flex-col sm:flex-row">
        <DivarLogo width="w-8" height="h-8" />
        <ul className="flex gap-1 items-center justify-center">
          <Link
            to="/about"
            className="text-gray px-1 text-sm-200 font-medium transition-all duration-300 border-r border-zinc-300 hover:text-black"
          >
            درباره دیوار
          </Link>
          <Link
            to="/support"
            className="text-gray px-1 text-sm-200 font-medium transition-all duration-300 border-r border-zinc-300 hover:text-black"
          >
            پشتیبانی و قوانین
          </Link>
          <a
            href="#"
            className="text-gray px-1 text-sm-200 font-medium transition-all duration-300 border-r border-zinc-300 hover:text-black"
          >
            اتاق خبر
          </a>
          <Link
            to="/app"
            className="text-gray px-1 text-sm-200 font-medium transition-all duration-300 border-r border-zinc-300 hover:text-black"
          >
            دریافت برنامه
          </Link>
          <Link
            to="/support"
            className="text-gray px-1 text-sm-200 font-medium transition-all duration-300 border-r border-zinc-300 hover:text-black"
          >
            تماس با پشتیبانی
          </Link>
        </ul>
      </div>
      <div className="flex flex-row-reverse gap-4">
        <FooterSocials />
      </div>
    </section>
  );
});

export default MainFooter;

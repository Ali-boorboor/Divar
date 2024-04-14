import FooterSocials from "../../molecules/FooterSocials/FooterSocials";
import { Link } from "react-router-dom";
import ProfileNavItems from "../../molecules/ProfileNavItems/ProfileNavItems";

export default function LeftSideBar() {
  return (
    <nav className="hidden mt-24 sticky top-24 right-12 sm:flex flex-col gap-5 max-w-60">
      <ProfileNavItems />
      <section className="flex flex-col gap-6">
        <ul className="grid grid-cols-2 gap-4 ">
          <Link
            to="/about"
            className="text-gray text-sm-200 font-medium transition-all duration-300 hover:text-black"
          >
            درباره دیوار
          </Link>
          <Link
            to="/support"
            className="text-gray text-sm-200 font-medium transition-all duration-300 hover:text-black"
          >
            پشتیبانی و قوانین
          </Link>
          <Link
            to="/app"
            className="text-gray text-sm-200 font-medium transition-all duration-300 hover:text-black"
          >
            دریافت برنامه
          </Link>
          <Link
            to="/support"
            className="text-gray text-sm-200 font-medium transition-all duration-300 hover:text-black"
          >
            تماس با پشتیبانی
          </Link>
        </ul>
        <div className="flex gap-6 justify-center flex-row-reverse">
          <FooterSocials />
        </div>
      </section>
    </nav>
  );
}

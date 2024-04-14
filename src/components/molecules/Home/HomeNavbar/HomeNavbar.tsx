import { Link } from "react-router-dom";

// * navbar ( m e n u ) component of Home page which is linked to other pages
export default function HomeNavbar(): JSX.Element {
  return (
    <ul className="flex py-4 gap-2 justify-around items-center border-b border-b-zinc-300 w-full">
      <Link
        to="/product"
        className="text-sm-200 font-medium transition-all duration-300 text-gray hover:text-black"
      >
        ثبت آگهی
      </Link>
      <Link
        to="/about"
        className="text-sm-200 font-medium transition-all duration-300 text-gray hover:text-black"
      >
        درباره دیوار
      </Link>
      <Link
        to="/app"
        className="text-sm-200 font-medium transition-all duration-300 text-gray hover:text-black"
      >
        دریافت برنامه
      </Link>
      <a
        href="#"
        className="text-sm-200 font-medium transition-all duration-300 text-gray hover:text-black"
      >
        اتاق خبر
      </a>
      <Link
        to="/support"
        className="text-sm-200 font-medium transition-all duration-300 text-gray hover:text-black"
      >
        پشتیبانی
      </Link>
    </ul>
  );
}

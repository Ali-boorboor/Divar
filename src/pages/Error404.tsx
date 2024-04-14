import { Link } from "react-router-dom";
import MainMenuWithButton from "../components/molecules/MainMenuWithButton/MainMenuWithButton";
import MainFooter from "../components/molecules/MainFooter/MainFooter";

export default function Error404(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-between gap-4 h-screen">
      <MainMenuWithButton />
      <section className="flex flex-col items-center justify-center mt-12 gap-8 p-4">
        <img src="/img/png/404-img.png" alt="Error-404" className="object-cover w-44 h-60" />
        <h1 className="text-gray text-2xl font-bold">این راه به جایی نمی‌رسد!</h1>
        <p className="text-gray text-sm font-medium">به نظر آدرس را اشتباه وارد کرده‌اید.</p>
        <p className="flex flex-wrap gap-1 text-gray text-sm font-medium">
          برای پیدا کردن مسیر درست می‌توانید سری به
          <Link to="/" className="text-red-700">
            صفحهٔ اول دیوار
          </Link>
          بزنید.
        </p>
      </section>
      <MainFooter />
    </section>
  );
}
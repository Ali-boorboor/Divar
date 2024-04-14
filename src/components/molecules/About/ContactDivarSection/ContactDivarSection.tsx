import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ContactDivarSection(): JSX.Element {
  return (
    <section className="flex flex-col gap-4 justify-center items-center p-4">
      <h2 className="font-bold text-xl">ارتباط با دیوار</h2>
      <p className="font-medium text-sm-300 text-gray max-w-96 text-center">
        مشکلات دیوار، انتقاد و پیشنهاد خود را با پشتیبانی دیوار در میان بگذارید. همچنین در صورت
        ایجاد مزاحمت برای شما، اطلاعات تماس پلیس فتای محل سکونت خود را از سایت پلیس فتا دریافت و
        موضوع را از آن راه پیگیری کنید.
      </p>
      <div className="flex flex-col justify-center items-start w-full">
        <Link
          to="/support"
          className="flex items-center justify-between font-normal text-sm border-b border-zinc-300 w-full py-2"
        >
          ارتباط با پشتیبانی
          <IoIosArrowBack className="text-gray" />
        </Link>
        <a
          href="#"
          className="flex items-center justify-between font-normal text-sm border-b border-zinc-300 w-full py-2"
        >
          سایت پلیس فتا
          <IoIosArrowBack className="text-gray" />
        </a>
      </div>
    </section>
  );
}
import { CiUser } from "react-icons/ci";
import { PiShieldCheck } from "react-icons/pi";
import { LuScrollText } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { BsJournalText } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { FaStoreAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logoutGetApi } from "../../../utils/apiFunctions";
import { useRecoilValue } from "recoil";
import { userInfos } from "../../../utils/recoilStateManager";

export default function ProfileNavItems() {
  const userInfo = useRecoilValue(userInfos);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-sm-300 flex gap-1 justify-center flex-col text-gray hover:text-black transition-all duration-500">
        <div className="flex gap-2">
          <CiUser className="w-5 h-5" />
          <p className="">کاربر دیوار</p>
        </div>
        <span className="flex items-center text-gray text-sm-200 font-bold">
          تلفن: {`${userInfo.userPhone} 98+`}
        </span>
      </h1>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500"
      >
        <PiShieldCheck className="w-5 h-5" />
        تأیید هویت
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-red-700 hover:text-black transition-all duration-500"
      >
        <LuScrollText className="w-5 h-5" />
        آگهی‌های من
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500"
      >
        <FaRegCreditCard className="w-5 h-5" />
        پرداخت‌های من
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500"
      >
        <CiBookmark className="w-5 h-5" />
        نشان‌ها
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500"
      >
        <BsJournalText className="w-5 h-5" />
        یادداشت‌ها
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500 border-zinc-300 border-b pb-5"
      >
        <FaRegClock className="w-5 h-5" />
        بازدیدهای اخیر
      </Link>
      <Link
        to="/profile"
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-black transition-all duration-500 border-zinc-300 border-b pb-5"
      >
        <FaStoreAlt className="w-5 h-5" />
        دیوار برای کسب‌وکارها
      </Link>
      <p
        className="text-sm-300 flex gap-2 items-center text-gray hover:text-red-700 transition-all duration-500 border-zinc-300 border-b pb-5 cursor-pointer"
        onClick={() => logoutGetApi(navigate)}
      >
        <IoExitOutline className="w-5 h-5" />
        خروج
      </p>
    </>
  );
}

import DivarLogo from "../../atoms/DivarLogo/DivarLogo";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useRecoilState, useRecoilValue } from "recoil";
import { isMyProfileAppear, userInfos } from "../../../utils/recoilStateManager";
import ProfileNavItems from "../ProfileNavItems/ProfileNavItems";

// * the main menu ( n a v b a r ) component which we will use a lot in this project
export default function MainMenu(props: any): JSX.Element {
  const [isProfile, setIsProfile] = useRecoilState(isMyProfileAppear);
  const userInfo = useRecoilValue(userInfos);

  return (
    <>
      <nav className="flex items-center justify-between gap-4 w-screen py-2 px-14 bg-white border-b border-zinc-300 fixed z-30">
        <Link to="/">
          <DivarLogo width="w-12" height="h-12" />
        </Link>
        {props.category}
        {props.search}
        <ul className="md:flex hidden flex-row-reverse text-sm-300 font-medium text-gray gap-6">
          {props.button}
          <Link to="/support" className="flex items-center gap-1 hover:text-black">
            پشتیبانی
          </Link>
          {props.chat}
          <Link
            to="/profile"
            className="flex whitespace-nowrap items-center gap-1 hover:text-black relative cursor-pointer"
            onMouseEnter={() => localStorage.getItem("token") && setIsProfile(!isProfile)}
          >
            <CiUser className="w-4 h-4" />
            دیوار من
            {isProfile && (
              <ul
                className="absolute top-10 left-1/2 -translate-x-1/2  hidden md:flex md:flex-col gap-4 bg-white drop-shadow-md text-center p-4 border border-zinc-300 rounded-md z-20"
                onMouseEnter={() => setIsProfile(true)}
                onMouseLeave={() => setIsProfile(false)}
              >
                <ProfileNavItems />
              </ul>
            )}
          </Link>
        </ul>
      </nav>
    </>
  );
}

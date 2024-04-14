import { IoCarSportOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuLamp } from "react-icons/lu";
import { LuPaintbrush2 } from "react-icons/lu";
import { GiWatch } from "react-icons/gi";
import { LuDices } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { PiOfficeChair } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const productsCategory: {
  id: number;
  title: string;
  icon: JSX.Element;
}[] = [
  { id: 1, title: "املاک", icon: <MdOutlineMapsHomeWork /> },
  { id: 2, title: "وسایل نقلیه", icon: <IoCarSportOutline /> },
  { id: 3, title: "کالای دیجیتال", icon: <IoPhonePortraitOutline /> },
  { id: 4, title: "خانه و آشپزخانه", icon: <LuLamp /> },
  { id: 5, title: "خدمات", icon: <LuPaintbrush2 /> },
  { id: 6, title: "وسایل شخصی", icon: <GiWatch /> },
  { id: 7, title: "سرگرمی و فراغت", icon: <LuDices /> },
  { id: 8, title: "اجتماعی", icon: <LuUsers /> },
  { id: 9, title: "تجهیزات و صنعتی", icon: <PiOfficeChair /> },
  { id: 10, title: "استخدام و کاریابی", icon: <PiBriefcaseLight /> },
];

export default productsCategory;

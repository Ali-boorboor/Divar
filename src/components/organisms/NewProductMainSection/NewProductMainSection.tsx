import { NewProductSetter, citiesGetApi } from "../../../utils/apiFunctions";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  citiesList,
  cityNewProductInput,
  descNewProductInput,
  newProductStatus,
  priceNewProductInput,
  searchCategoryInput,
  titleNewProductInput,
  userInfos,
} from "../../../utils/recoilStateManager";
import { useEffect } from "react";

export default function NewProductMainSection() {
  const [city, setCity] = useRecoilState(cityNewProductInput);
  const [desc, setDesc] = useRecoilState(descNewProductInput);
  const [status, setStatus] = useRecoilState(newProductStatus);
  const [price, setPrice] = useRecoilState(priceNewProductInput);
  const [title, setTitle] = useRecoilState(titleNewProductInput);
  const category = useRecoilValue(searchCategoryInput);
  const [cityState, setCityState] = useRecoilState(citiesList);
  const userInfo = useRecoilValue(userInfos);
  const navigate = useNavigate();

  useEffect(() => {
    cityState.length === 0 && citiesGetApi(setCityState);
  }, []);

  const submitProductHandler = (
    title: any,
    price: any,
    desc: any,
    userID: any,
    city: any,
    cityState: any,
    status: any
  ) => {
    NewProductSetter(title, price, desc, category, userID, city, cityState, status);
    setCity("");
    setPrice("");
    setTitle("");
    setDesc("");
    setStatus("نو");
  };

  return (
    <main className="flex flex-col max-w-container-size gap-4">
      <p className="text-base font-bold">شهر</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full border border-zinc-300 p-2 rounded-md focus:border-red-800 transition-all duration-500 outline-none"
        placeholder="تهران"
      />
      <p className="text-base font-bold">موقعیت مکانی آگهی</p>
      <img src="/img/png/about-map-location.png" className="object-cover" />
      <p className="text-base font-bold">عکس آگهی</p>
      <p className="text-sm text-gray">
        با افزودن عکس‌های پیشنهادی کیفیت آگهی‌ و در نتیجهٔ آن بازدید را تا ۳ برابر افزایش دهید.
      </p>
      <label
        htmlFor="file-input"
        className="text-gray font-bold cursor-pointer border-4 py-8 flex items-center justify-center rounded-md border-dashed border-red-700"
      >
        انتخاب عکس
      </label>
      <input type="file" id="file-input" hidden />
      <p className="text-base font-bold">مشخصات</p>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full border border-zinc-300 p-2 rounded-md focus:border-red-800 transition-all duration-500 outline-none"
        placeholder="جزئیات و نکات جالب توجه آگهی"
      ></textarea>
      <p className="text-base font-bold">وضعیت آگهی</p>
      <select
        className="w-full border border-zinc-300 p-2 rounded-md focus:border-red-800 transition-all duration-500 outline-none"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="نو">نو</option>
        <option value="کارکرده">کارکرده</option>
      </select>
      <p className="text-base font-bold">قیمت</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-zinc-300 p-2 rounded-md focus:border-red-800 transition-all duration-500 outline-none"
        placeholder="تومان"
      />
      <p className="text-base font-bold">عنوان آگهی</p>
      <p className="text-sm text-gray">
        توصیه می‌شود عنوان پیشنهادی زیر را تغییر ندهید و درصورت نیاز، موارد بیش‌تر را به انتهای آن
        اضافه کنید.
      </p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-zinc-300 p-2 rounded-md focus:border-red-800 transition-all duration-500 outline-none"
      />
      <div className="flex justify-end items-center gap-4">
        <button
          className="text-base p-2 w-24 rounded-md border border-black hover:bg-sky-100 transition-all duration-500"
          onClick={() => navigate("/product")}
        >
          انصراف
        </button>
        <button
          className="text-base p-2 w-24 rounded-md text-white bg-red-800 hover:bg-red-700 transition-all duration-500"
          onClick={() =>
            submitProductHandler(title, price, desc, userInfo.userID, city, cityState, status)
          }
        >
          ثبت آگهی
        </button>
      </div>
    </main>
  );
}

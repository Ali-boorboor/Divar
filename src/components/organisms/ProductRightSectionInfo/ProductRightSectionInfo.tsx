import { GoAlert } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { memo, useEffect } from "react";
import { oneProduct } from "../../../utils/recoilStateManager";
import { useRecoilState } from "recoil";
import { oneProductGetApi } from "../../../utils/apiFunctions";
import { useParams } from "react-router-dom";

const ProductRightSectionInfo = memo(() => {
  const params = useParams();
  const [productInfo, setProductInfo] = useRecoilState(oneProduct);

  const createdAtString = productInfo.created_at;
  const createdAtDate = new Date(createdAtString).toLocaleDateString("fa-IR");
  const updatedAtString = productInfo.updated_at;
  const updatedAtDate = new Date(updatedAtString).toLocaleDateString("fa-IR");

  useEffect(() => {
    oneProductGetApi(params.productID, setProductInfo);
  }, []);

  return (
    <section className="flex flex-col gap-4 sm:basis-1/2 basis-full">
      <h1 className="font-bold text-2xl">{productInfo.product_name}</h1>
      <p className="text-gray text-lg">{createdAtDate}</p>
      <p className="flex gap-4 items-center font-medium text-base justify-between cursor-pointer border-y border-zinc-300 py-2">
        <span className="flex items-center gap-4">
          <GoAlert className="text-gray w-6 h-6" />
          زنگ خطرهای قبل از معامله
        </span>
        <IoIosArrowBack className="w-4 h-4 text-gray" />
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="text-base p-2 md:w-28 rounded-md text-white bg-red-800 hover:bg-red-700 transition-all duration-500">
            اطلاعات تماس
          </button>
          <button className="text-base p-2 md:w-28 rounded-md border border-black hover:bg-sky-100 transition-all duration-500">
            چت
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <CiBookmark className="font-bold w-6 h-6 text-gray hover:text-black transition-all duration-500 cursor-pointer" />
          <IoShareSocialOutline className="font-bold w-6 h-6 text-gray hover:text-black transition-all duration-500 cursor-pointer" />
        </div>
      </div>
      {productInfo.product_status && (
        <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
          <p className="">وضعیت</p>
          <p className="">{productInfo.product_status}</p>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
        <p className="">آخرین به‌روزرسانی آگهی</p>
        <p className="">{updatedAtDate}</p>
      </div>
      <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
        <p className="">قیمت</p>
        <p className="flex items-center">{`${Number(
          productInfo.product_price
        ).toLocaleString()} تومان`}</p>
      </div>
      <h3 className="font-bold text-xl">توضیحات</h3>
      <p className="max-w-60">{productInfo.product_description}</p>
    </section>
  );
});

export default ProductRightSectionInfo;

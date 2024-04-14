import swal from "sweetalert";
import { Link } from "react-router-dom";
import { deleteUserProductApi, putUserProductApi } from "../../../utils/apiFunctions";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfos, userProducts } from "../../../utils/recoilStateManager";

export default function UserProducts({ product_name, created_at, product_price, product_id }: any) {
  const userInfo = useRecoilValue(userInfos);
  const [, setUserProducts] = useRecoilState(userProducts);

  const createdAtString = created_at;
  const createdAtDate = new Date(createdAtString).toLocaleDateString();

  document.title = "پروفایل کاربر";

  const deleteProductHandler = () => {
    swal({
      title: "آیا از حذف آگهی اطمینان دارید ؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((result) => result && deleteUserProductApi(product_id, setUserProducts, userInfo));
  };

  const editProductHandler = () => {
    swal({
      title: "عنوان جدید آگهی را وارد کنید",
      content: "input",
      buttons: ["نیازی نیست", "بعدی"],
    }).then((newTitle) => {
      swal({
        title: "مشخصات جدید آگهی را وارد کنید",
        content: "input",
        buttons: ["نیازی نیست", "بعدی"],
      }).then((newDesc) => {
        swal({
          title: "قیمت جدید آگهی را وارد کنید (تومان)",
          content: "input",
          buttons: ["نیازی نیست", "ثبت"],
        }).then((newPrice) => {
          putUserProductApi(product_id, newTitle, newDesc, newPrice, userInfo, setUserProducts);
        });
      });
    });
  };

  return (
    <div className="flex flex-col justify-between z-20 max-w-sm bg-white border border-zinc-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:border-red-700">
      <Link to={`/product/${product_id}`}>
        <img
          className="w-full h-60 object-cover rounded-t-lg"
          src="/img/product-house-img.webp"
          alt="product-cover"
        />
      </Link>
      <div className="p-5 flex justify-between flex-col gap-2">
        <Link to={`/product/${product_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{product_name}</h5>
        </Link>
        <div className="flex gap-2 items-center justify-between flex-wrap">
          <p className="mb-3 font-normal text-gray bg-green-200 p-1 rounded-md">{`${Number(
            product_price
          ).toLocaleString()} تومان`}</p>
          <p className="mb-3 font-normal text-gray">{createdAtDate}</p>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-700 to-rose-500 group-hover:from-red-700 group-hover:to-rose-500 hover:text-white focus:outline-none focus:ring-pink-200"
            onClick={() => deleteProductHandler()}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white rounded-md group-hover:bg-opacity-0">
              حذف آگهی
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
            onClick={() => editProductHandler()}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white rounded-md group-hover:bg-opacity-0">
              ویرایش آگهی
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

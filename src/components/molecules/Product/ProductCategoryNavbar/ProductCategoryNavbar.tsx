// * imported file ( v a r i a b l e s ) which perform the categories titles and icons !
import swal from "sweetalert";
import productsCategory from "../../../../utils/productsCategory";
import { useRecoilState } from "recoil";
import { allProducts, isCategoryHeaderNavbar } from "../../../../utils/recoilStateManager";
import { allProductsGetApi, productsByCategoryGetApi } from "../../../../utils/apiFunctions";
import { useNavigate } from "react-router-dom";

// * we will use imported variables in order to use map rendering on array to get icons and titles of categories !
export default function ProductCategoryNavbar(): JSX.Element {
  const [, setCategory] = useRecoilState(isCategoryHeaderNavbar);
  const [, setShownProducts] = useRecoilState(allProducts);
  const navigate = useNavigate();

  const setProductCategoryHandler = (setProductCategoryId: any) => {
    if (window.location.href === "http://localhost:5173/product") {
      productsByCategoryGetApi(setProductCategoryId, setShownProducts);
    }
    navigate("/product");
    setCategory(false);
    productsByCategoryGetApi(setProductCategoryId, setShownProducts);
  };

  const setAllProductsHandler = () => {
    setCategory(false);
    allProductsGetApi(setShownProducts);
    swal({
      title: "همه آگهی ها نمایش داده شد !",
      icon: "success",
      buttons: "اوکی",
    });
  };

  return (
    <nav className="flex flex-col gap-4">
      <p
        className="text-black text-sm-300 font-medium cursor-pointer"
        onClick={() => setAllProductsHandler()}
      >
        دسته‌ها
      </p>
      {productsCategory.map((productCategory) => (
        <span
          key={productCategory.id}
          className="flex items-center gap-1 text-gray text-sm font-medium hover:text-black transition-all duration-300 cursor-pointer"
          onClick={() => setProductCategoryHandler(productCategory.id)}
        >
          {productCategory.icon}
          {productCategory.title}
        </span>
      ))}
    </nav>
  );
}

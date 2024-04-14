import SearchCategory from "../components/molecules/NewProduct/SearchCategory/SearchCategory";
import NewProductMainSection from "../components/organisms/NewProductMainSection/NewProductMainSection";
import ProductHeader from "../components/organisms/Product/ProductHeader/ProductHeader";
import { useRecoilState } from "recoil";
import { isNewProductComponentAppear } from "../utils/recoilStateManager";
import { memo } from "react";

const NewProduct = memo(() => {
  const [isNewProductComponent, setIsNewProductComponent] = useRecoilState(
    isNewProductComponentAppear
  );

  return (
    <>
      <ProductHeader />
      <section className="flex flex-col gap-4 items-center p-4 mt-20">
        {!isNewProductComponent && <SearchCategory />}
        <button
          className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-md transition-all duration-500"
          onClick={() =>
            isNewProductComponent ? setIsNewProductComponent(false) : setIsNewProductComponent(true)
          }
        >
          {isNewProductComponent ? "تغییر دسته بندی" : "انتخاب دسته بندی"}
        </button>
        {isNewProductComponent && <NewProductMainSection />}
      </section>
    </>
  );
});

export default NewProduct;

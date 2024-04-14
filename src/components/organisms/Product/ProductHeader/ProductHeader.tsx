import MainMenuWithButton from "../../../molecules/MainMenuWithButton/MainMenuWithButton";
import ProductCategoryNavbar from "../../../molecules/Product/ProductCategoryNavbar/ProductCategoryNavbar";
import SearchInput from "../../../molecules/SearchInput/SearchInput";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { isCategoryHeaderNavbar } from "../../../../utils/recoilStateManager";

const ProductHeader = memo(() => {
  const [category, setCategory] = useRecoilState(isCategoryHeaderNavbar);

  return (
    <header className="flex flex-col items-center">
      <MainMenuWithButton
        search={
          <SearchInput
            placeholder="جستجو در همه آگهی ها (بر اساس عنوان آگهی)"
            style="sm:flex hidden basis-1/2"
            bg="bg-sky-50"
          />
        }
        category={
          <button
            type="button"
            className="whitespace-nowrap py-2 px-3 text-black font-bold text-sm bg-sky-100 transition-all duration-300 rounded-md hover:bg-sky-200"
            onClick={() => setCategory(!category)}
          >
            دسته ها
          </button>
        }
        link={"/newproduct"}
      />
      {category ? (
        <div className="flex z-30 items-center justify-between opacity-100 visible translate-y-0 transition-all duration-500 fixed top-12 mt-4 right-0 left-0 bg-white rounded-sm drop-shadow-lg p-12">
          <ProductCategoryNavbar />
          <img src="/img/png/drop-down-category.png" className="hidden sm:block w-80 h-80" />
        </div>
      ) : (
        <div className="flex z-30 items-center justify-between opacity-0 invisible translate-y-4 transition-all duration-500 fixed top-12 mt-4 right-0 left-0 bg-white rounded-sm drop-shadow-lg p-12">
          <ProductCategoryNavbar />
          <img
            src="/img/png/drop-down-category.png"
            className="hidden sm:block w-80 h-80 object-cover"
          />
        </div>
      )}
    </header>
  );
});

export default ProductHeader;

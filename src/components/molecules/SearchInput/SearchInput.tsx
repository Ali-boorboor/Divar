import { IoIosSearch } from "react-icons/io";
import { useRecoilState } from "recoil";
import {
  allProducts,
  globalSearchInput,
  globalSearchProducts,
} from "../../../utils/recoilStateManager";
import { allProductsGetApi } from "../../../utils/apiFunctions";
import { useEffect } from "react";

// * input component which we will use in many parts of project and will get two properties ( p l a c e h o l d e r   &   b g )
export default function SearchInput(props: any): JSX.Element {
  const [searchInput, setSearchInput] = useRecoilState(globalSearchInput);
  const [, setShownProducts] = useRecoilState(allProducts);
  const [globalProducts, setGlobalProducts] = useRecoilState(globalSearchProducts);

  useEffect(() => {
    allProductsGetApi(setGlobalProducts);
  }, []);

  const handleSearchKeyDown = (e: any) => {
    if (e.code === "Enter") {
      handleFilteredProductsBySearch();
    }
  };

  const handleFilteredProductsBySearch = () => {
    if (searchInput.length !== 0) {
      setShownProducts(
        globalProducts.filter((product) => product.product_name.includes(searchInput))
      );
    }
  };

  return (
    <label
      className={`flex items-center px-2 border-2 drop-shadow-md border-zinc-300 ${props.style} ${props.bg} rounded-md transition-all duration-500 hover:border-red-700`}
    >
      <IoIosSearch
        className="w-6 h-6 bg-transparent text-gray cursor-pointer"
        onClick={() => handleFilteredProductsBySearch()}
      />
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => handleSearchKeyDown(e)}
        className="p-2 outline-none w-full h-full text-black placeholder:opacity-70 bg-inherit placeholder:text-gray text-sm"
        placeholder={props.placeholder}
      />
    </label>
  );
}

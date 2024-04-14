import swal from "sweetalert";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allProducts,
  isPriceFilterDropDown,
  priceMaxFilterInput,
  priceMinFilterInput,
} from "../../../utils/recoilStateManager";

export default function PriceFilter({ children }: any) {
  const [priceMinInput, setPriceMinInput] = useRecoilState(priceMinFilterInput);
  const [priceMaxInput, setPriceMaxInput] = useRecoilState(priceMaxFilterInput);
  const priceDropDown = useRecoilValue(isPriceFilterDropDown);
  const [shownProducts, setShownProducts] = useRecoilState(allProducts);

  const filterProductsByPriceHandler = () => {
    const filteredProductsByPrice = shownProducts.filter(
      (product) =>
        Number(priceMaxInput) >= Number(product.product_price) &&
        Number(product.product_price) >= Number(priceMinInput)
    );

    swal({
      title: "فیلتر با موفقیت اعمال شد",
      icon: "success",
      buttons: "بسیار خب",
    }).then(() => {
      setShownProducts(filteredProductsByPrice);
      setPriceMinInput("");
      setPriceMaxInput("");
    });
  };

  return (
    <ul className="flex flex-col gap-4 pt-4">
      {children}
      <div className={`${priceDropDown ? "block" : "hidden"} flex flex-col gap-4`}>
        <input
          type="number"
          value={priceMinInput}
          onChange={(e: any) => setPriceMinInput(e.target.value)}
          className="text-sm-300 font-medium border border-zinc-300 rounded-sm py-1 px-2 outline-none focus:border-red-700 drop-shadow-lg"
          placeholder="حداقل قیمت (تومان)"
        />
        <input
          type="number"
          value={priceMaxInput}
          onChange={(e: any) => setPriceMaxInput(e.target.value)}
          className="text-sm-300 font-medium border border-zinc-300 rounded-sm py-1 px-2 outline-none focus:border-red-700 drop-shadow-lg"
          placeholder="حداکثر قیمت (تومان)"
        />
        <button
          className="p-2 bg-red-800 border hover:bg-white hover:text-red-800 hover:border-red-800 text-white rounded-sm transition-all duration-300 drop-shadow-lg"
          onClick={() => filterProductsByPriceHandler()}
        >
          فیلتر
        </button>
      </div>
    </ul>
  );
}

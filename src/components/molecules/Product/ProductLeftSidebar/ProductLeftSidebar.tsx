import ProductCategoryNavbar from "../ProductCategoryNavbar/ProductCategoryNavbar";
import PriceFilter from "../../PriceFilter/PriceFilter";
import LocationFilter from "../../LocationFilter/LocationFilter";
import { IoIosArrowDown } from "react-icons/io";
import { useRecoilState } from "recoil";
import {
  isLocationFilterDropDown,
  isPriceFilterDropDown,
} from "../../../../utils/recoilStateManager";

export default function ProductLeftSidebar(): JSX.Element {
  const [priceDropDown, setPriceDropDown] = useRecoilState(isPriceFilterDropDown);
  const [locationDropDown, setLocationDropDown] = useRecoilState(isLocationFilterDropDown);

  return (
    <nav className="hidden sm:block fixed right-12">
      <ProductCategoryNavbar />
      <PriceFilter>
        <p
          className="w-48 flex items-center gap-1 text-black border-t border-zinc-300 pt-2 cursor-pointer"
          onClick={() => setPriceDropDown(!priceDropDown)}
        >
          <IoIosArrowDown
            className={`${priceDropDown && "rotate-180"} transition-all duration-300`}
          />
          قیمت
        </p>
      </PriceFilter>
      <LocationFilter>
        <p
          className="w-48 flex items-center gap-1 text-black border-t border-zinc-300 pt-2 cursor-pointer"
          onClick={() => setLocationDropDown(!locationDropDown)}
        >
          <IoIosArrowDown
            className={`${locationDropDown && "rotate-180"} transition-all duration-300`}
          />
          محل
        </p>
      </LocationFilter>
    </nav>
  );
}

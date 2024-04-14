import { useRecoilState, useRecoilValue } from "recoil";
import {
  allProducts,
  citiesList,
  isLocationFilterDropDown,
  locationFilterInput,
} from "../../../utils/recoilStateManager";
import { useEffect } from "react";
import { citiesGetApi, productsByCityGetApi } from "../../../utils/apiFunctions";

export default function LocationFilter({ children }: any) {
  const locationDropDown = useRecoilValue(isLocationFilterDropDown);
  const [locationInput, setLocationInput] = useRecoilState(locationFilterInput);
  const [cities, setCities] = useRecoilState(citiesList);
  const [, setShownProducts] = useRecoilState(allProducts);

  useEffect(() => {
    cities.length === 0 && citiesGetApi(setCities);
  }, []);

  const searchFilterButtonClickHandler = () => {
    if (locationInput.trim().length !== 0) {
      const cityId = cities.find((city: any) => city.city_name === locationInput.trim());
      productsByCityGetApi(cityId.city_id, setShownProducts);
      setLocationInput("");
    }
  };

  return (
    <ul className="flex flex-col gap-4 pt-4">
      {children}
      <div className={`${locationDropDown ? "block" : "hidden"} flex flex-col gap-4`}>
        <input
          type="text"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
          className="text-sm-300 font-medium border border-zinc-300 rounded-sm py-1 px-2 outline-none focus:border-red-700 drop-shadow-lg"
          placeholder="تهران"
        />
        <button
          className="p-2 bg-red-800 border hover:bg-white hover:text-red-800 hover:border-red-800 text-white rounded-sm transition-all duration-300 drop-shadow-lg"
          onClick={() => searchFilterButtonClickHandler()}
        >
          فیلتر
        </button>
      </div>
    </ul>
  );
}

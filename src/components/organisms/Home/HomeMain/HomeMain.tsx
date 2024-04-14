// * imported components for Main section of Home page
import HomePageText from "../../../atoms/HomePageText/HomePageText";
import HomeCities from "../../../molecules/Home/HomeCities/HomeCities";
import { useEffect } from "react";
import { citiesGetApi, productsByCityGetApi } from "../../../../utils/apiFunctions";
import { useRecoilState } from "recoil";
import { allProducts, citiesList, searchCityInput } from "../../../../utils/recoilStateManager";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function HomeMain(): JSX.Element {
  const [cities, setCities] = useRecoilState(citiesList);
  const [searchInput, setSearchInput] = useRecoilState(searchCityInput);
  const [, setShownProducts] = useRecoilState(allProducts);
  const navigate = useNavigate();

  useEffect(() => {
    cities.length === 0 && citiesGetApi(setCities);
  }, []);

  const filteredProductsByInputCity = () => {
    const cityId = cities.find((city: any) => city.city_name === searchInput.trim());
    productsByCityGetApi(cityId.city_id, setShownProducts);
    navigate("/product");
    setSearchInput("");
  };

  const searchKeyDownHandler = (e: any) => {
    if (e.code === "Enter" && searchInput.trim().length !== 0) {
      filteredProductsByInputCity();
    }
  };

  const searchButtonClickedHandler = () => {
    searchInput.trim().length !== 0 && filteredProductsByInputCity();
  };

  return (
    <section className="flex flex-col gap-6">
      <HomePageText />
      <label className="flex items-center px-2 border-2 drop-shadow-md border-zinc-300 rounded-md transition-all duration-500 hover:border-red-700">
        <IoIosSearch
          className="w-6 h-6 bg-transparent text-gray cursor-pointer"
          onClick={() => searchButtonClickedHandler()}
        />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => searchKeyDownHandler(e)}
          className="p-2 outline-none w-full h-full text-black placeholder:opacity-70 bg-inherit placeholder:text-gray text-sm"
          placeholder="جستجوی شهر"
        />
      </label>
      <ul className="bg-white drop-shadow-md p-4 grid grid-cols-3 sm:grid-cols-5 gap-2 border border-zinc-300 rounded-md">
        {cities
          .filter((city) => city.city_name.includes(searchInput))
          .map((cityName) => (
            <li
              key={cityName.city_id}
              className="w-full cursor-pointer rounded-md hover:bg-red-700 hover:text-white text-center transition-all duration-300 p-1"
              onClick={() => setSearchInput(cityName.city_name)}
            >
              {cityName.city_name}
            </li>
          ))}
      </ul>
      <HomeCities />
    </section>
  );
}

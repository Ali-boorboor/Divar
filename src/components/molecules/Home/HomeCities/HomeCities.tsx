import { productsByCityGetApi } from "../../../../utils/apiFunctions";
import { useRecoilState, useRecoilValue } from "recoil";
import { allProducts, citiesList } from "../../../../utils/recoilStateManager";
import { useNavigate } from "react-router-dom";

// * city section of Home page that is located in main section of this page and will provide the list of cities
export default function HomeCities(): JSX.Element {
  const [, setShownProducts] = useRecoilState(allProducts);
  const cities = useRecoilValue(citiesList);
  const navigate = useNavigate();

  const cityClickHandler = (cityID: any) => {
    navigate("/product");
    productsByCityGetApi(cityID, setShownProducts);
  };

  return (
    <section className="flex flex-col gap-12 pb-8 border-b border-b-zinc-300">
      <h2 className="text-sm font-medium text-black">شهرهای پربازدید</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-16">
        {cities.slice(0, 10).map((city) => (
          <span
            key={city.city_id}
            className="text-gray text-xs font-medium hover:text-black transition-all duration-300 cursor-pointer"
            onClick={() => cityClickHandler(city.city_id)}
          >
            {city.city_name}
          </span>
        ))}
      </div>
    </section>
  );
}

import productsCategory from "../../../../utils/productsCategory";
import { searchCategoryInput } from "../../../../utils/recoilStateManager";
import { IoIosSearch } from "react-icons/io";
import { useRecoilState } from "recoil";

export default function SearchCategory(): JSX.Element {
  const [searchInput, setSearchInput] = useRecoilState(searchCategoryInput);

  return (
    <section className="">
      <h2 className="text-xl font-medium mb-4">دسته بندی آگهی</h2>
      <label className="flex items-center px-2 border-2 drop-shadow-md border-zinc-300 rounded-md transition-all duration-500 hover:border-red-700">
        <IoIosSearch className="w-6 h-6 bg-transparent text-gray" />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-2 outline-none w-full h-full text-black placeholder:opacity-70 bg-inherit placeholder:text-gray text-sm"
          placeholder="دسته بندی"
        />
      </label>
      <ul className="bg-white drop-shadow-md p-4 flex flex-col gap-2 border border-zinc-300 rounded-md">
        {productsCategory
          .filter((productCategory) => {
            return productCategory.title.includes(searchInput);
          })
          .map((productTitle) => (
            <li
              key={productTitle.id}
              className="w-full cursor-pointer rounded-md hover:bg-red-700 hover:text-white text-center transition-all duration-300 p-1"
              onClick={() => setSearchInput(productTitle.title)}
            >
              {productTitle.title}
            </li>
          ))}
      </ul>
    </section>
  );
}

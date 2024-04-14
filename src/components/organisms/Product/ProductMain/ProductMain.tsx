import { useRecoilValue } from "recoil";
import ProductCardBox from "../../../molecules/Product/ProductCardBox/ProductCardBox";
import { allProducts } from "../../../../utils/recoilStateManager";

export default function ProductMain(): JSX.Element {
  const shownProducts = useRecoilValue(allProducts);

  return (
    <>
      {shownProducts.length !== 0 ? (
        <main className="grid grid-cols-1 max-w-[26rem] lg:max-w-[50rem] xl:max-w-[70rem] w-full lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:mr-48 mb-4 p-2">
          {shownProducts.map((product) => (
            <span key={product.product_id}>
              <ProductCardBox {...product} />
            </span>
          ))}
        </main>
      ) : (
        <div className=" w-screen h-96 flex justify-center items-center p-2">
          <p className="bg-red-200 w-full sm:w-2/5 text-center p-2 text-2xl font-bold rounded-md drop-shadow-md border-zinc-400 border">
            آگهی برای این دسته بندی | شهر وجود ندارد😑
          </p>
        </div>
      )}
    </>
  );
}

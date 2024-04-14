import { memo } from "react";
import ProductLeftSidebar from "../components/molecules/Product/ProductLeftSidebar/ProductLeftSidebar";
import ProductHeader from "../components/organisms/Product/ProductHeader/ProductHeader";
import ProductMain from "../components/organisms/Product/ProductMain/ProductMain";

const Product = memo(() => {
  document.title = "دیوار | آگهی ها";

  return (
    <>
      <ProductHeader />
      <main className="mt-32">
        <ProductLeftSidebar />
        <ProductMain />
      </main>
    </>
  );
});

export default Product;

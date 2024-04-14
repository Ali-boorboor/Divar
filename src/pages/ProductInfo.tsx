import MainFooter from "../components/molecules/MainFooter/MainFooter";
import ProductHeader from "../components/organisms/Product/ProductHeader/ProductHeader";
import ProductLeftSectionInfo from "../components/organisms/ProductLeftSectionInfo/ProductLeftSectionInfo";
import ProductRightSectionInfo from "../components/organisms/ProductRightSectionInfo/ProductRightSectionInfo";
import { memo } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = memo(() => {
  const params = useParams();

  document.title = `دیوار | آگهی مد نظر (${params.productID})`;

  return (
    <>
      <ProductHeader />
      <section className="flex gap-24 items-center max-w-container-medium my-36 flex-wrap md:justify-between justify-center md:flex-nowrap p-4">
        <ProductRightSectionInfo />
        <ProductLeftSectionInfo />
      </section>
      <MainFooter />
    </>
  );
});

export default ProductInfo;

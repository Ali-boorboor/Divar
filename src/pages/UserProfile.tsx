import LeftSideBar from "../components/organisms/LeftSideBar/LeftSideBar";
import ProductHeader from "../components/organisms/Product/ProductHeader/ProductHeader";
import UserProducts from "../components/organisms/UserProducts/UserProducts";
import ErrorSectionEmpty from "../components/organisms/ErrorSectionEmpty/ErrorSectionEmpty";
import { memo, useEffect } from "react";
import { userProductsGetApi } from "../utils/apiFunctions";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfos, userProducts } from "../utils/recoilStateManager";

const UserProfile = memo(() => {
  const [userProduct, setUserProduct] = useRecoilState(userProducts);
  const userInfo = useRecoilValue(userInfos);

  useEffect(() => {
    userProductsGetApi(userInfo.userID, setUserProduct);
  }, []);

  return (
    <>
      <ProductHeader />
      <section className="flex">
        <LeftSideBar />
        <section className="mt-24 p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center max-w-96 lg:max-w-[50rem] xl:max-w-[66rem] w-screen sm:pr-24">
          {userProduct.length !== 0 ? (
            userProduct.map((product) => (
              <span key={product.product_id}>
                <UserProducts {...product} />
              </span>
            ))
          ) : (
            <ErrorSectionEmpty title="در حال حاضر آگهی ثبت‌شده ندارید." />
          )}
        </section>
      </section>
    </>
  );
});

export default UserProfile;

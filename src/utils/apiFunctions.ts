import productsCategory from "./productsCategory";
import swal from "sweetalert";
import { AxiosApp } from "../services/AxiosApp";

const NewProductSetter = (
  title: any,
  price: any,
  desc: any,
  category: any,
  userID: any,
  cityName: any,
  cityState: any,
  status: any
) => {
  const categoryId = productsCategory.find((productCategory) => productCategory.title === category);
  const cityId = cityState.find((city: any) => city.city_name === cityName);
  const token = localStorage.getItem("token");

  AxiosApp.post(
    "/product",
    {
      name: title,
      price,
      description: desc,
      category: categoryId?.id,
      userID,
      city: cityId?.city_id,
      status,
    },
    {
      headers: {
        token,
      },
    }
  ).then(() => {
    swal({
      title: "آگهی شما با موفقیت اضافه شد",
      icon: "success",
      buttons: "اوکی !",
    });
  });
};

const loginGetApi = (phone: any, password: any, navigate: any) => {
  AxiosApp.post("/login", {
    phone,
    password,
  })
    .then((res) => {
      const token = res.data.accessToken;
      localStorage.setItem("token", token);
      swal({
        title: "با موفقیت وارد شدید",
        icon: "success",
        buttons: "اوکی !",
      }).then(() => {
        navigate("/product");
      });
    })
    .catch(() => {
      swal({
        title: "رمز ورود و یا شماره تلفن اشتباه وارد شده",
        icon: "error",
        buttons: "ای بابا !",
      });
    });
};

const singupPostApi = (phone: any, password: any, navigate: any) => {
  AxiosApp.post("/signup", {
    phone,
    password,
  })
    .then(() => {
      swal({
        title: "به جمع دیواری ها خوش آمدید",
        icon: "success",
        buttons: "اوکی !",
      }).then(() => {
        navigate("/login");
      });
    })
    .catch(() => {
      swal({
        title: "لطفا شماره تلفن معتبر وارد کنید (10کاراکتر)",
        icon: "error",
        buttons: "اوکی!",
      });
    });
};

const authorizationPostApi = (setUserInfo: any, setAuth: any, navigate: any, setLoading: any) => {
  const token = localStorage.getItem("token");

  AxiosApp.post("/authorize", {
    token,
  })
    .then((res) => {
      setUserInfo({ userID: res.data.data.userID, userPhone: res.data.data.username });
      setAuth(true);
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/login");
    })
    .finally(() => {
      setLoading(false);
    });
};

const logoutGetApi = (navigate: any) => {
  const token = localStorage.getItem("token");

  AxiosApp.get("/logout", {
    headers: {
      token,
    },
  })
    .then(() =>
      swal({
        title: "با موفقیت خارج شدید",
        icon: "success",
        buttons: "اوکی",
      }).then(() => localStorage.clear(), navigate("/"))
    )
    .catch(() =>
      swal({
        title: "خطایی پیش آمد",
        icon: "error",
        buttons: "اوپس !",
      })
    );
};

const citiesGetApi = (setState: any) => {
  AxiosApp.get("/cities").then((res) => {
    setState(res.data.data.recordset);
  });
};

const allProductsGetApi = (setState: any) => {
  AxiosApp.get("/products").then((res) => {
    setState(res.data.data.recordset);
  });
};

const oneProductGetApi = (productId: any, setOneProduct: any) => {
  AxiosApp.get(`/product/${productId}`).then((res) => {
    setOneProduct(res.data.data.recordset[0]);
  });
};

const productsByCategoryGetApi = (categoryID: any, setState: any) => {
  AxiosApp.post("/category/products", {
    categoryID,
  }).then((res) => {
    setState(res.data.data.recordset);
    swal({
      title: "دسته بندی آگهی ها تغییر یافت",
      icon: "success",
      buttons: "اوکی",
    });
  });
};

const productsByCityGetApi = (cityID: any, setState: any) => {
  AxiosApp.post("/city/products", {
    cityID,
  }).then((res) => {
    setState(res.data.data.recordset);
    swal({
      title: "آگهی های شهر مد نظر نمایش داده شد",
      icon: "success",
      buttons: "حله",
    });
  });
};

const userProductsGetApi = (userID: any, setState: any) => {
  AxiosApp.post("/user/products", {
    userID,
  }).then((res) => setState(res.data.data.recordset));
};

const deleteUserProductApi = (productID: any, setUserProducts: any, userInfo: any) => {
  const token = localStorage.getItem("token");

  AxiosApp.delete(`/product/${productID}`, {
    headers: {
      token,
    },
  }).then(() => {
    swal({
      title: "آگهی مد نظر با موفقیت حذف شد",
      icon: "success",
      buttons: "خوبه !",
    }).then(() => {
      userProductsGetApi(userInfo.userID, setUserProducts);
    });
  });
};

const putUserProductApi = (
  productID: any,
  productNewTitle: string,
  productNewDesc: string,
  productNewPrice: string,
  userInfo: any,
  setUserProducts: any
) => {
  const token = localStorage.getItem("token");

  AxiosApp.put(
    `/product/${productID}`,
    {
      name: productNewTitle,
      price: productNewPrice,
      description: productNewDesc,
    },
    {
      headers: {
        token,
      },
    }
  ).then(() => {
    swal({
      title: "تغییرات با موفقیت ایجاد شدند",
      icon: "success",
      buttons: "عالی",
    }).then(() => {
      userProductsGetApi(userInfo.userID, setUserProducts);
    });
  });
};

export {
  NewProductSetter,
  loginGetApi,
  singupPostApi,
  authorizationPostApi,
  logoutGetApi,
  citiesGetApi,
  allProductsGetApi,
  oneProductGetApi,
  productsByCategoryGetApi,
  productsByCityGetApi,
  userProductsGetApi,
  deleteUserProductApi,
  putUserProductApi,
};

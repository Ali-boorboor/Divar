import { atom, RecoilState } from "recoil";

// * All states in this project

const passwordInput: RecoilState<string> = atom({
  key: "passwordInput",
  default: "",
});

const phoneInput: RecoilState<string> = atom({
  key: "phoneInput",
  default: "",
});

const userInfos: RecoilState<never[]> = atom({
  key: "userInfos",
  default: [],
});

const globalSearchInput: RecoilState<string> = atom({
  key: "globalSearchInput",
  default: "",
});

const globalSearchProducts: RecoilState<never[]> = atom({
  key: "globalSearchProducts",
  default: [],
});

const searchCategoryInput: RecoilState<string> = atom({
  key: "searchCategoryInput",
  default: "",
});

const searchCityInput: RecoilState<string> = atom({
  key: "searchCityInput",
  default: "",
});

const isNewProductComponentAppear: RecoilState<boolean> = atom({
  key: "isNewProductComponentAppear",
  default: false,
});

const isMyProfileAppear: RecoilState<boolean> = atom({
  key: "isMyProfileAppear",
  default: false,
});

const authorization: RecoilState<boolean> = atom({
  key: "authorization",
  default: false,
});

const formLoading: RecoilState<boolean> = atom({
  key: "formLoading",
  default: true,
});

const cityNewProductInput: RecoilState<string> = atom({
  key: "cityNewProductInput",
  default: "",
});

const titleNewProductInput: RecoilState<string> = atom({
  key: "titleNewProductInput",
  default: "",
});

const descNewProductInput: RecoilState<string> = atom({
  key: "descNewProductInput",
  default: "",
});

const newProductStatus: RecoilState<string> = atom({
  key: "newProductStatus",
  default: "نو",
});

const priceNewProductInput: RecoilState<string> = atom({
  key: "priceNewProductInput",
  default: "",
});

const citiesList: RecoilState<never[]> = atom({
  key: "citiesList",
  default: [],
});

const allProducts: RecoilState<never[]> = atom({
  key: "allProducts",
  default: [],
});

const oneProduct: RecoilState<never[]> = atom({
  key: "oneProduct",
  default: [],
});

const userProducts: RecoilState<never[]> = atom({
  key: "userProducts",
  default: [],
});

const isEditProductModal: RecoilState<boolean> = atom({
  key: "isEditProductModal",
  default: false,
});

const isCategoryHeaderNavbar = atom({
  key: "isCategoryHeaderNavbar",
  default: false,
});

const isPriceFilterDropDown: RecoilState<boolean> = atom({
  key: "isPriceFilterDropDown",
  default: false,
});

const priceMinFilterInput: RecoilState<string> = atom({
  key: "priceMinFilterInput",
  default: "",
});

const priceMaxFilterInput: RecoilState<string> = atom({
  key: "priceMaxFilterInput",
  default: "",
});

const isLocationFilterDropDown: RecoilState<boolean> = atom({
  key: "isLocationFilterDropDown",
  default: false,
});

const locationFilterInput: RecoilState<string> = atom({
  key: "locationFilterInput",
  default: "",
});

export {
  passwordInput,
  phoneInput,
  userInfos,
  globalSearchInput,
  globalSearchProducts,
  searchCategoryInput,
  searchCityInput,
  isNewProductComponentAppear,
  isMyProfileAppear,
  authorization,
  formLoading,
  cityNewProductInput,
  titleNewProductInput,
  descNewProductInput,
  newProductStatus,
  priceNewProductInput,
  citiesList,
  allProducts,
  oneProduct,
  userProducts,
  isEditProductModal,
  isCategoryHeaderNavbar,
  isPriceFilterDropDown,
  priceMinFilterInput,
  priceMaxFilterInput,
  isLocationFilterDropDown,
  locationFilterInput,
};

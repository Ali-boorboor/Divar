// * import components ( p a g e s )
import Home from "../pages/Home";
import Support from "../pages/Support";
import AppPage from "../pages/AppPage";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Product from "../pages/Product";
import Error404 from "../pages/Error404";
import NewProduct from "../pages/NewProduct";
import ProductInfo from "../pages/ProductInfo";
import UserProfile from "../pages/UserProfile";

// * routes for pages
let routes: {
  path: string;
  element: JSX.Element;
}[] = [
  { path: "/", element: <Home /> },
  { path: "/support", element: <Support /> },
  { path: "/app", element: <AppPage /> },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/product", element: <Product /> },
  { path: "*", element: <Error404 /> },
  {
    path: "/newproduct",
    element: (
      <PrivateRoute>
        <NewProduct />
      </PrivateRoute>
    ),
  },
  { path: "/product/:productID", element: <ProductInfo /> },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <UserProfile />
      </PrivateRoute>
    ),
  },
];

export default routes;

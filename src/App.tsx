import { useRoutes } from "react-router-dom";
// * import routes variable file for pages route
import routes from "./utils/routes";
import { memo } from "react";

const App = memo(() => {
  const router = useRoutes(routes);

  return <>{router}</>;
});

export default App;

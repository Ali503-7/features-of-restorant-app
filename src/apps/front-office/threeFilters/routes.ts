import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";
import ThreeFilters from "./pages/ThreeFilters";

publicRoutes([
  {
    path: URLS.feature1,
    component: ThreeFilters,
  },
]);

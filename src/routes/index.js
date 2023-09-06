import { createRouter } from "../core/sihyonn";
import Home from "./Home";
import Movie from "./Movie";

export default createRouter([
  {
    path: "#/",
    component: Home,
  },
  {
    path: "#/movie",
    component: Movie,
  },
]);

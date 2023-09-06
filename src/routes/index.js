import { createRouter } from "../core/sihyonn";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  {
    path: "#/",
    component: Home,
  },
  {
    path: "#/movie",
    component: Movie,
  },
  {
    path: "#/about",
    component: About,
  },
  {
    //.* 모두 일치
    path: ".*",
    component: NotFound,
  },
]);

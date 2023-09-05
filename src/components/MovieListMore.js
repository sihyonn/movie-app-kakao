import { Component } from "../core/sihyonn";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });

    movieStore.subscribe("pageMax", () => {
      // movieStore.state.page
      // movieStore.state.pageMax
      const { page, pageMax } = movieStore.state;
      // 맥스가 더 큰건 아직 가져올수있는 페이지가 더 남았다 의미니까
      // hide를 제거한다 => 화면에 보여진다 의미. 숨김을 없앤거니까
      if (pageMax > page) {
        this.el.classList.remove("hide");
      } else {
        this.el.classList.add("hide");
      }
    });
  }
  render() {
    this.el.classList.add("btn", "view-more", "hide");
    this.el.textContent = "View more...";

    this.el.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}

import { Component } from "../core/sihyonn";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    // movies가 변경되는지 감시. 변경시 호출될 콜백
    movieStore.subscribe("movies", () => {
      this.render();
    });
    // loading 상태 변경되는지 감시. 변경시 호출될 콜백
    movieStore.subscribe("loading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*html*/ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
      <div class="the-loader hide"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    // 오류메시지가 들어오면서 movies가 있을수도 있고 없을수도 있어서 없을거대비해서 ?. 사용해줘야함
    moviesEl?.append(
      // 여기서 끝까지 배열이니까 각각의 무비를 넣어주려면 전개연산자 이용
      ...movieStore.state.movies.map(
        (movie) =>
          // props 보내줘야지
          new MovieItem({
            movie, // 원래는 movie: movie인데 속성과 데이터이름 같으면 함축가능
          }).el
      )
    );

    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}

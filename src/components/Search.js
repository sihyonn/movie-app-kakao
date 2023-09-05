import { Component } from "../core/sihyonn";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!😊"/>
      <button class="btn btn-primary">Search!</button>
    `;
    // 검색어창에 입력하면 입력된 value값으로 상태 갱신
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      // movie.js에 있는 store에 searchText에 입력된 밸류값넣어주기(갱신)
      movieStore.state.searchText = inputEl.value;
    });

    // 입력하고 키보드를 칠 경우 영화데이터가져오는 fetch함수작동시키게
    inputEl.addEventListener("keydown", (event) => {
      // 입력한 내용이 있고 엔터키를 쳤을때는 함수호출함
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    // 입려하고 검색 버튼을 누르는 경우
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      // 검색어가 있는지만 확인
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}

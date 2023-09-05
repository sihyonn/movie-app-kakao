import { Component } from "../core/sihyonn";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input placeholder="Enter the movie title to search!😊"/>
      <button class="btn btn-primary">Search!</button>
    `;
    // 검색어창에 입력할때
    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {});

    // 입력하고 키보드를 칠 경우
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
      }
    });

    // 입려하고 검색 버튼을 누르는 경우
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {});
  }
}

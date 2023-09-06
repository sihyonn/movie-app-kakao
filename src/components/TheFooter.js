import { Component } from "../core/sihyonn";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <div>
        <a href="https://github.com/sihyonn/movie-app-kakao.git">
          Github Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/sihyonn">
          ${new Date().getFullYear()}
          SIHYONN
        </a>
      </div>
    `;
  }
}

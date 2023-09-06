import { Component } from "../core/sihyonn";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <a href="#/" class="logo">
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
      <!-- 여기서 쓸거 super의 state에 menus라고하고 만들어주기 -->
      ${this.state.menus
        .map((menu) => {
          // 쿼리스트링이 있으면 일치여부 알기어려우니까 쿼리스트링 제거된 이동할 주소와, 현재페이지주소
          const href = menu.href.split("?")[0];
          const hash = location.hash.split("?")[0];
          const isActive = href === hash;

          return /*html*/ `
        <li>
          <a class="${isActive ? "active" : ""}" href="${menu.href}">
          ${menu.name}
        </a>
        </li>
        `;
        })
        .join("")}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://heropy.blog/css/images/logo.png" alt="User" />
    </a>


    `;
  }
}

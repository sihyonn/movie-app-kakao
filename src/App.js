import TheHeader from "./components/TheHeaer";
import { Component } from "./core/sihyonn";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const routerView = document.createElement("router-view");
    this.el.append(theHeader, routerView);
  }
}

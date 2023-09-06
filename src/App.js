import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeaer";
import { Component } from "./core/sihyonn";

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el;
    const theFooter = new TheFooter().el;
    const routerView = document.createElement("router-view");
    this.el.append(theHeader, routerView, theFooter);
  }
}

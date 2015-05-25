import {Component, View} from "a1atscript";
import template from "./froyoList.html";

@Component({
  controllerAs: "froyoList",
  injectables: ['Froyo']
})
@View({
  template: template
})
export default class FroyoList {
  constructor(Froyo) {
    this.Froyo = Froyo;
  }

  activate() {
    return this.Froyo.all().then((froyos) => this.froyos = froyos);
  }
}

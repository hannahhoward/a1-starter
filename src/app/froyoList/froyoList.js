import {Component, View} from "a1atscript";
import template from "./froyoList.html";

@Component({
  controllerAs: "froyoList",
  injectables: ['Froyo']
})
@View({
  template: template
})
export default class FroyoDetail {
  constructor(Froyo) {
    this.froyos = Froyo.all();
  }
}

import {Component, View} from "a1atscript";
import template from "./froyoDetail.html";

@Component({
  controllerAs: "froyoDetail",
  injectables: ['Froyo', '$routeParams']
})
@View({
  template: template
})
export default class FroyoDetail {
  constructor(Froyo, $routeParams) {
    this.froyo = Froyo.find($routeParams.id)
  }
}

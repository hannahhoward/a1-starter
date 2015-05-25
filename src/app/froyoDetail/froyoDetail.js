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
    this.Froyo = Froyo;
    this.$routeParams = $routeParams;
  }

  activate() {
    return this.Froyo.find(this.$routeParams.id).then((froyo) => this.froyo = froyo);
  }
}

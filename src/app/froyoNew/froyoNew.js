import {Component, View} from "a1atscript";
import template from "./froyoNew.html";

@Component({
  controllerAs: "froyoNew",
  injectables: ['Froyo', '$router']
})
@View({
  template: template
})
export default class FroyoNew {
  constructor(Froyo, $router) {
    this.$router = $router;
    this.Froyo = Froyo;
    this.froyo = Froyo.buildNew();
    this.save = (froyo) => {
      this.Froyo.save(froyo).then(() => $router.navigate("/"));
    }
  }
}

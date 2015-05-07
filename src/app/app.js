import "babelify/polyfill";
import "angular";
import "angular-new-router";

import {Component, View, AsModule, RouteConfig, bootstrap} from "a1atscript";
import template from "./froyo.html"
import Froyo from "./Froyo.js"
import FroyoList from "./froyoList/froyoList.js";
import FroyoDetail from "./froyoDetail/froyoDetail.js";

@AsModule('froyo', ['ngNewRouter', FroyoList, FroyoDetail, Froyo])
@Component({
  selector: "froyo"
})
@View({
  template: template
})
@RouteConfig({
  path: "/", component: FroyoList
})
@RouteConfig({
  path: "/:id", component: FroyoDetail
})
class FroyoApp {
  constructor() {
    this.awesome = "Hello!";
  }
}

bootstrap(FroyoApp);

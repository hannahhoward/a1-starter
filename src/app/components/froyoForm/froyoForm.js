import {Component, View} from "a1atscript";
import template from "./froyoForm.html";

@Component({
  selector: "froyo-form",
  properties: {
    "froyo": "froyo"
  },
  events: {
    "submit": "submit"
  }
})
@View({
  template: template
})
export default class FroyoForm {
  constructor() {
  }
}

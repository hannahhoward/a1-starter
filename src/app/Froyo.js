import {Service} from "a1atscript";

@Service('Froyo', [])
export default class Froyo {
  froyos = [
    {
      flavor: "Chocolate",
      cost: "$2.00"
    },
    {
      flavor: "Vanilla",
      cost: "$2.00"
    }
  ];

  all() {
    return this.froyos;
  }

  find(n) {
    return this.froyos[n];
  }
}

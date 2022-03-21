import { Custom } from "@desys/custom-core";

let INC = 0

@Custom({
  name: 'ds-btn',
  extends: 'button'
})
export class Button extends HTMLButtonElement {
  bid = INC++

  connectedCallback() {
    console.log(`Button ${this.bid} connected`);
  }
}

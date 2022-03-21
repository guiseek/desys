import { Custom } from "@desys/custom-core";

let inc = 0

@Custom({
  name: 'ds-btn',
  extends: 'button'
})
export class Button extends HTMLButtonElement {
  seq = inc++

  connectedCallback() {
    console.log(`Button ${this.seq} connected`);
  }
}

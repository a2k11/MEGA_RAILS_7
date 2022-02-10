import { Controller } from "@hotwired/stimulus"
import { intersection } from "lodash";

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!";
  }

  handleClick() {
    this.element.textContent = intersection([2,1], [2,3]);
  }
}

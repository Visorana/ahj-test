// Initializes the Validator class and sets up event listeners.

import Validator from "./validator";

document.addEventListener("DOMContentLoaded", () => {
  const validator = new Validator(document.querySelector(".validator"));
  validator.init();
});

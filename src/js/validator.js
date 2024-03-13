// validator.js: Defines the Validator class responsible for validating card numbers and updating UI elements.

import isValidCardNumber from "./cardNumberValidator.js";
import detectPaymentSystem from "./paymentSystemDetector.js";

export default class Validator {
  constructor(element) {
    this.element = element;
    this.cardForm = element.querySelector(".card-form");
    this.cardInput = element.querySelector(".card-input");
    this.validationResult = element.querySelector(".validation-result");
    this.paymentIcons = element.querySelectorAll(".payment-icons img");
  }

  init() {
    this.cardInput.addEventListener("input", this.handleInput.bind(this));
    this.cardForm.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleInput(e) {
    this.validationResult.textContent = ""; // Clear any previous validation result after input.
    const input = e.target.value;
    this.updatePaymentIcons(input);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateCard();
  }

  // Update payment system icons based on the input card number.
  updatePaymentIcons(cardInput) {
    const paymentSystem = detectPaymentSystem(cardInput);
    if (paymentSystem) {
      this.paymentIcons.forEach((icon) => {
        icon.classList.add("inactive");
      });
      this.element
        .querySelector("#" + paymentSystem)
        .classList.remove("inactive");
    } else {
      this.paymentIcons.forEach((icon) => {
        icon.classList.remove("inactive");
      });
    }
  }

  // Validate the card number submitted by the user.
  validateCard() {
    const cardInput = this.cardInput.value;
    if (isValidCardNumber(cardInput)) {
      this.validationResult.textContent = "Valid card number";
    } else {
      this.validationResult.textContent = "Invalid card number";
    }
  }
}

// Defines a function to detect the payment system of a credit card number.

export default function detectPaymentSystem(cardNumber) {
  // Checking various patterns of card numbers to detect different payment systems.
  if (/^4/.test(cardNumber)) return "visa";
  if (/^(5[1-5]|2(?:22[1-9][0-9]{2}|2[3-9][0-9]{3}|[3-6][0-9]{3}|7[0-2]0[0-9]{2}))/.test(cardNumber)) return "mastercard";
  if (/^22/.test(cardNumber)) return "mir";
  if (/^3[47]/.test(cardNumber)) return "amex";
  if (/^6(?:011|22(?:12[6-9]|[2-8][0-9]{2}|9[0-2][0-5])|4[4-9]|5)/.test(cardNumber)) return "discover";
  if (/^35(?:2[89]|[3-8][0-9])/.test(cardNumber)) return "jcb";
  if (/^3(?:0[0-5]|6)/.test(cardNumber)) return "diners";
  return null;
}

// Defines a function to validate credit card numbers using Luhn algorithm.

export default function isValidCardNumber(cardNumber) {
  let sum = 0;
  let doubleUp = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let curDigit = parseInt(cardNumber.charAt(i));
    if (doubleUp) {
      if ((curDigit *= 2) > 9) curDigit -= 9;
    }
    sum += curDigit;
    doubleUp = !doubleUp;
  }
  return sum !== 0 && sum % 10 == 0;
}

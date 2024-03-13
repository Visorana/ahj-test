import detectPaymentSystem from "../paymentSystemDetector";

test.each([
  ["4485710851718155", "visa"],
  ["4929981750524381190", "visa"],
  ["6011234766161557", "discover"],
  ["6011120981762128103", "discover"],
  ["30340941079927", "diners"],
  ["36790344857028", "diners"],
  ["5530236776126771", "mastercard"],
  ["2221000965157976", "mastercard"],
  ["3544010430745878380", "jcb"],
  ["3528027747720738", "jcb"],
  ["342797736254820", "amex"],
  ["348796279893212", "amex"],
])("credit card number %s should be %s", (cardNumber, paymentSystem) => {
  expect(detectPaymentSystem(cardNumber)).toBe(paymentSystem);
});

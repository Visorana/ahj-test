import isValidCardNumber from "../cardNumberValidator";

test.each([
  ["371449635398431", "valid", true],
  ["30569309025904", "valid", true],
  ["6011111111111117", "valid", true],
  ["456", "invalid", false],
  ["21345272725679854", "invalid", false],
  ["0000000000000000", "invalid", false],
])("credit card number %s should be %s", (cardNumber, _, expected) => {
  expect(isValidCardNumber(cardNumber)).toBe(expected);
});

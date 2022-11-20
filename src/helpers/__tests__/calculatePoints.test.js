import { calculatePoints } from "../calculatePoints";

describe('should return correct points for specific amount', () => {
  test.each([
    [
      90,
      120,
    ],
    [
      424,
      287,
    ],
    [
      0,
      49,
    ]
  ])('should return %s', (expectedResult, amount) => {
    expect(calculatePoints(amount)).toBe(expectedResult);
  })
});
import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const num1 = 3;
  const num2 = 6;
  const expectedSum = 9;
  // Act
  const actualSum = Add(num1, num2)
  // Assert
  expect(actualSum).toBe(expectedSum)
})

test('Return substraction of a - b', () => {
  // Arrange
  const num1 = 69;
  const num2 = 30;
  const expectedSub = 39;

  // Act
  const actualSub = Substract(num1, num2)

  // Assert
  expect(actualSub).toBe(expectedSub)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const num1 = 89;
  const num2 = 65;
  const expectedMul = 5785;

  // Act
  const actualMul = Multiplication(num1, num2)

  // Assert
  expect(actualMul).toBe(expectedMul)
})
const Calculator = require('./Calculator.js')

const calculator = new Calculator(); 
describe('Calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(3, 10)).toBe(13);
    expect(calculator.add(9, 20)).toBe(29);
  });
  
  test('multiply 1 * 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(10, 10)).toBe(100);
    expect(calculator.multiply(11, 2)).toBe(22);
  });

  test('subtract from 2 - 1 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(7, 1)).toBe(6);
  });

  test('divide by 2 / 2 to equal 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.divide(9, 3)).toBe(3);
    expect(calculator.divide(10, 2)).toBe(5);
  });
});
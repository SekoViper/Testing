const stringLength = require('./stringLength.js');

test('Return string length', () => {
  expect(stringLength('Seko')).toBeGreaterThan(1);
  expect(stringLength('Seko from')).toBeLessThanOrEqual(10);
});
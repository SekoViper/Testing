const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('Capitalize seko to be Seko', () => {
    expect(capitalize('seko')).toBe('Seko');
  });
})
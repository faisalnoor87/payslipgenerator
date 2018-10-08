import { isEmpty } from './';

// Test isEmpty validation
describe('isEmpty validation', () => {
  it('should return true', () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty('')).toBe(true);
  });
});

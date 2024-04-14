const { beforeEach } = require('node:test');
const { rachelAddToBalance, reset } = require('./');

describe('Test various cases', () => {
  beforeEach(() => {
    reset();
  });
  afterEach(() => {
    reset();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Called once', () => {
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 1700"
    );
  });
  test('Called twice', () => {
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 1700"
    );
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 1900"
    );
  });
  test('Called thrice', () => {
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 1700"
    );
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 1900"
    );
    expect(rachelAddToBalance()).toBe(
      "Rachel Green's remaining balance is 2100"
    );
  });
});

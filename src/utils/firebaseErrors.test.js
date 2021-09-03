import { errorCodes, identifyError } from './firebaseErrors';

describe('FirebaseErrors', () => {
  it('Resolves known errors', () => {
    Object.keys(errorCodes).forEach((code) => {
      expect(identifyError(code)).toBe(errorCodes[code]);
    });
  });

  it('Return the error code if unknown', () => {
    const errorCode = 'unknown/Error';
    expect(identifyError(errorCode)).toBe(errorCode);
  });

  it('Retrurn empty string of code is not provided', () => {
    expect(identifyError()).toBe('');
  });
});

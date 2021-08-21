export const identifyError = (errorCode) => {
  if (!errorCode) return '';

  const errorCodes = {
    'auth/missing-email': 'Please provide an email address',
    'auth/invalid-email': 'Please provide a valid email address',
    'auth/wrong-password': 'Please verify your credentials',
    'auth/user-not-found': 'There is no user with this email address',
  };

  return errorCodes[errorCode] || errorCode;
};

const textCodes = {
  amp: '&',
};

export const fromHtmlEntities = (string) => {
  if (typeof string !== 'string') return null;

  const numCodeReplaced = string.replace(/&#\d+;/gm, (s) => {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });

  return numCodeReplaced.replace(/&[a-z]+;/gm, (s) => {
    const code = s.match(/[a-z]+/gm)[0];
    return textCodes[code] || s;
  });
};

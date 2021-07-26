export const fromHtmlEntities = (string) => {
  if (typeof string !== 'string') return null;

  return string.replace(/&#\d+;/gm, (s) => {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};

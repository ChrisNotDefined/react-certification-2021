export const fromHtmlEntities = (string) => {
  return string.replace(/&#\d+;/gm, (s) => {
    return String.fromCharCode(s.match(/\d+/gm)[0]);
  });
};

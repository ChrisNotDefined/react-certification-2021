const textCodes = {
  amp: '&',
  quot: '"',
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

export const generateInitials = (nameStr) => {
  if (!nameStr || nameStr === '') return;
  const [first, seccond] = nameStr.match(/\w+/g);
  if (!seccond) return `${first[0]}${first[1]}`.toUpperCase();
  return `${first[0]}${seccond[0]}`.toUpperCase();
};

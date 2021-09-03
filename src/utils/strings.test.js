import { fromHtmlEntities, generateInitials } from './strings';

describe('Html Decoding', () => {
  it('Should pass html encoding to a readable string', () => {
    const result = fromHtmlEntities('Wizeline&#39;s 2020 Year in Review');

    expect(result).toBe(`Wizeline's 2020 Year in Review`);
  });

  it('Leaves a string with no needed conversion unaffected', () => {
    const result = fromHtmlEntities('Hello World');

    expect(result).toBe('Hello World');
  });

  it('Manages named encoding', () => {
    const result = fromHtmlEntities('Drum &amp; Bass');

    expect(result).toBe('Drum & Bass');
  });

  it('Unexpected value returns null', () => {
    const result = fromHtmlEntities(23);

    expect(result).toBeNull();
  });

  it('Leaves unknown named entities', () => {
    const result = fromHtmlEntities('&unknown; Rare char');

    expect(result).toBe('&unknown; Rare char');
  });
});

describe('Initials generator', () => {
  it('Returns initial of each word', () => {
    const result = generateInitials('Lorem Ipsum');
    expect(result).toBe('LI');
  });

  it('Returns first two letters if only one word is provided', () => {
    const result = generateInitials('Lorem');
    expect(result).toBe('LO');
  });

  it('Return nothing if no word is sent', () => {
    const result = generateInitials();
    expect(result).toBeUndefined();
  });
});

import { fromHtmlEntities } from './strings';

describe('Html Decoding', () => {
  it('Should pass html encoding to a readable string', () => {
    const result = fromHtmlEntities('Wizeline&#39;s 2020 Year in Review');

    expect(result).toBe(`Wizeline's 2020 Year in Review`);
  });

  it('Leaves a string with no needed conversion unaffected', () => {
    const result = fromHtmlEntities('Hello World');

    expect(result).toBe('Hello World');
  });

  it('Unexpected value returns null', () => {
    const result = fromHtmlEntities(23);

    expect(result).toBeNull();
  });
});

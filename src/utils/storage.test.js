import { storage } from './storage';

describe('Storage Utility', () => {
  it('Saves and retrieves data successfully', () => {
    const key = 'CurrentUser';

    const testData = {
      name: 'John',
      lastName: 'Doe',
      age: 24,
      kids: ['Mike', 'Sara', 'Jenny'],
    };

    storage.set(key, testData);

    const retrievedData = storage.get(key);

    expect(retrievedData).toEqual(testData);
  });

  it('Returns null when getting unknown element', () => {
    const result = storage.get('unknownElement');

    expect(result).toBeNull();
  });

  it('Return null if it fails to parse json', () => {
    window.localStorage.setItem('notJson', '23string');

    const result = storage.get('notJson');

    expect(result).toBeNull();
  });
});

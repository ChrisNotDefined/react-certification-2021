const storage = {
  get(key) {
    try {
      const strValue = window.localStorage.getItem(key);
      return JSON.parse(strValue);
    } catch (error) {
      console.error(`Failed parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };

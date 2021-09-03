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

  remove(key) {
    window.localStorage.removeItem(key);
  },

  set(key, value) {
    const jsonStr = JSON.stringify(value);
    if (jsonStr) window.localStorage.setItem(key, jsonStr);
  },
};

export { storage };

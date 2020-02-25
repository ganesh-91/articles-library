const SESSION_ID = 'SESSION_ID';

const saveLocal = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocal = (key) => {
  return localStorage.getItem(key);
};

const deleteLocal = (key) => {
  localStorage.removeItem(key);
};

export const startSession = (value) => saveLocal(SESSION_ID, value);
export const getSession = () => getLocal(SESSION_ID);
export const destroySession = () => deleteLocal(SESSION_ID);

// actions.js
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const saveUserData = (userData) => ({
    type: SAVE_USER_DATA,
    payload: userData
});
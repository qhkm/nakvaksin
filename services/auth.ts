import axios from 'axios';
import Cookies from 'js-cookie';

import { axInstance } from '../apis/nakvaksin.instance';
import User from '../types/user';
import sanitizePhoneNumber from '../utils/sanitizePhoneNumber';

const COOKIE_USER_TOKEN = 'userToken';
const COOKIE_USER_PROFILE = 'userProfile';

async function login(username: string, password: string) {
    return axInstance({
        method: 'POST',
        url: '/login',
        data: {
            username,
            password
        }
    });
}

async function resetPassword(username: string) {
    return axios({
        method: 'POST',
        url: '/api/resetpassword',
        data: {
            username: sanitizePhoneNumber(username)
        }
    });
}

function setUserToken(token: string) {
    Cookies.set(COOKIE_USER_TOKEN, token);
}

function getUserToken() {
    return Cookies.get(COOKIE_USER_TOKEN);
}

function clearUserToken() {
    return new Promise<void>((resolve) => {
        Cookies.remove(COOKIE_USER_TOKEN);
        resolve();
    });
}

function setCachedUserProfile(user: User) {
    Cookies.set(COOKIE_USER_PROFILE, user);
}

function getCachedUserProfile() {
    // IMPORTANT!
    // Do not use this function to retrieve user's profile
    // Use useUser() hook instead
    const cookie = Cookies.get(COOKIE_USER_PROFILE);

    if (cookie) {
        return JSON.parse(cookie) as User;
    }

    return undefined;
}

export {
    clearUserToken,
    getCachedUserProfile,
    getUserToken,
    login,
    resetPassword,
    setCachedUserProfile,
    setUserToken
};

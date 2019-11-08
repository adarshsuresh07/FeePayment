const TOKEN_KEY = 'jwt';

export const logins = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logouts = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogins = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}
const TOKEN_KEYA = 'jwt1';

export const logina = () => {
    localStorage.setItem(TOKEN_KEYA, 'TestLogin');
}

export const logouta = () => {
    localStorage.removeItem(TOKEN_KEYA);
}

export const isLogina = () => {
    if (localStorage.getItem(TOKEN_KEYA)) {
        return true;
    }

    return false;
}
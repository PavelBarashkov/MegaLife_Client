export function isValidRepeatPassword(password: string, repeatPassword: string) {
        if (password === repeatPassword) {
            return true;
        } else {
            return false
        }
    }

export function isValidLogin(str: string): boolean {
    return !/\s/.test(str) && /\w@[\w\d][-_\w\d]+\.\w/.test(str);
}

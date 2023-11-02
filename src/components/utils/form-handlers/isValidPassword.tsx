export function isValidPassword(str: string): boolean {
    if (/\s/.test(str)) {
        return false;
      }
      return /^(?=.*[A-Za-z0-9!#$%&_-]).{6,}$/.test(str);
}

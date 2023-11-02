export interface IFormFirstEntry {
    password: {
        value: string,
        valid: boolean | null,
        type: string,
        error: string
    },
    repeat_password: {
        value: string,
        valid: boolean | null,
        type: string,
        error: string
    },
    error: string
}
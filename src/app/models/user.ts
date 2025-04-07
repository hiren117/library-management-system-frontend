export interface User {
    id?: number;  // <-- Make it optional using '?' to avoid issues
    userName: string;
    password: string;
    fullName: string;
    mobileNumber: number;
    emailId: string;
}

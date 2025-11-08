export interface User {
    id?: number;  // <-- Make it optional using '?' to avoid issues
    username: string;
    password: string;
    fullName: string;
    mobileNumber: number;
    emailId: string;
}

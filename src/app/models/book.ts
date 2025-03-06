export interface Book {
    id?: number;  // <-- Make it optional using '?' to avoid issues
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
}

export {}; // Hack to ignore Book from task 4

type Book = {
    title: string;
    author: string;
    publicationYear: number;
};

function promptForBook(): Book {
    const bookTitle = prompt('Syötä kirjan nimi:') || '';
    const bookAuthor = prompt('Syötä kirjailijan nimi:') || '';
    const bookPublicationYear = prompt('Syötä julkaisuvuosi:');

    const publicationYear = bookPublicationYear ? parseInt(bookPublicationYear) : NaN;

    const book: Book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: publicationYear
    };
    return book;
}

const bookDetails = promptForBook();

console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);

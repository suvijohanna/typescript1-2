function promptForBook() {
    const bookTitle = prompt('Syötä kirjan nimi:') || '';
    const bookAuthor = prompt('Syötä kirjailijan nimi:') || '';
    const bookPublicationYear = prompt('Syötä julkaisuvuosi:');
    const publicationYear = bookPublicationYear ? parseInt(bookPublicationYear) : NaN;
    const book = {
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
export {};

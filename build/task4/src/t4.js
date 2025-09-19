function createElectronicDevice() {
    const brand = prompt('Syötä laitteen merkki:');
    const model = prompt('Syötä laitteen malli:');
    return {
        type: 'electronic',
        brand: brand || '',
        model: model || ''
    };
}
function createBook() {
    const title = prompt('Syötä kirjan nimi:');
    const author = prompt('Syötä kirjailijan nimi:');
    return {
        type: 'book',
        title: title || '',
        author: author || ''
    };
}
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};

function lengthOrSquare(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (typeof value === 'number') {
        return value * value;
    }
    throw new Error('Unsupported type');
}
const userInput = prompt("Syötä luku tai merkkijono:");
const parsedValue = isNaN(parseFloat(userInput)) ? userInput : parseFloat(userInput);
const result = lengthOrSquare(parsedValue);

console.log(typeof result);
console.log(result);

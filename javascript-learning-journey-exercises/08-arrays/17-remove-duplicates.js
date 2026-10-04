// Remove duplicates from an array.

const numbers = [
    12, 45, 7, 23, 12,
    89, 34, 45, 7, 56,
    23, 91, 34, 18, 56,
    72, 89, 12, 63, 45
];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);


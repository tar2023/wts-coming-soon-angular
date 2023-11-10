function fizzbuzzType(n) {
    if (n % 3 === 0) {
        return 'fizz';
    }
    if (n % 5 === 0) {
        return 'buzz';
    }
    return String(n);
}
console.log(fizzbuzzType(1));
console.log(fizzbuzzType(2));
console.log(fizzbuzzType(3));
console.log(fizzbuzzType(4));
// console.log(fizzbuzz('a'));

const number = 14541;
const reverseNumber = parseInt(number.toString().split('').reverse().join(''));

if (reverseNumber === number) {
  console.log(`${number} é palíndromo.`);
} else {
  console.log(`${number} não é palíndromo.`);
}

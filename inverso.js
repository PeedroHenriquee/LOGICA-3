
let num = 6548;
let numInvertido = "";

if (num < 10) {
  numInvertido = num;
} else {
  while (num > 0) {
    numInvertido += num % 10;
    num = Math.floor(num / 10);
  }
}

console.log(`O número ${num} invertido é ${numInvertido}.`);

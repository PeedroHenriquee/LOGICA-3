const numero = 5;

let soma = 0;

for (let i=0; i<=numero/2; i++){
  if (numero % i === 0){
      soma += i;
  }
}

if (soma === numero){
  console.log(numero + " e um numero perfeito");
}else{
  console.log(numero + " e um numero imperfeito");
}
const valorTotal = 1500; // valor total da compra
const numParcelas = 12; // número de parcelas
const taxaJuros = 0.05; // taxa de juros (5% ao mês)

const valorParcela = (valorTotal * (1 + taxaJuros)**numParcelas) / numParcelas;

console.log(`O valor de cada parcela será de R$${valorParcela.toFixed(2)}.`);

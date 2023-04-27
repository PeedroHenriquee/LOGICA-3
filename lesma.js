const alturaMuro = 10; // altura do muro em metros
const distanciaSubidaDiaria = 0.5; // distância que Dona Lesma sobe a cada dia em metros
let dias = 0; // contador de dias

while (alturaMuro > 0) {
  alturaMuro -= distanciaSubidaDiaria;
  dias++;
}

console.log(`Dona Lesma alcançará o topo do muro em ${dias} dias.`);

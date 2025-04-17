let contador = 6;

console.log("Com While");

while (contador <= 12) {
    console.log(`Numero é: ${contador}`);
    contador ++;
}
console.log("------------------");
console.log("Com For");

for(contador = 6; contador <=12; contador++) {
    console.log(`Numero é: ${contador}`);
}
console.log("------------------");
console.log("Com do-While");

contador = 6;

do {
    console.log(`Numero é: ${contador}`);
    contador ++;
} while (contador <= 12)

console.log("FIM")
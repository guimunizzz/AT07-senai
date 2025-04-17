let contador = 50;

console.log("Com While");

while (contador >= 0) {
    console.log(`Numero é: ${contador}`);
    contador -= 5;
}
console.log("------------------");
console.log("Com For");

for(contador = 50; contador >= 0; contador-=5) {
    console.log(`Numero é: ${contador}`);
}

console.log("------------------");
console.log("Com do-While");

contador = 50;

do {
    console.log(`Numero é: ${contador}`);
    contador -= 5;
} while (contador >= 0)

console.log("FIM")
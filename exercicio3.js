let contador = 0;

console.log("Com While");

while (contador <= 30) {
    console.log(`Numero é: ${contador}`);
    contador += 3;
}

console.log("------------------");
console.log("Com For");

for(contador = 0; contador <= 30; contador+=3) {
    console.log(`Numero é: ${contador}`);
}

console.log("------------------");
console.log("Com do-While");

contador = 0;

do {
    console.log(`Numero é: ${contador}`);
    contador += 3;
} while (contador <= 30)

console.log("FIM")
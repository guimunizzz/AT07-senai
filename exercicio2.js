let contador = 10;

console.log("Com While");

while (contador >= 1) {
    console.log(`Numero é: ${contador}`);
    contador--;
}
console.log("------------------");
console.log("Com For");

for(contador = 10; contador >=1; contador--) {
    console.log(`Numero é: ${contador}`);
}
console.log("------------------");
console.log("Com do-While");

contador = 10;

do {
    console.log(`Numero é: ${contador}`);
    contador --;
} while (contador >= 1)
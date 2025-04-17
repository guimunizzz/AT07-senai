let contador = 30;

console.log("Com While");

while (contador >= 1) {
    if (contador % 4 == 0) {
        console.log(`Numero é: [${contador}]`);
    } else {
        console.log(`Numero é: ${contador}`);
    }
    contador --;
}

console.log("------------------");
console.log("Com For");

for(contador = 30; contador >= 1; contador--) {
    if (contador % 4 == 0) {
        console.log(`Numero é: [${contador}]`);
    } else {
        console.log(`Numero é: ${contador}`);
    }
}

console.log("------------------");
console.log("Com do-While");

contador = 30;

do {
    if (contador % 4 == 0) {
        console.log(`Numero é: [${contador}]`);
    } else {
        console.log(`Numero é: ${contador}`);
    }
    contador--;
} while (contador >= 1)

console.log("FIM")
let contador = 1;
let intervalo = parseInt(prompt("Digite um valor"));

if (isNaN(intervalo)) {
  alert("ERRO - Digite um numero novamente");
} else {
  console.log("Com While");

  while (contador <= intervalo) {
    console.log(`Numero é: ${contador}`);
    contador++;
  }
  console.log("------------------");
  console.log("Com For");

  for (contador = 1; contador <= intervalo; contador++) {
    console.log(`Numero é: ${contador}`);
  }

  console.log("------------------");
  console.log("Com do-While");

  contador = 1;

  do {
    console.log(`Numero é: ${contador}`);
    contador++;
  } while (contador <= intervalo);
}

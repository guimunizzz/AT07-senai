let primeiroValor = parseInt(prompt("Digite o primeiro valor do contador"));
let ultimoValor = parseInt(prompt("Digite o ultimo valor do contador"));
let incremento = parseInt(prompt("Digite o incremento do contador"));
let contador = primeiroValor;

if (isNaN(primeiroValor && ultimoValor && incremento)) {
  alert("ERRO - Digite um numero novamente");
} else {
  if (ultimoValor > primeiroValor) {
    console.log(`Primeiro valor: ${primeiroValor}`);
    console.log(`ultimo valor: ${ultimoValor}`);
    console.log(`Incremento: ${incremento}`);
    console.log("------------------");

    console.log("Com While");

    while (contador <= ultimoValor) {
      console.log(`Numero é: ${contador}`);
      contador += incremento;
    }

    console.log("------------------");

    console.log("Com For");

    for (contador = primeiroValor;contador <= ultimoValor;contador += incremento) {
      console.log(`Numero é: ${contador}`);
    }
    
    console.log("------------------");
    console.log("Com do-While");

    contador = primeiroValor;

    do {
      console.log(`Numero é: ${contador}`);
      contador += incremento;
    } while (contador <= ultimoValor);
    console.log("FIM")
  } else {
    alert("Erro - o ultimo valor precisa ser maior que o primeiro");
  }
}

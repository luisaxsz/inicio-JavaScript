function contar() {
  let num1 = document.getElementById("inicio").value;
  let inicio = parseInt(num1);
  let num2 = document.getElementById("fim").value;
  let fim = parseInt(num2);
  let passo = document.getElementById("pular").value;
  let pular = parseFloat(passo);
  let res = document.getElementById("res");

  /*while (inicio < fim) {
      (inicio += passo);
      console.log(inicio)
    }*/
  for (inicio = inicio; inicio <= fim; inicio += pular) {
    res.innerHTML += ` ${inicio} `;
  }
}

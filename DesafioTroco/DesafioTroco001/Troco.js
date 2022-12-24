function troco() {
  let obj = window.prompt("Oque você comprou?");
  let valor = window.prompt(`Qual foi o valor do seu ${obj}`);
  let pag = window.prompt("Qual valor você vai usar para pagar?");
  let troco = pag - valor;
  let res = alert(
    `Você comprou um(a) ${obj} que custou ${valor} e deu o valor de  ${pag} seu troco é de ${troco}`
  );
}

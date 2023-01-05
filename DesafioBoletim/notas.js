function verificar() {
  let aluno = document.getElementById("aluno").value;
  let nota1 = document.getElementById("nota1").value;
  let nota001 = parseFloat(nota1);
  let nota2 = document.getElementById("nota2").value;
  let nota002 = parseFloat(nota2);
  let media = (nota001 + nota002) / 2;
  let res = document.getElementById("resposta");

  if (media < 3) {
    res.innerHTML = `Com as notas ${nota001} e ${nota002} a média fica ${media} logo o aluno foi <strong>reprovado</strong>`;
  } else if (media > 3.0 && media < 6.0) {
    res.innerHTML = `Com as notas${nota001} e ${nota002} a média fica ${media} logo o aluno está de <strong>recuperação</strong>`;
  } else {
    res.innerHTML = `Com as notas ${nota001} e ${nota002} a média fica ${media} logo o aluno está <strong>Aprovado</strong>`;
  }
}

function troco() {
    let obj = window.document.getElementById('objeto').value
    //botar sempre .value quando for um formulário
    let valor = window.document.getElementById('val').value
    let pago = window.document.getElementById('pag').value
    let valorform = parseFloat(valor)
    let pagform = parseFloat(pago)
    let troco = pagform - valorform
    let res = window.document.getElementById('container')
    res.innerHTML = `<p>Você comprou um(a) ${obj} no valor de ${valor} e pagou ${pago} seu troco é ${troco}</p>`
  }

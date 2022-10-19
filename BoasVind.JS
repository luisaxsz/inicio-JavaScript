function inicio(){
    let nome = window.document.getElementById('nome').value
    let idade = window.document.getElementById('idade').value
    let res = window.document.getElementById('res')
    res.innerHTML = `Acabei de conhecer a ${nome}, que tem ${idade} de idade!`
}
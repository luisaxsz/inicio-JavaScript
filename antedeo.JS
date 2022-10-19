function antedep(){
    let num = window.document.getElementById('numr').value
    let numconvert = parseInt(num)
    let sucessor = numconvert + 1
    let antecessor = numconvert - 1
    let res = window.document.getElementById('resultado')
    res.innerHTML = `O antecessor de ${numconvert} é ${antecessor} e o sucessor é ${sucessor}`
}
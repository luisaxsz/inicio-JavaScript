//CRIAÇÃO DO ARRAY
let arrayNumeros = [] 
//FUNÇÃO PARA ADICIONAR VALOR AO ARRAY E VERIFICAR REQUISITOS 
function adicionar() {
    let numero = document.querySelector("#number").value
    let numeroConvertido = parseInt(numero)
    let lista = document.querySelector("#select")
    let item = document.createElement('option')
    //VERIFICA SE NUMERO ESTÁ ENTRE 1 E 100
    if (numeroConvertido <= 0 || numeroConvertido > 100){
        alert("ERROR:NÚMERO INVÁLIDO")
    //VERIFICA SE NUMERO JÁ EXISTE NO ARRAY
    }else if (arrayNumeros.includes(numeroConvertido)) {
            alert("ERRO NÚMERO JÁ INSERIDO")
    //ADICIONA O NUMERO NO ARRAY
    }else {
       arrayNumeros.push(numeroConvertido)
       console.log(arrayNumeros)
        item.text = `O valor ${numeroConvertido} foi adicionado`
        lista.appendChild(item)
    }
}
function finalizar(){
    let res = document.querySelector("#res")
    /*O apply funciona como se você tivesse passado os valores do array como parâmetros da 
    função max, e equivaleria a se digitar Math.max(0,12,13,2.... O primeiro parâmetro
     equivale ao escopo a ser usado na função, e neste caso, como é indiferente, passamos
     null, que representa o escopo global.*/
    let maiorNumero = Math.max.apply(null, arrayNumeros)
    const total = 0; //valor inicial
    const soma = arrayNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, total) 
    /*O valor de retorno da sua função reducer é atribuída ao acumulador. 
    O acumulador, com seu valor atualizado, é repassado para cada iteração 
    subsequente pelo array, que por fim, se tornará o valor resultante, único, final.*/ 
    let media = soma/arrayNumeros.length
    
    res.innerHTML = `Ao todo temos ${arrayNumeros.length} números cadastrados.</br>
                     O maior valor informado foi ${maiorNumero}. </br>
                     Somando todos os valores temos ${soma} </br>
                     A média dos valores que digitamos é ${media}.
                     `
}



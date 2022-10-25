function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano').value
    let res = document.getElementById('res')

    if(fano.length == 0 || parseInt(fano) > ano){
        alert ('ERROR: VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    }else{
       //name tem que ser igual 
       let sex = document.getElementsByName('radsex')
       let idade = ano - parseInt(fano)
       let genero = ''
       let img = document.createElement('img')

       img.setAttribute('id' , 'foto')
      
       if (sex[0].checked){
        genero = 'Masculino'
            if(idade > 0 && idade < 10){
                //imagem
                img.setAttribute('src','bbmenino.png')
            }else if (idade < 21){
                //imagem
                img.setAttribute('src','jovemhom.png')

            }else if (idade < 50){
                //imagem
                img.setAttribute('src','homemadulto.png')

            }else{
                //imagem
                img.setAttribute('src','velho.png')

            }

       }else if (sex[1].checked){
        genero = 'Feminino'
            if(idade > 0 && idade < 10){
                //imagem
                img.setAttribute('src','bbmenina.png')
            }else if (idade < 21){
                //imagem
                img.setAttribute('src','muljovem.png')
            }else if (idade < 50){
                //imagem
                img.setAttribute('src' , 'mulheradulta.png')
            }else{
                //imagem
                img.setAttribute('src','idosa.png')
            }
       }
       
       res.innerHTML = `Seu gênero é ${genero} e você tem ${idade} anos`
       res.appendChild(img)

    }
}

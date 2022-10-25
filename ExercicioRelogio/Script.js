function carregar(){
    let msg = window.document.getElementById('msg')
    let foto = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas!`
    
    if(hora >= 0 && hora < 13){
        //bomdia
        foto.src = 'ManhaEditada002.png'
        document.body.style.backgroundColor = '#F5C295'
    }else if (hora >= 13 && hora < 18 ){
        //boatarde
        foto.src = 'TardeEditada.png'
        document.body.style.backgroundColor = '#daa04f'

    }else{
        //boanoite
        foto.src = 'NoiteEditada.png'
        document.body.style.backgroundColor = '#2C2F40'

    }
}

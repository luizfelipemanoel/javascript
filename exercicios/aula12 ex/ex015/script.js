function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano ){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number( fano.value)
        var genero = ''
        var img = dicument.crateElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagem/homem-criaca.jpg')
            }
          
        } else if (fsex[1].checked) {
            genero = 'Mulher'

        }
   
     
    }
    res.getElementsByClassName.textAling = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}

var bobo = new Date()
var hora = bobo.getHours ()
console.log(`Agora são exatmente ${hora} hora`)
if(hora >= 6 && hora < 12  ){
    console.log('Bom dia')
}else if(hora >= 12 && hora <=18){
    console.log('Boa Tarde')
}else if(hora > 18 && hora <=24){
    console.log('Boa Noite')
}else {
    console.log('Boa madrugada')
}

    

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade cauculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if( idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21) {
                //jovem 
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
            } else if(fsex[1].checked) {
                genero = 'Mulher'
            }if( idade >=0 && idade < 10){
                //criança
            }else if (idade < 21) {
                //jovem 
            }else if(idade < 50) {
                //adulta
            }else{
                //idosa
            }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.querySelector('div#resposta')
    
   if (fano.value.length == 0 || Number(fano.value) > ano){
       alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
       var sexo = document.getElementsByName('radsex')
       var idade = Number(ano - fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(sexo[0].checked){
           genero = 'Homem'
           if (idade < 10){
              // Criança
              img.setAttribute('src', 'imagem/menino.png')
           } else if (idade < 24){
               // Jovem
               img.setAttribute('src', 'imagem/jovem-m.png')
           } else if(idade < 50){
               // Adulto
               img.setAttribute('src', 'imagem/adulto.png')
           } else{
               // Idoso
               img.setAttribute('src', 'imagem/idoso.png')
           }
       }else{
           genero = 'Mulher'
           if (idade < 10){
            // Criança
            img.setAttribute('src', 'imagem/menina.png')
         } else if (idade < 20){
             // Jovem
             img.setAttribute('src', 'imagem/jovem-f.png')
         } else if(idade < 60){
             // Adulta
             img.setAttribute('src', 'imagem/adulta.png')
         } else{
             // Idosa
             img.setAttribute('src', 'imagem/idosa.png')
         }
       }
       resp.style.textAlign = 'center'
       resp.innerHTML = `Detectamos ${genero} com ${idade} anos`
       resp.appendChild(img)

   }
}
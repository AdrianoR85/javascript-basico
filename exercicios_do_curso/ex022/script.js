function gerarEstacao(){
    let mes = prompt('Informe o mês em extenso (ex. Janeiro)').toLowerCase()
    let msg = document.querySelector('div#msg')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    let estacao = ''

    switch (mes) {
        case 'janeiro': case 'fevereiro': case 'março': case 'marco':
            estacao = 'Verão'
            img.setAttribute('src', 'imagem/verao01.png')
            break;
        case 'abril': case 'maio': case 'junho':
            estacao = 'outono'
            img.setAttribute('src', 'imagem/outono01.png')
            break;
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Inverno'
            img.setAttribute('src', 'imagem/inverno01.png')
            break;
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'primavera'
            img.setAttribute('src', 'imagem/primavera01.png')
            break;
        default:
            estacao = 'INDEFINIDA'
            break;
    }
    msg.style.textAlign = 'center'
    msg.innerHTML = `<p>Em ${mes} é ${estacao}</p>`
    msg.appendChild(img)
}

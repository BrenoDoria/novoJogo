let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o numero entre 1 e 10';

//o comando acima pode ser escrito tb da forma abaixo, boas praticas.

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
function exibirInicial(){
exibirTextoNaTela('h1','jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else {
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'o numero e menor.');
        } else {
            exibirTextoNaTela('p', 'o numero e maior.');
        }
       tentativas++;
       limparCampo();
       

    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);   
    let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeroNaLista == numeroLimite){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    } 
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
 function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }
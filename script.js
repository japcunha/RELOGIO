function atualizarT() {

    let now = new Date();

    let display = document.querySelector('.display');

    let horario = resolverHorario(now.getHours()) + ':' + resolverHorario(now.getMinutes()) + ':' + resolverHorario(now.getSeconds());

    display.textContent = horario;

}
const paisagem = [
    'paisagens/imagem1.jpeg',
    'paisagens/imagem2.jpeg',
    'paisagens/imagem3.jpeg',
    'paisagens/imagem4.jpeg',
    'paisagens/imagem5.jpeg'
];

function atualizarPaisagem() {
    const imgAleatoria = Math.floor(Math.random() * paisagem.length);
    const imgEscolhida = paisagem[imgAleatoria]
    document.body.style.backgroundImage = `url('${imgEscolhida}')`;
}

function resolverHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    } return numero;
}
atualizarPaisagem();
atualizarT();
setInterval(atualizarT, 1000);
setInterval(mudarPaisagem, 3600000)

console.log(horario);

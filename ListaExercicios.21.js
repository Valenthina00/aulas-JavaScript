const missoes = [
    { nome: "Derrotar chefe", pontos: 500},
    { nome: "Encontrar tesouro", pontos: 200},
    { nome: "Salvar personage", pontos: 800},
    { nome: "Explorar mapa", pontos: 100}
];
function analizarMissoes(missoes) {
    for (const missao of missoes) {
        if (missao.pontos >= 500) {
            console.log(missao.nome + " - Missão difícil");
        } else if (missao.pontos >= 200) {
            console.log(missao.nome + " - Missão média");
        } else {
            console.log(missao.nome + " - Missão fácil");
        }
    }
}
analizarMissoes(missoes);
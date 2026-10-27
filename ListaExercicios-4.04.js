const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(array) {
    return [...new Set (array)];
}

console.log(limparLista(nomesRepetidos));
const procurarNome = (nomes, nomeBuscado) => {
    for (const nome of nomes) {
        if (nome === nomeBuscado) {
            return true;
        }
    }
    return false;
};
console.log(procurarNome(["Alice", "Fernando", "João", "Maria"], "João"));
const mostrarAprovados = (notas) => {
    for (const nota of notas) {
        if (nota >= 7) {
            console.log(nota);
        }
    }
};
mostrarAprovados([5, 8, 10, 18, 3]);

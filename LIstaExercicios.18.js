const tranformarStatus = (status) => {
    const novoArray = [];

    for (const item of status){
        novoArray.push(
            item ? "Concluído" : "Pendente" 
        );
    }
    return novoArray;
};
console.log(tranformarStatus([true, false,]));
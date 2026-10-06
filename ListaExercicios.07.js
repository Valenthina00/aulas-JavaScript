const diminuirEnergia = function(energiaInicial){
    let energia = energiaInicial;

    while (energia > 0) {
        console.log(`Energia atual: ${energia}`);
        energia -= 10;
    }
};
diminuirEnergia(80); 
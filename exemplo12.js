const frutas = ['Maçã', 'Banana', 'Uva']
  
  //Adicionando 3 novas frutas
frutas.push('morango'); 
frutas.push('laranja');
frutas.push('abacaxi');

    console.log('depois de adicionar 3 frutas:');
    console.log('frutas');

    for (const fruta of frutas) {
    console.log(fruta);
  }

    //remove o ultimo 
frutas.splice(1, 2);
  console.log('\n=== APOS REMOVER 2 FRUTAS ===');
  console.log(frutas);
    for (const fruta of frutas) {
  console.log(fruta);
}
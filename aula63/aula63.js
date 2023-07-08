//               -5        -4      -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//  splice = Remove ou adiciona os elementos no array
//  nomes.splice(índice, delete, elem1, elem2, elem3);
//  pop = Remove o ultimo elemento do array
//  Number.MAX_VALUE = Remove todos os elementos inifinitamente

const removidos = nomes.splice(0, 0);  //Removendo elementos
const adicionados = nomes.splice(3, 0, 'Caio');  //Adicionando elementos

console.log(nomes, removidos, adicionados);
const livros = require('./listaLivros');

function insertionSort(arr) {
    
    for (let atual = 0; atual < arr.length; atual++) {
        let analise = atual; // olhar qual item está sendo analisado
        while (analise > 0 && arr[analise].preco < arr[analise - 1].preco) {
            
            let itemAnalise = arr[analise]; // o que está sendo analisado
            let itemAnterior = arr[analise - 1]; // o que foi analisado anteriormente -1
    
            arr[analise] = itemAnterior
            arr[analise - 1] = itemAnalise
            

            analise--
        }
    }
    console.log(arr);
}

insertionSort(livros); 


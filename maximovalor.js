const livros = require('./listaLivros');


function getMax(arr,n) {
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;

}
 
console.log(livros)
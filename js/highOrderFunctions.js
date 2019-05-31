const array1 = [1, 2, 3]
const array2 = []

for (let i=0; i<array1.length; i++){
    array2.push(array1[i] * 2)
}

console.log(array2) // [2, 4, 6]



//------> Usando una FUNCION DE ALTO ORDEN quedaría de la siguiente manera

// .map() es una función de alto orden que recibe una función como argumento

const array11 = [1, 2, 3]
const array22 = array11.map(function(item){
    return item * 2
})

console.log(array22) // [2, 4, 6]


//------> Usando ARROW FUNCTIONS

const array222 = array11.map(item => item * 2)


//-------- OTROS METDOS DE JS --------//
/*

    .map(): ejecuta una función por cada uno de los elementos del arreglo y retorna en sí mismo el arreglo resultante (mutado).
    .forEach(): Similar al método anterior pero no retorna en sí misma el array resultante.
    .filter(): devuelve un arreglo con los elementos que cumplen con una condición buleana determinada por una función que se pasa por parámetro.
    .reduce(): aplica una función definida a los diferentes elementos del arreglo para obtener a fin de cuentas un valor resultante. Es similar a una función de agregado.
*/
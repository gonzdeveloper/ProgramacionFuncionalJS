
/*

Los Closures son funciones que retornan otras funciones y recuerdan el scope en el
que fueron creadas, es decir, son funciones que utilizan principios de la programación
funcional, no modifica el valor de variables u objetos externos, más bien,
utilizan sus propias variables independientes (a partir de los parámetros que
reciban estas funciones) para dar resultados correctos.

*/


function buildSum(a){
    return function(b){
        return a + b
    }
}


const addFive = buildSum(5)
//Queda la funcion cargada

//Ahora llama a la funcion interna
console.log(addFive(5)) // 10


//Con ArrowFunctions

const buildSum = a => b => a + b
/*

    Gracias a los closures es posible implementar el Currying,
    descomponer funciones complejas en otras funciones más pequeñas
    donde cada función recibe un solo argumento.


    Una función "currificada" es aquella que al recibir menos argumentos de
    los esperados, devuelve otra función, que espera recibir como argumentos
    los argumentos faltantes de la función original, en lugar de devolver un error.

*/


const buildSum = a => b => a + b
const tag = t => content => `<${t}>${content}<${t}>`


//Sin Currying
function sumThreeNumber(a, b, c) {
    return a +b +c
}

console.log(sumThreeNumber(1, 2, 3)) // 6



// 2 Closures
// Con Currying
function sumThreeNumber(a) {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}


//Cada argumetno de la funcion va en un parentesis nuevo
console.log(sumThreeNumber(1)(2)(3)) // 6
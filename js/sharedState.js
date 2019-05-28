/*

Shared State significa que diferentes métodos trabajan a partir de una misma variable. 
Es cuando una variable o un objeto tiene el Scope compartido, de manera global o local

*/

//nuestro objeto "a" con el scope compartido para ambas funciones 
const a = {
    value: 2
}


//Mutando nuestra variable a

const addOne = () => a.value += 1

const timesTwo = () => a.value *= 2

addOne()
timesTwo()

console.log(a) // 6

timesTwo()
addOne()

console.log(a) // 5

//Vemos que el orden altera a nustro resultado final, ya que las funciones no estan
//trabajando con su porpios argumentos, sino que están mutando la misma



//----------------------- Hacemos las funcines piras para que no muten nuestro objeto

const b = {
    value: 2
}

const addOne = b => Object.assign({}, b, {value: b.value + 1})

const timesTwo = b => Object.assign({}, b, {value: b.value * 2})

addOne(b)
timesTwo(b)

console.log(addOne(timesTwo(b))) // 5

console.log(b.value) // 2

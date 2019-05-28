//Copiar y modificar objetos en JavaScript

let car ={
    color: 'red',
    year: 2009,
    km: 0
}

//Es el mismo objeto, apunta al mismo lugar de memoria
let newCar = car
console.log(car, newCar)
newCar.year = 2000

//Modifica las 2 variables car y newCar
console.log(car, newCar)


//Crea un nuevo objejo copiando los valores de la variable
let newCar2 = Object.assign({}, car)
console.log(car, newCar2)
newCar2.year = 2000

//Solo modifica la variable newCar2
console.log(car, newCar2)



//Otro objeto
let car2 ={
    color: 'red',
    year: 2009,
    km: 0,
    owner: {
        name: 'Gonzalo',
        age: 32
    }
}
let newCar22 = Object.assign({}, car2)
newCar22.owner.age = 33

//Vemos que solo se modifica el primer nivel del objeto
console.log(car2, newCar22)


/*
    Una manera de cambiarlo y no tener conflicto con éste nivel es..
*/


//Convierte una cadena de texto en un objeto de JavaScript
// JSON.parse()

//Convertir los objetos de JavaScript en un JSON (cadena de texto)
// JSON.stringify()

let newCar22Format = JSON.parse(JSON.stringify(car2))
car2.year = 2001
car2.owner.age = 35

console.log(car2, newCar22Format)
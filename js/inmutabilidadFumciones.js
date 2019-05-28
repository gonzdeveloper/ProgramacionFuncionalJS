
//Mutando
//Le vamos a "pegar" a ese obejeto los datos que le estamos pasando
//Estamos mutando esa lista
//En programación funcional no es recomendable mutar los objetos

const addToList = (list, item, quantity) => {
    list.push(
        {
            item,
            quantity
        }
    )

    return list
}


//Imutabilidad 
//Es preferiblke crear una copia de la lista, ya que no sabemos si en otro
//lado pueden requerirla

//Otro aspecto de las "funciones puras":
/*
- trabajan con los valores que reciben
- son predecibles
- y por lo general tratan de no mutar ninguna variable en nuestra aplicacion.
*/

const addToList = (list, item, quantity) => {
    //creo una nueva lista
    const newList = JSON.parse(JSON.stringify(list))

    newList.push(
        {
            item,
            quantity
        }
    )

    return newList
}
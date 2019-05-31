const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


//Funcion para agregar los atributos
/*
  inicializa el objeto en vacio
*/
// {
//   tag: 'h1',
//   attr: {
//     class: 'title'
//   }
// }
const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for (let i=0; i<keys.length; i++){
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }

  //genera un string con todos los elementos que estan en una lista
  const string = attrs.join('')

  return string

}
// "tag: h1 class="title"



//recibe un objeto y devuelve un string
const tagAttrs = obj => (content = '') =>
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

//Funcion para crear las etiquetas
const tag = t => {
  if(typeof t === 'string') {
    return tagAttrs({ tag: t })
  }
  return tagAttrs(t)
}


const tableRowTag = tag('tr')

//Las 2 siguientes funciones hace lo mismo la segunda usa currying and compose
//  ---> const tableRows = items => tableRowTag(tableCells(items))
const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')

const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash'}})('')

/*
<button class="btn btn-outline-danger" onclick="removeItem(index)">
<i class="fas fa-trash-alt"></i>
</button>
*/


let description = $('#description')
let carbs = $('#carbs')
let calories = $('#calories')
let protein = $('#protein')

let list = [
  // {
  //   description: 'Manzana',
  //   calories: 10,
  //   carbs: 10,
  //   protein: 10
  // }
]


//------------Validar datos ingresado no sean vacios
const validateInputs = () => {

  /*
  if (description.val() === ''){
    description.addClass('is-invalid')
  }
  */
  //En vez de usar lo anterior
  //usamos el operador ternario
  description.val() ? '' : description.addClass('is-invalid')
  carbs.val() ? '' : carbs.addClass('is-invalid')
  calories.val() ? '' : calories.addClass('is-invalid')
  protein.val() ? '' : protein.addClass('is-invalid')

  //Si no estan vacios los agrego a la lista
  if (description.val() && carbs.val() && calories.val() && protein.val()){
    add()
  }

}


//------------Luego de invalidar o no el campo vacio
//En el caso que el usuario empiece a escribir se tiene que limpiar el marco rojo
description.keypress(()=>{
  description.removeClass('is-invalid')
}) 
carbs.keypress(()=>{
  carbs.removeClass('is-invalid')
})
calories.keypress(()=>{
  calories.removeClass('is-invalid')
}) 
protein.keypress(()=>{
  protein.removeClass('is-invalid')
}) 



//ArrowFunctions
/*

  Definir funciones como constantes y no como functions se conoce
  en JavaScript como arrow function, aunque en términos más generales
  también las podemos encontrar como funciones lambda y es una característica
  introducida por EcmaScript

*/

const add = () => {
  const newItem = {
    description: description.val(),
    carbs: parseInt(carbs.val()),
    calories: parseInt(calories.val()),
    protein: parseInt(protein.val())
  }

  list.push(newItem)
  cleanInputs()
  updateTotals()
  //console.log(list)
  renderItems()
}


const updateTotals = () =>{
  let calories = 0, carbs = 0, protein = 0

  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein +=  item.protein
  })

  $('#totalCalories').text(calories)
  $('#totalCarbs').text(carbs)
  $('#totalProtein').text(protein)
}


const cleanInputs = () => {
  description.val('')
  carbs.val('')
  calories.val('')
  protein.val('')
}


const renderItems = () => {
  //no usamos ningún selector de id
  $('tbody').empty()

  list.map((item, index) => {

    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItems(${index})`
      }
    })(trashIcon)

    $('tbody').append(tableRow([item.description, item.calories, item.carbs, item.protein, removeButton]))
  })
}

const removeItems = (index) => {
  list.splice(index, 1)
  
  updateTotals()
  renderItems()
}
const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


let description = $('#description')
let carbs = $('#carbs')
let calories = $('#calories')
let protein = $('#protein')



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
    console.log("OK")
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
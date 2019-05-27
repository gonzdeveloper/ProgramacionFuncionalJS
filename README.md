Ejemplo de prueba de programacipon funcional con JS.

------------------------------------------

Las funciones puras siempre devuelven el mismo resultado cuando reciben los mismos parámetros. En cambio, otras funciones que dependen de factores externos (como el tiempo o una petición HTTP) no siempre pueden devolver el mismo resultado aunque reciban los mismos parámetros, incluso, pueden no necesitar recibir parámetros para ejecutarse correctamente.

Ejemplos de funciones puras:

const double = x => x*2
double(2) // siempre es 4
double(3) // siempre es 6

const isGreaterThan = (value, comparison) => value > comparison
isGreaterThan(5, 6) // siempre devuelve false
isGreaterThan(8, 6) // siempre devuelve true

Ejemplos de funciones que NO son puras:

const time = () => new Data().toLocalTimeString()
time() // siempre devuelve un resultado diferente

-----------------------------------------------

Objetos y Tipos de Memoria en JavaScript

Un objeto es una referencia a un espacio en memoria, cada vez que creamos un objeto, este se guarda en la memoria (no sabemos exactamente dónde) y podemos acceder a su valor gracias a las coordenadas.

Existen dos tipos de memoria: Stack y Heap.
La memoria Stack es mucho más rápida y nos permite almacenar los datos de forma ““ordenada”” y en JavaScript la utilizamos para guardar datos primitivos, como booleanos, números o strings. En cambio, los objetos utilizan la memoria Heap, una memoria que nos permite guardar grandes cantidades de información pero con un poco menos de velocidad.

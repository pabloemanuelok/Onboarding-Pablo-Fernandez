// Difficulty Level: Low

// Declaración de funciones
// Este primer ejercicio es para aprender a declarar una función.
// En este caso debes declarar una función nombrada llamada "add"
// que dentro de su cuerpo, debe ejecutar una instrucción que muestre
// el resultado de 100 x 20 en la consola .

// function add() {
//     console.log (100 * 20)
// }

// Llamar/ejecutar funciones.
// Ya tenemos la declaración, el siguiente paso es llamar/ejecutar la función
// "add". Ejecútalo y comprueba que el resultado se muestra en la consola.

// add()

// Ahora es el momento de agregar parámetros a nuestra función. Agrega dos parámetros y llámalos como
// quieras. Recuerda indicar dentro del cuerpo de la función donde irán esos parámetros.

// function add(num1, num2) {
//     console.log (num1 * num2)
// }

// Usando argumentos.
// Ya hemos agregado parámetros a la declaración de nuestra función, el siguiente paso es
// "pasarle argumentos". Para hacer esto, cree dos variables como la siguiente en el ejemplo:
// sea ​​número1 = 100;
// sea ​​número2 = 20;

// function add(num1, num2) {
//      console.log (num1 * num2)
// }

// add(100, 20)

// Con nuestra función nombrada configurada correctamente, es hora de cambiar el console.log
// del cuerpo de la función. Cree una variable de resultado dentro del cuerpo de la función
// que almacenará el resultado de 100 x 20 y haga que la función devuelva esa variable

// function add(num1, num2) {
//     let resultado = num1 * num2
//     return resultado
// }

// console.log(add(100, 20))

// Convierta la función nombrada del ejercicio anterior en una función anónima y llámela/ejecútela

// let add = function(num1, num2) {
//     let resultado = 100 * 20
//     return resultado
// }

// console.log(add())

// Dificultad Media

// Create a named function called "greet" that
// receives a string parameter representing a name, and
// displays a custom greeting using the provided name in the console.
// Call/run the function with your own name to verify that it works correctly.

//  function greet(name) {
//     console.log("Hola! " + name + " ¿Como te va?")
// }

// greet("Pablo")

// Crea una función anónima que

// recibe dos parámetros numéricos y

// devuelve el resultado de la multiplicación de ambos.

// Llama/ejecuta la función con dos valores diferentes y muestra el resultado a través de la consola.

// let multiplicacion = function(num1, num2) {
//     let resultado = num1 * num2
//     return resultado
// }

// console.log(multiplicacion(10, 20))

// Cree una función con nombre llamada "área" que

// recibe dos parámetros numéricos, uno que representa la base y el otro la altura de un triángulo.

// devolver su área.

// function area(num1, num2) {
//     let areaTriangulo = (num1 * num2) / 2
//     return areaTriangulo
// }

// console.log("El area del tringulo es: " + area(20, 30))

// Cree otra función con nombre llamada "perímetro" que

// recibe tres parámetros numéricos que representan cada uno de los lados de un triángulo, y

// devuelve el perímetro del triángulo.

// function perametro(num1, num2, num3) {
//     let perimetroTriangulo = num1 + num2 + num3
//     return perimetroTriangulo
// }

// console.log("El perímetro del triángulo es: " + perametro(20, 30, 40))

// Crea una  función que

// toma dos parámetros numéricos que representan el precio y la cantidad de un producto,

// y devuelve el precio total de la compra.

// Si el número de productos es mayor o igual a 10, ==> se aplica un descuento del 10% sobre el precio total.

// Si el número de productos es mayor o igual a 20, ==> se aplica un descuento del 20% sobre el precio total.

// Llame/ejecute la función con diferentes valores de precio y cantidad para verificar que funciona correctamente

// function compra(precio, cantidad) {
//   let total = precio * cantidad
//   let descuento

//   if( cantidad >= 10 && cantidad < 20 ) {
//         descuento = total * 0.1
//     } else if(cantidad >= 20) {
//         descuento = total * 0.2
//     } else {
//         descuento = 0
//     }

//     let totalFinal = total - descuento
//     return totalFinal
// }

// console.log (compra(1000, 9))
// console.log (compra(1000, 10))
// console.log (compra(1000, 20))

// Cree una función con nombre llamada isAnAdult que

// recibe un parámetro numérico que representa la edad de una persona, y

// devuelve un mensaje indicando si la persona es Adulto o no.

// Si la Edad es mayor o igual a 18 "Eres mayor de edad"

// Si la Edad es menor de 18 "No eres adulto"
// Llama a la función con diferentes valores de edad para verificar que funciona correctamente.

// Llame a la función con diferentes valores de edad para verificar que funciona correctamente.

// function isAnAdult(num) {

//     if (num >= 18 ) {
//         return "Eres mayor de edad"
//     }  else {
//         return "No eres adulto"
//     }
// }

// console.log(isAnAdult(18))
// console.log(isAnAdult(35))
// console.log(isAnAdult(15))

//Dificultad Alta

// Crea una función (declarala como quieras) que

// toma un parámetro numérico que representa el ingreso anual de una persona , y

// les devuelve el impuesto que deben pagar .

// Si Ingresos menores o iguales a $10,000, ==> impuesto del 10% de los ingresos.

// Si Ingresos mayores a $10,000 y menores o iguales a $20,000, ==> impuesto del 15% de los ingresos.

// Si Ingresos mayores a $20,000, ==> impuesto del 20% de los ingresos.

// Utilice condicionales anidados para implementar esta función.

// Llame/ejecute la función con diferentes valores de entrada para verificar que funciona correctamente.

// function ingresos(sueldo) {
//    let impuesto

//    if (sueldo <= 10000){
//     impuesto = sueldo * 0.1
//    } else if ( sueldo > 10000 && sueldo <= 20000){
//     impuesto = sueldo * 0.15
//    } else if (sueldo > 20000) {
//     impuesto = sueldo * 0.2
//    }
//    return impuesto

// }

// console.log(ingresos(10000))
// console.log(ingresos(15000))
// console.log(ingresos(100000))
// console.log(ingresos(1000))

// Cree una función (declárela como desee) para verificar un día que

// recibe un parámetro numérico y

// devuelve un mensaje indicando si es día hábil o no.

// Si el número es 1, 2, 3, 4, 5, mensaje: "Es un día hábil".

// Si el número es 6 o 7, mensaje: "Es fin de semana".

// Utilice la estructura de control de interruptores anidados para implementar esta función.

// Llame a la función con diferentes valores de día para verificar que funciona correctamente.

// function dias(diaNumero) {
//     let esDia

//     switch (diaNumero) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             esDia = "Es un día hábil"
//             break
//         case 6:
//         case 7:
//             esDia = "No es un dia habil"
//             break
//         default:
//             esDia = "Ingrese un dia de la semana del 1 al 7"
//     }
//     return esDia
// }

// console.log (dias(5))
// console.log (dias(7))
// console.log (dias(2))
// console.log (dias(6))
// console.log (dias(10))

// Crea un programa usando una función (declárala como quieras) que toma un parámetro que representa
// Información Personal (ingrésala por teclado).

// Primero se debe ingresar el Nombre , y

// si viene vacío ==> el programa debe detenerse y mostrar una consola. error con el mensaje
// "El nombre no puede estar vacío"

// Luego se le debe pedir al usuario que ingrese el Apellido y se debe validar como Nombre en el paso anterior.

// Finalmente se debe solicitar al usuario que ingrese la edad y también se debe validar .

// Una vez verificados todos los datos, la función debe guardar todos esos datos en un objeto
// con 3 propiedades : nombre, apellido y edad y mostrarlo a través de la consola.

// Para finalizar, la función debe ser llamada/ejecutada y probada con diferentes valores.

// function informacionPersonal(nombre, apellido, edad) {
//   if (!nombre) {
//     console.error("Nombre no puede estar vacio");
//     return;
//   }
//   if (!apellido) {
//     console.error("Apellido no puede estar vacio");
//     return;
//   }
//   if (!edad) {
//     console.error("Edad no puede estar vacia");
//     return;
//   }
//   let persona = {
//     nombre,
//     apellido,
//     edad,
//   };
//   console.log(persona);
// }

// informacionPersonal("pablo", "Fernandez", "24");
// informacionPersonal("Pablo", "Fernandez", "");
// informacionPersonal("Pablo", "", "24");
// informacionPersonal("", "Fernandez", "24");

// Crea un programa que se compone de 3 funciones (declaralas como quieras):

// Primera función de saludo: que toma un parámetro que representa un nombre y devuelve una cadena 
// “Hola, mi nombre es [parámetro]”

// 2da función:calcularAge: que toma dos parámetros que representan el año de nacimiento y el año actual. 
// Esta función devolverá el resultado del año actual menos el año de nacimiento.

// 3ª función: presente: llamar/ejecutar las otras dos funciones y ejecutar una alerta con la presentación del usuario

// Los datos del usuario deben ser ingresados ​​en pantalla y el resultado final también se muestra en pantalla.

function saludo(nombre){
    return "Hola, mi nombre es " + nombre
}
function calcularAge(añoNacimiento, añoActual){
    return añoActual - añoNacimiento
}
function presentacion() {
 
    let nombre = prompt("¿Como te llamas?");
    let añoNacimiento = prompt("¿En que año naciste?")
    let añoActual = prompt("¿Cual es el año actual?")
    let saludar = saludo(nombre)
    let edad = calcularAge(añoNacimiento, añoActual)

    alert(saludar + " y tengo "+ edad + " años")
}

presentacion()



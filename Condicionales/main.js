//Nivel Bajo

// Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2

//  let num1 = 4
//  let num2 = 5

// if ( num1 > num2) {
//     console.log("El numero mayor es: ", num1)
// } else {
//     console.log("El numero mayor es: ", num2)
// }

//Basado en el ejercicio 1, ahora modifica el bloque de la siguiente manera:

//Si num1 es mayor que num2, imprima num1 a través de la consola,

//si num2 es mayor, imprime num2 y finalmente

//si son iguales, imprima una cadena que diga "Los números son iguales"

// if ( num1 > num2) {
//     console.log("El numero mayor es: ", num1)
// } else if ( num1 < num2){
//     console.log("El numero mayor es: ", num2)
// } else {
//     console.log("Los numeros son iguales")
// }

// Con base en el ejercicio 1, crea un bloque condicional que evalúe si estas variables son iguales o no, de ser así imprime una cadena a través de la consola “Los números son iguales”, en caso contrario “Los números son diferentes”

// if ( num1 === num2) {
//     console.log("Los numeros son iguales")
// } else if(num1 !== num2){
//     console.log("Los numeros son distintos")
// }

// A partir del siguiente ejemplo, cree un bloque condicional que evalúe si una de estas variables es mayor que la otra; si es así, muestre “ La fecha [variable 1] es mayor que [variable 2] ” por consola, y, si son iguales, imprima “ Las fechas son iguales ”
// ¡Consejo! Utilice comillas invertidas para imprimir a través de la consola.

//                     dejar fecha1 = "2018-9-2"

//                     dejar fecha2 = "2023-7-5"

//                     La fecha 2023-7-5 es mayor que la fecha 2018-9-2

// let date1= new Date("2018-9-2")
// let date2= new Date("2023.7.5")

// if ( date1 > date2) {
//    console.log("La fecha 1 es mayor: ", date1)
// } else if( date1 < date2){
//    console.log("La fecha 2 es mayor: ", date2)
// }   else {
//     console.log("Ambas fechas son iguales")
// }

//Ahora intenta cambiar el valor de las variables. Al igual que en los ejercicios anteriores, se debe imprimir una cadena a través de la consola que diga si la fecha 1 es mayor que la fecha 2 o todo lo contrario.
//            ¡Consejo! Investiga cómo se comparan las cuerdas.

// if ( date1 > date2) {
//     console.log("La fecha ", date1, "es mayor a la fecha : ", date2)
//  } else {
//     console.log("La fecha ", date2, "es mayor a la fecha : ", date1)
//  }

// En este caso, crea un bloque condicional que evalúe cuál de los tres números almacenados en las variables es el mayor. Imprime una cadena a través de la consola que dice “El número [ ] es el más grande”

// let number1 = 5
// let number2 = 7
// let number3 = 9

// if (number1 > number2 && number1 > number3) {
//     console.log("El numero mas grande es: ", number1)
// } else if (number2 > number1 && number2 > number3) {
//     console.log("El numero mas grande es: ", number2)
// } else {
//     console.log("El numero mas grande es", number3)
// }

// Dificultad Medio

// Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:
// red: “The color of passion”
// blue: “The color of the sea.”
// green: “The color of nature”

// let color = prompt(" Pick between this colors: red, blue, green").trim().toLowerCase()

// switch (color) {
//     case "red" : console.log("The color of passion")
//     break
//     case "blue" : console.log("The color of the sea.")
//     break
//     case "green" : console.log("The color of nature")
//     break
//     default : console.log("I dont understand you")
// }

// Using a switch, create a program that allows you to enter on the screen:

// let num1 = parseInt(prompt("Ingrese el primer valor (número del 1 al 100):"))
// let num2 = parseInt(prompt("Ingrese el segundo valor (número del 1 al 100):"))
// let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division):").toLowerCase()

// let resultado

// switch (operacion) {
//     case "suma":
//         resultado = num1 + num2
//         console.log("La suma de " + num1 + " y " + num2 + " es " + resultado)
//         break
//     case "resta":
//         resultado = num1 - num2
//         console.log("La resta de " + num1 + " y " + num2 + " es " + resultado)
//         break
//     case "multiplicacion":
//     resultado = num1 * num2
//     console.log("La multiplicacion de " + num1 + " y " + num2 + " es " + resultado)
//         break
//     case "division":
//         resultado = num1 / num2
//         console.log("La division de " + num1 + " y " + num2 + " es " + resultado)
//         break
// }

// A partir de la siguiente estructura, cree un bloque condicional que
// recibe 2 objetos que representan personas con las propiedades:  nombre, edad, altura
// e imprimir por consola en el mismo console.log:
// ¿Cuál de las dos personas es más alta?
// ¿Cuál es el mayor?

// let persona1 = {
//     nombre : "Juan",
//     sexo : "Masculino",
//     edad : 55,
//     altura : 1.89,
// }
// let persona2 = {
//     nombre : "Marta",
//     sexo : "Femenino",
//     edad : 50,
//     altura : 1.75,
// }

// if (persona1.altura < persona2.altura && persona1.edad > persona2.edad) {
//     console.log( persona1.nombre + " es mas bajo/a pero mayor que " + persona2.nombre)
// }    else if (persona1.altura > persona2.altura && persona1.edad < persona2.edad){
//     console.log(persona1.nombre + "es mas alto/a pero menor que " + persona2.nombre )
// } else  {
//     console.log(persona1.nombre + " es mas alto/a y mayor que " + persona2.nombre)
// }

// Crea un programa que te permita ingresar en la pantalla:
// tu nombre, edad, altura y visión .
// e imprimir a través de la consola una cadena “ Estás calificado para conducir ”,
// Para ello la persona debe:
// Tener al menos 18 años.
// Mide más de 110 cm.
// Tener una visión de al menos 8 sobre 10.

// let nombre = parseInt(prompt("Ingrese su nombre"))

// let edad = parseInt(prompt("Ingrese su edad"))

// while (isNaN (edad)) {
//     edad = parseInt(prompt("Ingrese su edad con numeros"))
// }

// let altura = parseInt(prompt("Ingrese su altura en cm"))

// while (isNaN (altura)) {
//     altura = parseInt(prompt("Ingrese su altura en numeros"))
// }

// let vision = parseInt(prompt("Ingrese su nivel de vision entre 0/10"))

// while (isNaN (vision) || vision < 0 || vision > 10) {
//     vision = parseInt(prompt("Ingrese su vision en numeros entre 0 y 10"))
// }

// if (edad >= 18 && altura >= 110 && vision >= 8){
//     alert("Estás calificado para conducir")
// } else {
//     alert("No estas calificado para conducir")
// }

// Crea un programa que te permita ingresar tu edad en la pantalla e imprimirla en la pantalla si eres:
// infantil (0 a 12 años)
// adolescente (de 13 a 18 años)
// joven mayor (19 a 45 años)
// personas mayores (mayores de 45 años)
// ¿Es realmente tan viejo? (más de 100 espectáculos)
// ¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.

// let edad = parseInt(prompt("Que edad tienes?"))
// while (isNaN (edad)) {
//     edad = prompt("Dime tu edad en valores numericos")
// }

// if (edad >= 0 && edad <= 12) {
//     alert("Eres un infante")
// } else if (edad >= 13 && edad <= 18) {
//     alert("Eres un adolecente")
// } else if (edad >= 19 && edad <= 45) {
//     alert("Eres un joven mayor")
// } else if(edad >= 45 && edad <= 99 ){
//     alert("Eres una persona mayor")
// } else if(edad === 100) {
//     alert("¿En serio eres tan viejo?")
// } else {
//     alert("Deberias ya estar muerto💀")
// }

// Crea un programa que te permita ingresar solo números del 1 al 3 en la pantalla y luego cualquier otro dato numérico. Imprimir en pantalla :
// 1: “El número ingresado es [ ]”
// 2: “El doble del número ingresado es [ ]”
// 3: “Tres veces el número ingresado es [ ]”
// otro: “Ese valor no está permitido”
// ¡Consejo! Recuerde alerta ( ) para mostrar datos en la pantalla.

// let number = parseInt(prompt("Introduce un numero del 1 al 3"))
// while (isNaN (number) || number > 3 || number < 1) {
//     number = parseInt(prompt("Ese valor no esta permitido" + " (Introduce un numero del 1 al 3) " ))
// }
// let number1 = parseInt(prompt("Introduce un numero para multiplicarlo por el anterior"))

// if ( number == 1) {
//     alert("El numero ingresado es " + number1)
// } else if ( number == 2) {
//     alert("El doble del numero ingresado es " + number1 * 2)
// }  else {
//     alert("Tres veces el numero ingresado es " + number1 * 3)
// }

// Dificultad: alta

// Cree un programa que permita ingresar los siguientes datos en pantalla:

// Nombre del cliente ,  Pase (vip o normal), Entrada (sí o no).

let nombreDelCliente = prompt("Ingrese su nombre aquí");
nombredelCliente = esNumero(nombreDelCliente);

function esNumero(num) {
  while (!isNaN(num)) {
    num = prompt("No se admiten numeros, intente nuevamente");
  }
  return num;
}

let pase;
let entrada;
let quiereUsarla;
let quiereComprar;
let dinero;

if (nombreDelCliente.toLowerCase() === "pablo") {
  alert("Hola " + nombreDelCliente + " bienvenido!");
} else {
  pase = prompt("¿Tiene pase vip?");
  pase = esNumero(pase);
}
if (pase.toLowerCase() === "si") {
  alert("Tienes vip " + nombreDelCliente + " bienvenido!");
} else {
  entrada = prompt("¿Tienes entrada?");
  entrada = esNumero(entrada);
  if (entrada.toLowerCase() === "si") {
    quiereUsarla = prompt("¿Quieres usarla?");
    quiereUsarla = esNumero(quiereUsarla);
    if (quiereUsarla.toLowerCase() === "si") {
      alert("Tienes entrada " + nombreDelCliente + " bienvenido!");
    } else {
      alert("No quieres usarla " + nombreDelCliente + " hasta Luego!");
    }
  } else {
    quiereComprar = prompt("¿Quieres comprar una entrada?");
    quiereComprar = esNumero(quiereComprar);
    if (quiereComprar.toLowerCase() === "si") {
      dinero = prompt("Cuanto dinero tienes disponible");
      while (isNaN(dinero)) {
        dinero = prompt("Este valor no esta permitido(Ingrese Numeros");
      }
      if (dinero >= 1000) {
        alert("Podes comprar una entrada " + nombreDelCliente + " bienvenido!");
      } else {
        alert(
          "No tienes suficiente dinero " + nombreDelCliente + " hasta Luego!"
        );
      }
    } else {
      alert(
        "No quiere comprar una entrada " + nombreDelCliente + " hasta Luego!"
      );
    }
  }
}

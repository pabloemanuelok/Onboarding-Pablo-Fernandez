//Nivel Bajo

// Usando un bucle "for", cree un programa que permita el ingreso de un número entre 1 y 100 a través de un mensaje , luego imprima a través de la consola todos los números que están entre el número ingresado y 0 (es decir, en orden descendente) .

// Supongamos que el número introducido es 5. Este sería el resultado:

// 5
// 4
// 3
// 2
// 1
// 0

// let number = parseInt(prompt("ingrese un numero del 1 al 100"));

// if (number >= 0 && number <= 100)
//     for (let i = number; i >= 0; i--) {
//     console.log (i)
//     } else {
//         console.log ("El numero salio del rango")
//     }

// Usando un bucle "for", cree un programa que permita la entrada de un número a través de un mensaje
// entre 1 y 10, y muestre a través de la consola su tabla de multiplicar (solo los primeros 10 múltiplos).

// Supongamos que el número ingresado es 5. Este sería el resultado:

// 1x5=5
// 2x5=10
// 3x5=15
// 4x5=20
// 5x5=25
// 6x5=30
// 7x5=35
// 8x5=40
// 9x5=45
// 10x5=50

// let number = parseInt(prompt("ingrese un numero del 1 al 10"));
// let resultado

// if (number >= 0 && number <= 10)
//     for (let i = 0; i <= 10; i++) {
//     resultado = number * i
//     console.log ( i + "x" + number + "=" + resultado)
//     } else {
//         console.log ("El numero salio del rango")
//     }

// Usando un bucle " while ", cree un programa que permita la entrada de números a través de un mensaje.
//  Los números deben sumarse (acumularse) en una variable resultante. La entrada de números finalizará
//  cuando el usuario ingrese un 0. Al final, muestre el valor de la variable suma a través de la consola.

// Supongamos que ingresó 1, luego 3 y luego 0. Este sería el resultado: 4

// let suma = 0

// while (true) {
//     let number = parseInt(prompt('Ingrese un nuevo numero a sumar'))
//     suma += number
//     if (number === 0) {
//         break
//     }
// }
// console.log("Este es el resultado: " + suma)

// Usando ahora un bucle "do while" y siguiendo las mismas instrucciones del ejercicio
// anterior, visualiza en la consola, el valor de la variable que acumula la suma de los números ingresados.

// Supongamos que ingresaste 1, luego 3 y luego 0. Este sería el resultado: 4

// ¡Consejo! use comillas invertidas para esto.

// let suma = 0;
// let numero;

// do {
//     numero = parseInt(prompt("Ingrese un número: "));
//     suma += numero;
// } while (numero !== 0);

// console.log(`La suma total es ${suma}`);

// Usando un bucle "for in", crea un objeto con al menos 5 propiedades, haz un programa que
// recorra dicho objeto y solo muestre todas las claves de sus propiedades en la consola.

// En la consola debería verse así:

// nombre

// apellido

// origen

// estudios

// let persona = {
//     nombre : "Pablo",
//     apellido : "Fernandez",
//     origen : "Argentina",
//     estudios : "Secundario"
// }

// for (const key in persona) {
//     console.log(key)
// }

// ​​​​​​​Usando un bucle "for in", cree un programa que se ejecute a través del
// objeto creado en el ejercicio anterior y solo muestre los valores de cada una de las claves en la consola.

// let persona = {
//     nombre : "Pablo",
//     apellido : "Fernandez",
//     origen : "Argentina",
//     estudios : "Secundario"
// }

// for (const key in persona) {
//     console.log(persona[key])
// }

// Usando el bucle que consideras, vamos a utilizar la variable que almacenó la suma de los números en el
// ejercicio 3 como "número secreto". El nuevo programa permitirá ingresar números a través de un mensaje
// hasta que el número ingresado sea igual al guardado en la variable del ejercicio #3.

// Si el valor ingresado es mayor que el número "secreto", notifica al usuario a través de la consola
// ("el número ingresado es mayor que el secreto", lo mismo si el valor es menor.

// Así sucesivamente hasta que el usuario adivine el número secreto. Finalmente, muestra un mensaje de
// felicitación en pantalla y te indica cuántos intentos has realizado
// ("¡Has acertado! El número secreto era <número> y has hecho <x> intentos"

// let numberSecret = 3
// let intentos = 0
// while (true) {
//     let number = parseInt(prompt("Ingrese el número secreto"))
//      intentos++
//     if (numberSecret === number ){
//         alert("¡Has acertado! El número secreto era " + number + " y has hecho " + intentos + " intentos")
//         break
//     } else if (number > numberSecret) {
//         alert("El número ingresado es mayor que el secreto")
//     }   else {
//         alert("El número ingresado es menor que el secreto")
//     }
// }

// Usando el bucle que consideres correcto, crea un programa que reciba un número a
// través de un mensaje y muestre todos sus divisores (divisores)  a través de la consola.

// Consejo : DIVISORES/DIVISORES: son todos números naturales que dividen exactamente a
// otro número natural. Ejemplo: “Los divisores de '15' son: 1, 3, 5 y 15. (La división de '15' entre
// cualquiera de estos números es exacta)

// Supongamos que se ingresó 50. Este sería el resultado 50, 25, 10, 5, 2, 1 ¡
// Consejo! recordar o investigar al operador %

// let numero = parseInt(prompt("Ingrese un número:"));

// console.log("Los divisores de " + numero + " son: " );

// for (let i = numero; i > 0; i--) {
//     if (numero % i === 0) {
//         console.log(i);
//     }
// }

// Teniendo en cuenta la función de timbre, crea un bucle (el que consideres) que muestre una cadena a
// través de la consola que a su vez concatene la cadena que devuelve la función tantas veces como el número
// que el usuario ingresa en el teclado.

// Por ejemplo, si el usuario ingresa el número 5, el resultado debería ser:
// Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

// function campana() {
//     let repeticiones = parseInt(prompt("Veces que quiere sonar la campana"));
//     let resultado = ""

//     for (let i = 0; i < repeticiones ; i++) {
//         resultado += "Ding Dong, "

//     }
//     return resultado
//  }

//  alert(campana())

// Partiendo de las constantes dateLimit y fechas , haz un bucle (el que consideres) que muestre
// en la consola las fechas del array que sean mayores o iguales a la fecha almacenada en la constante
// dateLimite .

// límite de fecha constante = "1997-8-3"

// fechas constantes = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// const dateLimit = "1997-8-3"
// const date = ["1984-18.2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

// for (const key in date) {
//     if (dateLimit <=(date[key])) {

//     }
// }

// Usando un bucle "for of", cree una matriz de cadenas con colores e imprima cada
// uno de los colores incluidos en la matriz a través de la consola.

// En la consola debería verse así (por ejemplo):

// Rojo

// Verde

// Azul

// Violeta

// Marrón

// Negro

// Blanco

// let colores =  ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"]

// for (let color of colores) {
//     console.log(color)
// }

// Ahora toma como referencia el bucle del ejercicio anterior y colócalo dentro de una
// función para que realice la misma tarea pero pueda reutilizarse tantas veces como sea
// necesario sin tener que reescribir el código del bucle.

// function forOf(array) {
//     for (let elem of array) {
//         console.log(elem)
//     }
// }

// forOf(["Pablo", "Emanuel", "Fernandez", "24", "Cordoba"])

// Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que recorra ese
// arreglo y muestre el doble de cada uno de los elementos, en la consola.

// En la consola debería verse así:

// el número es 5 y su doble es 10
// el número es 7 y su doble es 14
// el número es 1 y su doble es 2
// el número es 3 y su doble es 6
// el número es 50 y su doble es 100

// let numeros =[10, 20, 30, 40, 50]
// for (const numero of numeros) {
//     console.log("El numero es " + numero + " y su doble es " + numero * 2)
// }

// Usando un bucle "for of", crea un arreglo con 5 números y haz un programa que recorra
// ese arreglo y muestre el doble de cada uno de los elementos, en la consola.

// En la consola debería verse así:

// el número es 5 y su doble es 10
// el número es 7 y su doble es 14
// el número es 1 y su doble es 2
// el número es 3 y su doble es 6
// el número es 50 y su doble es 100

// Usando el bucle que creas correcto crea un array con al menos 4 objetos con 4 propiedades,
// cada uno de esos objetos creados debe representar a un miembro de un grupo familiar
// (pueden ser personas ficticias).

// Luego haz un programa (al decir programa la intención es que no sea solo el bucle, sino
//     una función que contenga el bucle) que muestre un mensaje de presentación para cada
//     elemento del array a través de la consola.

// En la consola debería verse como el ejemplo.

// Hola, soy María López (madre) y tengo 40 años.
// Hola, soy Juan Perez (padre) y tengo 38 años.
// Hola, soy Romina Perez (hija) y tengo 13 años.
// Hola, soy Tomás Perez (hijo) y tengo 10 años.

// Modelo de objetos

// {nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre'}


// function presentacion(){
//     let familiares = [
//         { nombre: "Mercedes", apellido: "Casini", edad: 48, miembro: "Madre" },
//         { nombre: "Guillermo", apellido: "Fernandez", edad: 48, miembro: "Padre"},
//         { nombre: "Isabella", apellido: "Fernandez", edad: 7, miembro: "Hermana"},
//         { nombre: "Agustin", apellido: "Fernandez", edad: 13, miembro: "Hermano"},
//        ]
//     for (let i = 0; i < familiares.length; i++) {
//         console.log(`Hola, soy ${familiares[i].nombre} ${familiares[i].apellido} (${familiares[i].miembro}) y tengo ${familiares[i].edad} años.`)
//         }
// }

// presentacion()

// dificultad alta

// Utilizando el bucle que consideres, crea un programa que permita el ingreso de números en la pantalla a 
// través de un aviso y

// calcula la suma de los números pares por un lado y

// los números impares por el otro.

// La entrada de datos finaliza cuando el usuario ingresa un 0. 

// En la consola debería verse así (por ejemplo):

// Número par: 38

// Números impares 30

// function sumaParesImpares() {
//     let numero = parseInt(prompt("Ingrese un número"))
//     let sumPares = 0
//     let sumImpares = 0

//     while (numero !== 0) {
//         if (numero % 2 === 0) {
//             console.log("El número es par")
//             sumPares += 1
//         } else {
//             console.log("El número es impar")
//             sumImpares += 1
//         }
//         numero = parseInt(prompt("Ingrese un número"))
//     }

//     console.log(`La suma de los pares es: ${sumPares}`)
//     console.log(`La suma de los impares es: ${sumImpares}`)
// }

// sumaParesImpares()

// Usando el bucle que creas que es correcto, crea una matriz de 10 números y crea 
// un programa que imprima el número más grande de la matriz en la pantalla.


// function numeroMasGrande() {
//     let numeros = []
//     for (let i = 0; i < 10; i++) {
//         numeros.push (parseInt(prompt("ingrese un numero")))
//     }
        
//     let masGrande = numeros[0]
//     for (let i = 0; i < numeros.length; i++) {
//         const element = numeros[i];
//         if (element >= masGrande) {
//             masGrande = element
//         }
//     }
//     return masGrande
// }

// console.log (numeroMasGrande())
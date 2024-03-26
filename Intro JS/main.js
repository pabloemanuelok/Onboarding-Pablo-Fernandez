//Dificultad baja//

// - 1)Crea una variable llamada myName y almacena tu nombre en ella

// let myName = "Pablo"

// console.log(myName)

// - 2)Cree una variable llamada myLastName y almacene su apellido en ella.

// let myLastName = "Fernandez"


// - 3)Crea una variable llamada myAge y guarda tu edad en ella.

// let myAge = 24

// - 4)Crea una variable llamada myPet y guarda el nombre de tu mascota en ella. Si no tienes mascota, 
// puedes inventar un nombre.

// let myPet = "Pantera"

// - 5)Crea una variable llamada petAge y guarda la edad de la mascota en ella.

// let petAge = 5

// - 6)Cree una variable llamada nombre completo y almacene la concatenación de miNombre y miApellido en ella.
// 
// let nombreCompleto = myName + " " + myLastName

// - 7)Crea una variable llamada PresentationText y guarda en ella un texto compuesto por todas las variables 
// creadas hasta el momento.

// let presentationText = "Hi, my name is " + nombreCompleto + " and i am " + myAge + " years old." + " My pet is called " + myPet + " and she is " + petAge + " years old"

//Dificultad Media

// 1)Cree una variable sumAges, restAges, productAges, divisionAges y calcule sus respectivas operaciones con las variables myAge y agePet.

// let sumAges = myAge + petAge

// let restAges = myAge - petAge

// let productAges = myAge * petAge 

// let divisionAges = myAge / petAge

// 2)Cree un objeto llamado estudiante con un mínimo de 5 propiedades, muestre dicho objeto usando console.table() y también muestre cada una de las propiedades del objeto por separado a través de la consola.

// let estudiante = {
    // nombre : "Pablo",
    // apellido : "Fernandez",
    // edad : 24,
    // equipo : "River Plate" ,
    // estadoCivil : "soltero"
// }

// console.table (estudiante)

// console.log (estudiante.nombre)
// console.log (estudiante.apellido)
// console.log (estudiante.edad)
// console.log (estudiante.equipo)
// console.log (estudiante.estadoCivil)
// 
// 3)Crea un objeto llamado pet con un mínimo de 5 propiedades, 
// muestra dicho objeto usando console.table() y también muestra cada una de las 
// propiedades del objeto por separado a través de la consola.

// let pet = {
    // nombre : "Pantera",
    // tipo : "Gato",
    // sexo : "Hembra",
    // edad : 5,
    // hobbie : "Arañar Muebles" ,
// }

// console.table (pet)

// console.log (pet.nombre)
// console.log (pet.tipo)
// console.log (pet.sexo)
// console.log (pet.edad)
// console.log (pet.hobbie)

//4)Cree un arreglo llamado frutas con un mínimo de 5 elementos y muestre el arreglo
//  completo en la consola y también muestre cada uno de los elementos por separado en la consola.

// let fruits = ["banana", "kiwi", "pera", "manzana", "durazno"]

// console.table (fruits)
// 
// console.log (fruits[0])
// console.log (fruits[1])
// console.log (fruits[2])
// console.log (fruits[3])
// console.log (fruits[4])

//Dificultad Alto

//1)Utiliza un prompt que permite ingresar una edad en pantalla y compararla con el número 18, 
// una vez hecho esto guarda el resultado en una variable llamada IamAdult y muestra un mensaje en la consola 
// que dice: "Soy
//un adulto" (y el valor de la variable). 

//let iAmAdult = prompt ("Porfavor ingrese aqui su edad")

//let edad = iAmAdult >= 18

//console.log ( edad + " Soy un adulto " + iAmAdult )

//2)Crea un arreglo llamado "números" con un mínimo de 5 elementos y muestra el arreglo completo y 
// cada uno de los elementos por separado en la consola.

// let number = [1, 2, 3, 4, 5]

// console.log (number)

// console.log (number[0])
// console.log (number[1])
// console.log (number[2])
// console.log (number[3])
// console.log (number[4])

//3)Crea un arreglo llamado "familia" con un mínimo de 5 objetos y muestra el arreglo 
// completo y cada uno de los elementos por separado en la consola.

// let family = [
    // {nombre : "Mercedes", apellido : "Casini", edad : 48, equipo : "River Plate", parentezco : "Madre" },
    // {nombre : "Guillermo", apellido : "Fernandez", edad : 49, equipo : "Instituto", parentezco : "Padre" }, 
    // {nombre : "Agustin", apellido : "Fernandez", edad : 18, equipo : "Talleres", parentezco : "Hermano"},
    // {nombre : "Isabella", apellido : "Fernandez", edad : 7, equipo : "No tiene", parentezco : "Hermana"},
    // {nombre : "Susana", apellido : "Torres", edad : 68, equipo : "River Plate", parentezco : "Abuela"},
// ]

// console.table (family)

// 4)Crea una variable llamada "randomText" formando una frase con el segundo elemento del arreglo de frutas, 
// el cuarto elemento del arreglo de números y la primera propiedad del quinto objeto del arreglo de familia.

let randomText =  ( "El " + fruits[1] + " de " + number[3] + " kilogramos fue comido por " + family[4].nombre )

console.log (randomText)
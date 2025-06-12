/*
User profile
    Write a program that prompts a user for their data: 
    username, age, and a list of their favorite movies. 
    Store the information and then showcase it in the 
    console. Take note that the output for the films 
    should add a small message like: 'The film {film} 
    is one of my favorites'.
    1.- Username, edad y un lista de peliculas favoritas
    2.- Utilizar los prompt necesarios para que el usuario ingrese su información
    3.- Ocupando un array vamos a almacenar las peliculas de un usuario
    4.- Mostrar en consola la información del usuario, 
    donde cada pelicula debe de tener un mensaje como este:
    The film {film} is one of my favorites
*/
const username = prompt("Hola, Ingresa tu nombre de usuario");
const age = prompt("Ahora ingresa tu edad");
const favoriteMovies = [];
let counter = 0;

//Primero vamos a pedir 5 peliculas
alert("A continuación te vamos a pedir tus 5 pelicuas favoritas");
for(let i = 0; i < 5; i++){
    //Los strings dentro de `` (backtics) se conocen como string literal,
    //Esto permite concatenar variables y texto de una forma más sencilla y legible
    //Su sintaxis es similar a la de de %d,%f,%s de c, solo que en esta se pone entre las llaves de
    //${} la variable que se va a imprimir, en cambio en c va hasta el final de lo que se imprime
    //Ejemplo del uso de las backtics
    favoriteMovies.push(prompt(`Ingresa la pelicula número ${i + 1}`));
    //Ejemplo de c: printf("Ingrese la pelicula numero %d",i);
    //Ejemplo de python 
}
console.log(`Hola soy ${username}, tengo ${age} años y mis
    peliculas favoritas son: `);

while(counter < favoriteMovies.length){
    console.log(`Mi pelicula favorita número ${counter + 1} es ${favoriteMovies[counter]}`);
    counter++;
}
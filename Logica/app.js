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
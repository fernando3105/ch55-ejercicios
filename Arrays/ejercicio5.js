/*
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

1.- Se crea un arreglo vacio donde se van a poner los multiplos
2.- Se crea un ciclo for donde su condición de parada sea el numero de iteraciones
3.- se hace un push al arreglo del número por el número de iteración
4.- Se devuelve el arreglo de los multiplos
*/

function arrayMultiplos(numero, iteraciones){
    let arregloMultiplos = [];
    numero = parseInt(numero);
    iteraciones = parseInt(iteraciones);
    for (let i = 0; i < iteraciones; i++){
        arregloMultiplos.push(numero * (i + 1));
    }
    return arregloMultiplos;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));
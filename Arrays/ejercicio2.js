/*
Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

1.- Se le pide al usuario que ingrese un número
2.- Se divide el número entre 2 y se almacena en una variable
3.- Se crea un array vacio
4.- Se hace un push al array vacio de la mitad del número
5.- Se repite el paso anterior
6.- Se imprime el array con las dos mitades
*/

function numDiv(n){
    let mitadNumero = n / 2;
    let mitades = [];
    for (let i = 0; i < 2; i++){
        mitades.push(mitadNumero);
    }
    return mitades;
}

const numeroUsuario = prompt("Ingrese un número para dividir en mitades");
console.log(numDiv(numeroUsuario));


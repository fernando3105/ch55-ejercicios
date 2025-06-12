/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
1.- Se le pide al usuario un número al que quiere hallar su factorial
2.- Se hace una función recursiva para hallar el factorial
3.- Se recuerda que el factorial de n! = 1 * 2 * 3 * ... * n - 1 * n
4.- Devolver el resultado

Una función recursiva es una función que se llama a ella misma y necesita una condición de parada para no generar un bucle infinito
 */

function factorial(n){
    if ((n === 0) || (n == 1)){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
    
}

const numeroUsuario = prompt("Ingresa el número del cual quieres saber su factorial");
const factorialNumero = factorial(numeroUsuario);
console.log(`El factorial del número: ${numeroUsuario} es: ${factorialNumero}`);
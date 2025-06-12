/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript 
functions/structures you've seen before, determine and output the highest of those numbers.

1.-Pedir los 10 números y guardarlos en un array
2.-Usar sorted para ordenar los números de mayor a menor 
3.-Imprimir el número mayor
*/

//const numbers = [4,2,8,3,9,0];
/*let highestNumber = 0;
for(let i = 0; i < numbers.length; i++){
    
    if(numbers[i] > highestNumber){
        highestNumber = numbers[i];
    }
}
*/

function highestNumber(numberArray){
    let auxHighestNumber = 0;
    for (let i = 0; i < numberArray.length; i++){
        if(numberArray[i] > auxHighestNumber){
            auxHighestNumber = parseInt(numberArray[i]);
        }
    }
    return auxHighestNumber;
}

function userNumbers(n){
    let auxUserNumbers = [];
    for(let i = 0; i < n; i++){
        auxUserNumbers.push(parseInt(prompt("Ingrese un número")));
    }
    return auxUserNumbers;
}

let numbers = userNumbers(10);
let numeroMasAlto = highestNumber(numbers);
console.log(numeroMasAlto);
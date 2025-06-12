/*
Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual 

1.- 100 numeros
2.- Crear un bucle que recorra los 100 números
3.- Si el número es múltiplo de 3, imprime "Fizz"
    3.1 .- Ocupar la expresión numero % 3
    3.2.- es verdadero si el modulo es igual a 0
4.- Si el número es múltiplo de 5, imprime "Buzz"
    4.1 .- Ocupar la expresión numero % 3
    5.2.- es verdadero si el modulo es igual a 0
5.- Si el número es mútiplo de 3 y 5, imprime "FizzBuzz"
    5.1 .- Ocupar la expresión numero % 3 && numero % 5
    5.2.- es verdadero solo y solo si el modulo de ambas es igual a 0
6.- En caso de no ser multipli de ninguno imprime el número
*/

//Descomentar para hacer el fizzbuzz del 1 al 100 de manera manual
/* 
let counter = 1;

do{

    if(!(counter % 3) && !(counter % 5)){
        console.log(`El número ${counter} es FizzBuzz`);
    }
    else if(!(counter % 3)){
        console.log(`El número ${counter} es Fizz`);
    }
    else if(!(counter % 5)){
        console.log(`El número ${counter} es Buzz`);
    }
    else {
        console.log(`El número ${counter} no es ninguna de las categorias`);
    }
    counter++;
}while(counter <= 100 );
*/

//Función para hacer el fizzbuzz con un ciclo for
function fizzBuzzFor(n){
    for (let i = 0; i < n; i++){
        if(!((i + 1) % 3) && !((i + 1) % 5)){
            console.log(`El número ${i} es FizzBuzz`);
        }
        if(!((i + 1) % 3)){
            console.log(`El número ${i} es Fizz`);
        }
        if(!((i + 1) % 5)){
            console.log(`El número ${i} es Buzz`);
        }
        else {
        console.log(`El número ${i} no es ninguna de las categorias`);
        }
    }
}

function fizzBuzzDoWhile(n){
    let counter = 1;
    do{
        if(!(counter % 3) && !(counter % 5)){
            console.log(`El número ${counter} es FizzBuzz`);
        }
        else if(!(counter % 3)){
            console.log(`El número ${counter} es Fizz`);
        }
        else if(!(counter % 5)){
            console.log(`El número ${counter} es Buzz`);
        }
        else {
            console.log(`El número ${counter} no es ninguna de las categorias`);
        }
        counter++;
    }while(counter <= n );
}

const fizzBuzz = (counterNumber) => {
    let counter = 1;
    do{
        if(!(counter % 3) && !(counter % 5)){
            console.log(`El número ${counter} es FizzBuzz`);
        }
        else if(!(counter % 3)){
            console.log(`El número ${counter} es Fizz`);
        }
        else if(!(counter % 5)){
            console.log(`El número ${counter} es Buzz`);
        }
        else {
            console.log(`El número ${counter} no es ninguna de las categorias`);
        }
        counter++;
    }while(counter <= counterNumber);
    
};

//const iteraciones = prompt("Ingrese hasta que número quiere evaluar el fizzbuzz");
console.log("50 veces");
fizzBuzz(50);
console.log("200 veces");
fizzBuzz(200);
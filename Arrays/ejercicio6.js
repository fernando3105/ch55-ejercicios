/*
 Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
1.- Se crean dos contadores
2.- Se recorre el arreglo en un ciclo for
3.- Se evalua cada elemento del arreglo, si es positivo se aumenta un contador y si es negativo se aumenta el otro contador
4.- Se compara si el contador de positivos es mayor que el de negativos
5.- Si lo es la dominancia es positiva
6.- De lo contrario la dominancia es negativa
 */

function positiveDom(numberArray){
    let contadorPositivos = 0;
    let contadorNegativos = 0;

    for(let i = 0; i < numberArray.length; i++){
        if(numberArray[i] < 0){
            contadorNegativos++;
        }
        else {
            contadorPositivos++
        }
    }
    if(contadorPositivos > contadorNegativos){
        return true;
    }
    else {
        return false;
    }
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));
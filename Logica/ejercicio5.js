/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1.- Recibir un string por parte del usuario
2.- Ignorar signos de puntuación, espacios y letras mayusculas
3.- Verificar si es un palindromo, es decir que se escriben igual al derecho y al revés
 */

const fraseUsuarioBruto = prompt("Ingrese una frase o una oración para ver si es palindromo");

const fraseUsuario = fraseUsuarioBruto.toLowerCase();

let textoLimpio = "";
for (let i = 0; i < fraseUsuario.length; i++){
    let letra = fraseUsuario[i];
    if((letra >= 'a' && letra <='z') || (letra >= '0' && letra <= '9')){
        textoLimpio += letra;
    }
}

var textoInvertido = "";
for(let i = textoLimpio.length - 1; i >= 0; i-- ){
    textoInvertido = textoInvertido + textoLimpio[i];
}

if(textoLimpio === textoInvertido){
    console.log("Es un palindromo");
}
else {
    console.log("No es un palindromo");
}
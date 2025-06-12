/*
 Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".

1.- Pedir al usuario cuantos segundos quiere para que llegue la alarma
2.- Convertir los segundos a milisegundos multiplicando x1000 ya que ms = 1*10^-3 s, entonces ms = 1*10^3 s
3.- Usar setTimeOut(); en cual lleva dos parametros, funcion y delay la función es lo que se va a ejecutar despues del delay y delay es el tiempo de pausa
 */

function mensajeDeAlarma(n){
    console.log(`Ya han pasado los ${n} segundos que pediste`);
}

const segundos = prompt("En cuantos segundos quieres que suene tu alarma");
let milisegundos = segundos * 1000;
setTimeout(() => {mensajeDeAlarma(segundos)}, milisegundos);
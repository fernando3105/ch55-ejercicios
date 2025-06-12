/*
Display online status for a list of users.
 

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

1.- Ver de que tamaño es el array de los usuarios conectados
2.- Si el tamaño es 0, entonces no hay usuarios conectados
3.- Si el tamaño es 1, solo hay un usuario conectado y se imprime su nombre
4.- Si el tamaño es 2, hay dos usuarios conectados y se imprimen sus nombres
5.- Si el tamaño de usuarios conectados es mayor que 2 se imprimen los primeros dos usuarios y se pone cuantos más hay en linea
6.- se imprime los usuarios en linea 
 */

function onlineStatus(users) {
  const total = users.length;

  if (total === 0) {
    return 'no one online';
  } 
  else if (total === 1) {
    return `${users[0]} online`;
  } 
  else if (total === 2) {
    return `${users[0]} and ${users[1]} online`;
  } 
  else {
    return `${users[0]}, ${users[1]} and ${total - 2} more online`;
  }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

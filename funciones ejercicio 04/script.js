var numerouno = parseInt(prompt("Escribe un número"));
var numerodos = parseInt(prompt("Escribe otro número"));
alert(numerouno/numerodos);
function divisionNumeros(numerouno,numerodos) {
      alert(numerouno/numerodos);
    }
  while (numerodos != 0){
    numerouno = parseInt(prompt("Escribe un número"));
    numerodos = parseInt(prompt("Escribe otro número"));
    divisionNumeros(numerouno,numerodos);
  }
  if(numerodos == 0){
    console.log("Ha terminado");
  }
  /*Escribe un programa que pida al usuario dos números. 
      Usa esos 2 números en una función que divide el primero por el segundo
      y devuelve el resultado. Muestra el resultado que devuelve la función 
      en un alert. Después vuelve a pedir los números y hacer todo otra vez 
      hasta que el usuario introduzca un 0 como segundo número.*/
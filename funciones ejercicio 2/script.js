let numerouno = parseInt(prompt("Escribe un número"));
let numerodos = parseInt(prompt("Escribe otro número"));
function comparaNumeros(numerouno,numerodos) {
    if(numerouno > numerodos){
      console.log("true");
      console.log("El primer número es más grande");
    }else {
      console.log("false");
      console.log("El primer número no es más grande");
    }
  }
  comparaNumeros(numerouno,numerodos);
  /* Escribe una función a la que le damos dos números 
    y que devuelva true si el primer número es más grande 
    que el segundo número y fsalse  el caso contrario. 
    Pide dos números al usuario, y pásalos a la función. 
    Muestra en consola “El primer número es más grande” o 
    “El primer número no es más grande”*/
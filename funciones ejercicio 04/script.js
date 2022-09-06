var numerouno = parseInt(prompt("Escribe la cantidad en euros"));
var moneda = prompt("Escribe la moneda a la que quieres pasar los euros")
function cambioMoneda(numerouno,moneda) {
     switch(moneda){
        case "libras":
            alert(numerouno*0.86);
        case "yenes":
            alert(numerouno*129.852);
        case "dólares":
            alert(numerouno*1.28611);
     } 
    }
    cambioMoneda(numerouno,moneda);
  /* Crea un aplicación que nos convierta una cantidad de euros 
      introducida por teclado a otra moneda, estas pueden ser a dólares, yenes o libras. 
      El método tendrá como parámetros, la cantidad de euros 
      y la moneda a pasar que será un string. Este no devolverá ningún valor, 
      mostrará un mensaje indicando el cambio.
      
            a. 0.86 libras es un 1 €
            b. 1.28611 $ es un 1 €
            c. 129.852 yenes es un 1 € -*/
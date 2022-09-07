var numerouno = parseInt(prompt("Escribe un número"));
var numeroinicial = 0
let parrafo = document.querySelector("num");
parrafo.innerHTML = `<p id="num">numerouno</p>`;
button = document.querySelector("#btn");
button.addEventListener("click", sumaNumero);
function sumaNumero(numerouno){
p = document.querySelector("#num");
p.innerHTML = parseInt(p.innerHTML) + numerouno;
}

    sumaNumero(numerouno);
  /* Pide por prompt un número. Recójelo en una variable. 
    Pinta un párrafo en el html en el que inicialmente se mostrará ese valor, 
    y un botón debajo. El botón ejecutará una función que recibirá ese número 
    como argumento y lo sumará al número inicial.*/
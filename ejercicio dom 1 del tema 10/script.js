let numerouno = parseInt(prompt("Escribe un número"));
    p = document.querySelector("#num");
    p.innerHTML = parseInt(p.innerHTML) + numerouno;
button = document.querySelector("#btn");
button.addEventListener("click", addOne);
function addOne() {
  p = document.querySelector("#num");
  p.innerHTML = parseInt(p.innerHTML) + numerouno;
}

button = document.querySelector("#btn");
button.addEventListener("click", addOne);
function addOne() {
  pnum = document.querySelector("#num");
  pnum.innerHTML = parseInt(pnum.innerHTML) + 1;
  pfrase = document.querySelector("#frase");
  if(pnum.innerHTML % 2 ==1){
  pfrase.innerHTML = "La variable está en false";
  }else{
        pfrase.innerHTML = "La variable está en true"; 
    }
  }

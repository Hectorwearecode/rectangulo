document.querySelector("#btn").addEventListener("click",anversoreverso);

let isback = false;
function anversoreverso(){
  debugger
    if (isback == false){
        isback = true;
    }else{
        isback = false;
    }
    showimage()
}

function showimage(){
  debugger
    if (isback == false){
        document.querySelector("#imagen").src= "reverso.png"
    }else{
      document.querySelector("#imagen").src= "anverso.jpg"
    }
}
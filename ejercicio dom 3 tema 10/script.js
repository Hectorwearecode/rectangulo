document.querySelector("#btn").addEventListener("click",anversoreverso);

let isback = false;
function anversoreverso(){
    if (isback == false){
        isback = true;
    }else{
        isback = false;
    }
    showimage()
}

function showimage(){
    if (isback == false){
        document.querySelector("#imagen").src= "./e"
    }
}
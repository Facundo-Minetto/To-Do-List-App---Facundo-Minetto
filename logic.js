const inputBox = document.getElementById("inputBox");
const tasks = document.getElementById("tarea")

function addTask() {
    if(inputBox.value === ''){
        alert("Completar el campo")
    }else{
        let li = document.createElement("li");  //crear elemento li (lista)
        li.innerHTML = inputBox.value; //tomamos el value del input que manda el usuario y lo escribimos en la lista
        tasks.appendChild(li); //lo pegamos en el UL creado en el index

        let span = document.createElement("span");  //creo la X para eliminar tarea
        span.innerHTML = "\u00d7";          //creo la X para eliminar tarea
        li.appendChild(span)            //creo la X para eliminar tarea
    }
    inputBox.value = "";
    saveData();
}

tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTask();

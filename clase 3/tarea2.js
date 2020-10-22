document.getElementById("tarea").onmouseover = function() {mouseOver()};
document.getElementById("tarea").onmouseout = function() {mouseOut()};

function mouseOver() {
document.getElementById("tarea").style.padding = "20px";
}

function mouseOut() {
document.getElementById("tarea").style.padding = "0px";
}

botoncolor = document.querySelector ("#boton1");
par = document.querySelector ("#p1");
function fondo(){
   par.style.backgroundColor = "white";
}
botoncolor.onclick = fondo;

botonesconder = document.querySelector ("#boton2");
parraf = document.querySelector ("#p1");
function esconder(){
   parraf.style.display = "none";
}
botonesconder.onclick = esconder;

botonaparecer = document.querySelector ("#boton3");
parraf = document.querySelector ("#p1");
function aparecer(){
   parraf.style.display = "block";
}
botonaparecer.onclick = aparecer;


let compras = ["arroz ","lentegas"]
let lista =document.querySelector("#listamercado")
//for(let i =0;i< compras.length ; i++)
//{
//let elemento = document.createElement("li")
//elemento.innerHTML= compras[i]

//lista.appendChild(elemento);
//}
function hacerlista(){
    lista.innerHTML=""
for(item of compras){
    let elemento =document.createElement("li")
    elemento.innerHTML=item
    lista.appendChild(elemento)
}
    }
let input = document.querySelector("#inputAdd")
let btn = document.querySelector("#btnAdd")
function addItem(){
  let item = input.value
  compras.push(item)
  hacerlista()
  input.value=""
}
    btn.onclick = addItem
    hacerlista()

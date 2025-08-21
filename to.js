var input = document.getElementById("input")
var ul = document.getElementById("list-container")

function add(){
    var listitem = document.createElement("li")
    listitem.innerHTML= input.value+ "<button onclick='deleteItem(event)'>delete</button>"
    ul.append(listitem)
}
function deleteItem(){
    event.target.parentElement.remove()
}
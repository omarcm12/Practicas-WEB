$(document).ready(init);

function printTareas(data){
    console.log(data);
    var ul = document.getElementById("list");
    for(var i = 0; i<data.length; i++){
        var li = document.createElement("li");
       // li.innerText = data[i].m;
        li.setAttribute("id",data[i].id);
        li.innerHTML = "<a href='#' onClick='delTarea(\""+data[i].id+"\");' >"+data[i].m+"</a>";
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
}

function eliminar(num){
    console.log(num.m);
  /*  var lista = document.getElementById("list");
    lista.removeChild(list.childNodes[num.m]);*/
    //var list = document.getElementById("list");
    //var a = parseInt(num.m);
    //list.removeChild(list.childNodes[a]);
    $("#"+num.m).remove();

}


function displayCats()
{
	var ul = document.getElementById("cat-list");
	for(var i = 0; i<cats.length; i++)
	{
		var li = document.createElement('li');
		li.innerHTML = "<a href='#' onClick=' buscarCat(\""+cats[i]+"\");' >"+cats[i]+"</a>";
		ul.appendChild(li);
	}
}

function printPost(tarea){
    console.log(tarea);
    var li = document.createElement("li");
    var ul = document.getElementById("list");
    var txt = document.getElementById("inputText");

    li.setAttribute("id",tarea.id);
    li.classList.add("list-group-item");
    li.innerHTML = "<a href='#' onClick='delTarea(\""+tarea.id+"\");' >"+tarea.m+"</a>";
    ul.appendChild(li);
    txt.value="";
    txt.focus();
}

function agregar(){
    var txt = $("#inputText").val();
    postTarea(txt);
}

function solicitar(){
    getTareas();
}

function init(){
    $("#btnAdd").click(agregar);
    $("#btnGet").click(solicitar);
}
function displayTable(nombre, lat, long, cont){
	var mytable = document.querySelector("#res-list tbody");
	
	var row = mytable.insertRow();

	row.insertCell(0).innerHTML = nombre;
	row.insertCell(1).innerHTML = lat;
	row.insertCell(2).innerHTML = long;
	row.insertCell(3).innerHTML = cont;
	row.insertCell(4).innerHTML = '<input type="button" value="Eliminar" onClick="Javacsript:eliminarMark(this)">';
}

function clearTable(){
	var tbody = document.querySelector("#res-list tbody");
	tbody.innerHTML = "";
}

$(document).ready(init);

var map;
var longitude;
var latitude;
var count;
var countId = 0;

function agregarMarksServer(obj)
{
	var m = Mapa;
	console.log(m.marcadores);
	for(var i = 0; i<obj.GetPointsResult.length; i++)
	{
		var mark = new Marks(obj.GetPointsResult[i].Id, obj.GetPointsResult[i].latitud, obj.GetPointsResult[i].longitud, obj.GetPointsResult[i].title, obj.GetPointsResult[i].content, obj.GetPointsResult[i].userId);
		m.agregarMark(mark);
	}
	clearTable();
	displayMap(m.marcadores);
}

function agregar(){

	var n =$("#txtNombre").val();						
	var log =$("#txtLon").val();
	var lat =$("#txtLat").val();
	var cont =$("#txtCant").val();

	if(n.length<1||log.length<1||lat.length<1||cont.length<1){
		alert("ingrese los datos completos");
		return;
	}

	var m = Mapa;
	var mark = new Marks(countId,lat,log,n,cont,1217146);
	m.agregarMark(mark);
	postMarker(mark);
	countId ++;
	clearTable();
	displayMap(m.marcadores);
}

function eliminarMark(obj)
{
	var i = obj.parentNode.parentNode.rowIndex;
	var m = Mapa;
	m.quitarMark(i-1);
	clearTable();
	var mytable = document.querySelector("#res-list tbody");
	displayMap(m.marcadores);
}

function displayLoc(position){
	
	latitude =position.coords.latitude;
	longitude =position.coords.longitude;
//primer marcador, ubicacion actual al iniciar
	var m = Mapa;
	m.agregarMark(new Marks(0,latitude,longitude,"Ub-Actual","Ubicacion Actual",1217146));
	displayMap(m.marcadores);
}

function displayError(error){
	var ErrorTypes={
		0:"Unknown Error",
		1:"Permissions denied",
		2:"position nor available",
		3:"Request time out"
	}
	
}

function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLoc);
		displayError();

	}
	else alert("no soportado");
}

function displayMap(marcadores){

	var center = new google.maps.LatLng(latitude,longitude);

	var opts={
		zoom:10,
		center:center,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var divM = document.getElementById("map");
	map = new google.maps.Map(divM,opts);

	var infowindow = new google.maps.InfoWindow();
      var marker, i;
      for (i = 0; i < marcadores.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i].latitude, marcadores[i].longitude),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(marcadores[i].content);
            infowindow.open(map, marker);
          }

        })(marker, i)); 
        displayTable(marcadores[i].title, marcadores[i].latitude, marcadores[i].longitude, marcadores[i].content);   
      }
	
}

function getServer(){
	var n =$("#inputPost").val();
	pruebaServer(n);
}

function init(){
	$("#btnPost").click(getServer);
	$("#btnAdd").click(agregar);
	getMyLocation();
	
}

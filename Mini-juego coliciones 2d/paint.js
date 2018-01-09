function paint(){
	var context= canvas.getContext('2d');
	
	if(fondo.img){
		context.drawImage(fondo.img, fondo.x, fondo.y);
	}
	else{
		context.fillRect(fondo.x, fondo.y,fondo.width, fondo.height);
	}

	// monito
	context.fillStyle = monito.color;
	if(monito.img){
		context.drawImage(monito.img, monito.x, monito.y);
	}
	else{
		context.fillRect(monito.x, monito.y,monito.width, monito.height);
	}
	// la vida del monito
	context.fillStyle = "black";
	context.font = "20px Arial";
	context.fillText("Vida: " + monito.vida, 30, 30);
	context.fillText("Puntos: " + monito.puntos, 30, 50);
	if(willCrash(monito,enemigo)){
		monito.vida--;
		if(monito.vida == -3 ){
			alert("Perdiste chavo");
		}
	}

	// elementos
	for(var i=0; i< elementos.length; i++){
		var element = elementos[i];
		//context.fillStyle  = element.color;
		//context.fillRect(element.x,element.y, element.width, element.height);
		if(elementos[i].img){
			context.drawImage(elementos[i].img, elementos[i].x, elementos[i].y);
		}
		else{
			context.fillRect(elementos[i].x, elementos[i].y,elementos[i].width, elementos[i].height);
		}
	}

	//comida
	for(var i = 0; i<comida.length; i++){
			context.drawImage(comida[i].img, comida[i].x, comida[i].y);
	}
	
	
}

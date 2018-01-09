function gElement(x, y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.img;
	this.puntos=0;

	this.setImage = function(file){
		this.img = new Image();
		this.img.src = file;
	}
}

// crear un objecto gElement y darle el metodo mover
function createPersonaje(x, y, width, height, color){
	var m = new gElement(x, y, width, height, color);
	m.move = function(saltoX,slatoY){		
		this.x += saltoX;
		this.y += slatoY;

		for(var i = 0; i<obstaculos.length; i++){
			if(willCrash(this, obstaculos[i])){
			this.move(-saltoX, -slatoY);
			return false;
        	}	
		}
		for(var i = 0; i<comida.length; i++){
			if(willCrash(this, comida[i])){
			monito.puntos++;
			if(monito.vida<100){
				monito.vida+=5;
			}
			comida.splice(i,1);
			if(comida.length==0){
				creaComida();
			}
        }	
		}

        if(meSali(this)){
            this.move(-saltoX, -slatoY);
			return false;
        }
    	else return true;
	}
   		
    
	return m;
}

// crear un objeto gElement, darle el metodo mover, y moverAuto
function createEnemigo(x, y, width, height, color){
	var e = createPersonaje(x, y, width, height, color);
    var velocidad = 2;
	e.dirX = -velocidad;
	e.dirY = +velocidad;
	e.choseAction = function(){
		// decidir el proximo movimiento		
		if(monito.x == this.x){
			this.dirX = 0;
		}
		else if(monito.x < this.x) {
			this.dirX = -velocidad;
		}else{
			this.dirX = velocidad;
		}

		if(monito.y == this.y){
			this.dirY = 0;
		}
		else if(monito.y < this.y){
			this.dirY = -velocidad;
		}else{
			this.dirY = velocidad;
		}

		this.move(this.dirX, this.dirY);
	}

	e.start = function(){
		var _t = this;
		setInterval(function(){
			_t.choseAction();
		}, 1000/30);
	}

	return e;
}

function chocaConAlgo(){
	
	if(willCrash(monito,enemigo)){
	monito.vida--;
	if(monito.vida == 0 ){
			alert("Perdiste chavo");
		}
	}
}
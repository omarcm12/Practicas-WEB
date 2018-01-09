var canvas, dir = 0;
var salto = 11;
var pared, pared2, pared3;
var monito;
var enemigo;
var fondo;
var imagenes = [['./img/1.png','./img/2.png','./img/3.png','./img/4.png'],
				['./img/5.png','./img/6.png','./img/7.png','./img/8.png']];

var obstaculos = [];
var comida = [];
var elementos = [];
var i =0;
function init(){
	initGame();
	window.addEventListener('keydown',keydown,false);
}

function keydown(e){
    var code = e.keyCode;
    switch (code) {
		case 37: 
				if(dir==0){
					i=0;
					dir=1;
				}
				monito.move(-salto,0); 
		break; //Left key
        case 38: 
        		monito.move(0, -salto); 
        break; //Up key
		case 39: 
				if(dir==1){
					i=0;
					dir=0;
				}
				monito.move(salto,0); 
				break; //Right key
        case 40: 
        		monito.move(0, salto); 
        break; //Down key
    }
}

function willCrash(el1, el2){
	if (el1.x < el2.x + el2.width  && el1.x + el1.width  > el2.x &&
		el1.y < el2.y + el2.height && el1.y + el1.height > el2.y) {
		// elements crashed
		// Apply some nuclear explosion effect
		return true;
	}
	return false;
}

function meSali(obj){
	if(obj.x + obj.width > canvas.width || obj.x < 0 ||  obj.y + obj.height > canvas.height || obj.y < 0){
		return true;
	}
	else return false;

}

function initGame(){
	canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	canvas.width = 1300; //window.screen.width;
	canvas.height = 650; //window.screen.height;

	fondo = new gElement(0,0,1500,800,'red');
	fondo.setImage('./img/cielo.png');
	
	//monito = new gElement(20,20, 53, 89, 'red');
	monito = createPersonaje(20,20, 97, 120, 'red');	
	monito.vida = 100;


	pared = new gElement(300, 400, 127, 200, 'green');
	pared.setImage('./img/edificioCafe.png')
	elementos.push(pared);
	obstaculos.push(pared);

	pared2 = new gElement(600, 300, 143, 400, 'blue');
	pared2.setImage('./img/azul.png')
	elementos.push(pared2);
	obstaculos.push(pared2);

	pared3 = new gElement(900, 400, 127, 200, 'green');
	pared3.setImage('./img/edificioCafe.png')
	elementos.push(pared3);
	obstaculos.push(pared3);

	enemigo = createEnemigo(400,20, 10, 10, 'blue');	
	enemigo.setImage('./img/avion.png');
	enemigo.start();


	setInterval(paint, 1000/300);
	setInterval(sprite,150);
	setInterval(chocaConAlgo,5000);
	elementos.push(enemigo);
	creaComida();
}

function creaComida(){
	for(var i = 0; i<10; i++){
		comida[i] = comidaQueNoChoque();
		comida[i].setImage('./img/mosca.png')
	}
}

function comidaQueNoChoque(){
	var obj, flag = 1;
	while(flag){
		obj= new gElement(Math.floor(Math.random()*(1300-10)+10), Math.floor(Math.random()*(650-10)+10), 10, 10,'orange');
		for(var i = 0; i<obstaculos.length; i++){
			flag = willCrash(obj,obstaculos[i]);
			if(flag){
				break;
			}

		}	
	}
	return obj;
	
}


function sprite(){
		if(i==4){
			i=0;
			monito.setImage(imagenes[dir][i++]);
		}
		else{
			monito.setImage(imagenes[dir][i++]);
		}
}

window.onload = init;

































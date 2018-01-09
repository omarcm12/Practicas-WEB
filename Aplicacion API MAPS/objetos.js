var Mapa={
	marcadores : [],
	countMarks : 0,

	agregarMark : function(obj){
		this.marcadores.push(obj);
		this.countMarks ++;
	},

	quitarMark: function(index){
		this.marcadores.splice(index,1);
		this.countMarks --;
	}

}

function Marks(id, latitude, longitude, title, content, UserId){
	this.id = id;
	this.title = title;
	this.latitude = latitude;
	this.longitude = longitude;
	this.content = content;
	this.UserId = UserId;
}
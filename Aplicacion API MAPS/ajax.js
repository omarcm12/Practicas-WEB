function postMarker(m){
    console.log("postMaker");

    $.ajax("http://service20170925103413.azurewebsites.net/Service1.svc/AddPoint",
    {
       	method: "POST",
       	contentType: "application/json",
        data: JSON.stringify(
        {
        	latitud: m.latitude,
        	longitud: m.longitude,
        	title: m.title,
        	content : m.content,
        	userId : m.UserId
        })
    }
    ).then(function(res){
        console.log(res);
    },function(err){
       	console.log("Ocurrio un error");
       	console.error(err);
     }
     );
}

function pruebaServer(num){
    console.log("post");
    $.ajax("http://service20170925103413.azurewebsites.net/Service1.svc/GetPoints",{
        method: "POST",
        contentType: "application/json;",
        data: JSON.stringify({
            userId: num
    })
    }).then(
    function(data){
        agregarMarksServer(data);
    },
    function(err){
        console.error(err);
    });
}


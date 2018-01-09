function postTarea(m){
    $.ajax("http://localhost:8080/API/todos",
    {
       	method: "POST",
       	contentType: "application/json",
        data: JSON.stringify(
        {
        	m
        })
    }
    ).then(function(res){
        printPost(res);
    },function(err){
       	console.log("Ocurrio un error");
       	console.error(err);
     }
     );
}

function delTarea(m){
    console.log("post del")
    $.ajax("http://localhost:8080/API/del",
    {
       	method: "POST",
       	contentType: "application/json",
        data: JSON.stringify(
        {
        	m
        })
    }
    ).then(function(res){
        eliminar(res);
    },function(err){
       	console.log("Ocurrio un error");
       	console.error(err);
     }
     );
}

function getTareas(){
    $.ajax("http://localhost:8080/API/todos",{
        method: "GET",
        contentType: "application/json;",
    }).then(
    function(data){
        printTareas(data);
    },
    function(err){
        console.error(err);
    });
}
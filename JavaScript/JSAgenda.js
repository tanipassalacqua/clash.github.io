function Aplicar(){
    var ingreso=$('#NuevaTarea').val()
    var foto = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">'
  	foto += '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'
  	foto += '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>'
	foto += '</svg>' //tachito de basura
    if (ingreso=='')
    {
    	alert('Ingrese un texto');
    } else{
    	 $('#TEXTO').append('<div>'+ingreso+'&nbsp;&nbsp;<button type="button" class="btn btn-outline-danger" id="enter" onclick="Eliminar(this)">' + foto +' </button></div><br>')
         document.getElementById("NuevaTarea").value = ""; //limpiar el input
    }
}
//$nbsp; ingresa un espacio
 function Eliminar(boton){
             $(boton).parent().remove()
}
function Editar(){
    $('.saved').addClass("d-none");
    $('.edit').removeClass("d-none");
}

function Guardar(){
    texto = $('.ta').val();

    $('.saved').removeClass("d-none");
    $('.edit').addClass("d-none");

    $(".par").text(texto)


}

function actual() {
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         mireloj = hora+" : "+minuto+" : "+segundo; 
         return mireloj; 
         }
function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
     }
setInterval(actualizar,1000); //iniciar temporizador
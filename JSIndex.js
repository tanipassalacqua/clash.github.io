function LogIn(){

    var Usuario=$("#Usuario").val()
    var Contraseña=$("#Contraseña").val()
      if ( Usuario === 'admin' && Contraseña === 'admin') {
        $("#Usuario").val("")
        $("#Contraseña").val("")
      $("button").show();
      window.open('./makeup.html');

} else
    alert("Datos incorrectos, intente nuevamente");
}
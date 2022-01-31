const { redirect } = require("express/lib/response");

function validarformulario(){

    var nombre;
    var correo; 
    var expresion;
    var password;
    nombre =document.getElementById('nombre').value;
    correo=document.getElementById('email').value;
    password=document.getElementById('password').value;


    expresion=  /^.{4,12}$/ // 4 a 12 digitos.
        

    if ( nombre ==="" || password ==="" || correo ==="" ) { 
        document.getElementById("demo").innerHTML = "Todos los campos son obligatorios";
        return false
    }
    else if (!expresion.test(email.value)){ 
        document.getElementById("demo").innerHTML = "Please enter a valid email address";
        return false
    }
}

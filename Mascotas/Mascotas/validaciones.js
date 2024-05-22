$(document).ready(function(){
    $("#registroForm").submit(function(event){
        event.preventDefault();

        var nombre = $("#nombre").val();
        var edad = $("#edad").val();
        var celular = $("#celular").val();
        var correo = $("#correo").val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if(nombre.length < 3 || nombre.length > 20){
            alert("El Nombre debe tener entre 3 y 20 caracteres.");
            return;
        }

        if(edad < 18 || edad > 130){
            alert("La edad debe estar entre 18 y 130 años.");
            return;
        }

        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        if(!emailPattern.test(correo)){
            alert("Por favor, ingrese un correo válido.");
            return;
        }

        alert("¡Registro exitoso!");
    });
});
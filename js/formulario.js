// Evento de fijación del label del formulario
var input = document.getElementsByClassName('formulario_input');
for (var i =0; i < input.length; i++){
    input[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar')
        }else{
            this.nextElementSibling.classList.remove('fijar')
        }
    })
}

// Validamos si existe datos en los input del formulario
function enviar_datos(){
    var dato_info = document.getElementById('dato').value;
    if(dato_info != 0){
        alert("Los datos fueron enviados correctamente");
        location.href = "index.html";
    }else{
        alert("Error al enviar los datos");
        location.href = "formulario.html";
    }
}
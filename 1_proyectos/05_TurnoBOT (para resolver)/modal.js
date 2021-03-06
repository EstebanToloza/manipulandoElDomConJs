window.onload = function(){

    let botones = document.querySelectorAll(".btn-turno");

    for (boton of botones){ //Con el for..of recorremos cada boton del elemento botones.

        boton.onclick = function(evento) {

            let tipo_accion = evento.target.getAttribute("data-tipo-modal"); //Los atributos data-*  permiten almacenar información adicional sobre un elemento HTML cualquiera 
            prepararModal(tipo_accion);      //getAttribute() devuelve el valor del atributo especificado en el elemento
            mostrarModal();
            activarFuncionesModal();
        }
    }

    function prepararModal(tipo_accion){

        //CAPTURAMOS TODOS LOS ELEMENTOS RELEVANTES DEL MODAL
        let modal = document.querySelector(".modal");
        let titulo = document.querySelector("#titulo");
        let tipo_pedido = document.querySelector("#tipo-pedido");

        switch(tipo_accion){
            case "entrevista":
                titulo.innerHTML = "Solicitá tu entrevista!";
                modal.classList.add("fondo-entrevista");
                break;
            case "venta":
                titulo.innerHTML = "Asesorate con un vendedor";
                modal.classList.add("fondo-ventas");
                break;
            case "reclamo":
                titulo.innerHTML = "Disconforme? Queremos escucharte!";
                modal.classList.add("fondo-reclamos");
                break;
        }

        tipo_pedido.innerHTML = tipo_accion;

    }

    function mostrarModal(){

        document.querySelector("#fondo-modal").classList.add("show");
        document.querySelector("#marco").classList.add("show");

    }

    function activarFuncionesModal(){

        let boton_cerrar = document.querySelector(".cancel");
        boton_cerrar.onclick = function(){
            document.querySelector("#fondo-modal").classList.remove("show")
            document.querySelector("#marco").classList.remove("show")
        
        let boton_enviar = document.querySelector("#boton-enviar");
        boton_enviar.onclick = function(evento){

            evento.preventDefault(); //Con preventDefault se "previene" el comportamiento habitual del botón
            document.querySelector("#fondo-modal").classList.remove("show")
            document.querySelector("#marco").classList.remove("show")

        }
    }


}

}
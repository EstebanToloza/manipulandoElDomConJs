
        window.onload = function () {

            let respuestas = ["Dalo por hecho", "Es muy probable", "Mm... tu futuro no está claro", "No lo creo", "No cuentes con ello"];
            let respuesta = document.querySelector("#respuesta");
            let pregunta = document.querySelector("#input-frase");
            let boton = document.querySelector("#boton");

            boton.onclick = function (){

                if (pregunta.value == ""){
                    respuesta.innerHTML = "Ups, parece que no has hecho ninguna pregunta!";
                }

                else{
                    respuesta.innerHTML = respuestas[Math.floor(Math.random() * respuestas.length)];

                }
                
            }  

        }


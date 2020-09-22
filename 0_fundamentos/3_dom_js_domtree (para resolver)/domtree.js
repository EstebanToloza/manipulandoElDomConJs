window.onload = function(){

    document.querySelector('#buscar-acotado').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let listas = protagonista.querySelectorAll('li')

        for (elemento of listas){
            elemento.classList.add('marcados')
        }
    }

    document.querySelector('#capturar-padre').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let padre = protagonista.parentElement //parentElement me permit capturar al elemento "padre" del elemento desde el que estoy "parado"
        padre.classList.add('borde-padre')
    }

    document.querySelector('#capturar-abuelo').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let padre = protagonista.parentElement.parentElement //Aquí caputamos "al padre del padre" de nuestro elemento
        padre.classList.add('borde-abuelo')
    }

    document.querySelector('#capturar-hijos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let hijos = protagonista.children     //The children property returns a collection of an element's child elements, as an HTMLCollection object.
        for(hijo of hijos){
            hijo.innerHTML = 'Elemento Hijo'
        }
    }

    document.querySelector('#capturar-hermanos-inmediatos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        
        let hermano_cercano_anterior = protagonista.previousElementSibling //Obtener el elemento previo
        hermano_cercano_anterior.classList.add('borde-hermano')

        let hermano_cercano_posterior = protagonista.nextElementSibling //Obtener el siguiente elemento
        hermano_cercano_posterior.classList.add('borde-hermano')
    }

    document.querySelector('#capturar-hermanos-todos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let hermanos = protagonista.parentElement.children //captura todos los "hijos" del elemento "padre"
        for (hermano of hermanos){
            hermano.classList.add('marcados')
        }
        protagonista.classList.remove('marcados')
    }

}
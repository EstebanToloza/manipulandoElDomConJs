window.onload = function(){

    document.querySelector('#buscar-acotado').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let listas = protagonista.querySelectorAll('li')

        for (elemento of listas){
            listas.classList.add('marcados')
        }
    }

    document.querySelector('#capturar-padre').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let padre = protagonista.parentElement
        padre.classList.add('borde-padre')
    }

    document.querySelector('#capturar-abuelo').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let padre = protagonista.parentElement.parentElement
        padre.classList.add('borde-abuelo')
    }

    document.querySelector('#capturar-hijos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let hijos = protagonista.children
        for(hijo of hijos){
            hijo.innerHTML = 'Elemento Hijo'
        }
    }

    document.querySelector('#capturar-hermanos-inmediatos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        
        let hermano_cercano_anterior = protagonista.previousElementSibling
        hermano_cercano_anterior.classList.add('borde-hermano')

        let hermano_cercano_posterior = protagonista.nextElementSibling
        hermano_cercano_posterior.classList.add('borde-hermano')
    }

    document.querySelector('#capturar-hermanos-todos').onclick = function(){
        let protagonista = document.querySelector('#protagonista')
        let hermanos = protagonista.parentElement.children
        for (hermano of hermanos){
            hermano.classList.add('marcados')
        }
        protagonista.classList.remove('marcados')
    }

}
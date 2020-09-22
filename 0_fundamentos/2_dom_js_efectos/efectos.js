window.onload = function(){

    //
    document.querySelector('#btn-modificar-directo').onclick = function(){
        
        document.querySelector('#segundo-item').style.visibility = 'hidden'   //No se recomienda "tocar" el css directamente, sino que es convieniente hacerlo usando clases
        document.querySelector('#tercer-item').style.display = 'none'         
    //Con "hidden" es como si "desapareciera" el elemento, quedando un espacio vació. Mientras que con "display:none" el elemento es removido del flujo de los elementos.
    }

    //
    document.querySelector('#btn-modificar-con-clases').onclick = function(){
        document.querySelector('#cuarto-item').classList.add('desaparecer') //Con classList podemos acceder a todas las clases que afectan a dicho elemento. Con classList.add le añadimos una clase al elemento. Con classList.remove puedo retirar una clase.
        document.querySelector('#quinto-item').classList.add('sacar')
    }

    //
    document.querySelector('#btn-controlando-con-clases').onclick = function(){
        
        let sexto_item = document.querySelector('#sexto-item')
        
        //Primer método
        if(sexto_item.classList.contains('desaparecer')){   //".contains" comprueba si la clase indicada existe en el atributo de clase del elemento. Devuelve "true" o "false" dependiendo si la clase se encuentra o no.
            sexto_item.classList.remove('desaparecer')
        }
        else{
            sexto_item.classList.add('desaparecer')
        }

        //Segundo método
        let septimo_item = document.querySelector('#septimo-item')
        septimo_item.classList.toggle('desaparecer') //.toggle between adding and removing a class name from an element with JavaScript.w3schhols
    
    }

    document.querySelector('#btn-efectos-con-clases').onclick = function(){

        let octavo_item = document.querySelector('#octavo-item')
        octavo_item.classList.add('transition-on')
        octavo_item.classList.toggle('traslucir')

        let noveno_item = document.querySelector('#noveno-item')
        noveno_item.classList.add('transition-on')
        noveno_item.classList.toggle('azul')

        let decimo_item = document.querySelector('#decimo-item', "parrafoItem")
        decimo_item.classList.add('transition-on')
        decimo_item.classList.toggle('acordeon')
    }

}
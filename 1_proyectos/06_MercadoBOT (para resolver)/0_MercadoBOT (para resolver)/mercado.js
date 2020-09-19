let mi_billetera = 10000;
let mis_compras = 0;
let billetera;
let compras;

window.onload = function() {

        setUp()

}

///////***********FUNCIONES GENERALES************///////

function setUp(){
    billetera = document.querySelector("#mi_billetera");
    billetera.innerHTML = mi_billetera;

    compras = document.querySelector("#mis_compras");
    compras.innerHTML = mis_compras;

}

function asignarComportamientoBotones(){

    let botones = document.querySelectorAll(".caja-botones");

    for(caja of cajas){
        let botones = caja.querySelectorAll("div");
        for(boton of botones){
            boton.onclick = function(event){
                if(event.target.innerHTML == "+"){
                    alert("Comprar?");
                }
                else{
                    alert("Querés vender?");
                }
            }
        }
    }
}
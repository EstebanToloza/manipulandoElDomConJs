//window.onload = function(){
    
   //let cambios = ['Y', 'D', 'EU', 'PU', 'R'];
    let moneda = ["dólares", "reales", "euros", "pesos uruguayos", "yenes"];
    let tasas = [0.0135, 0.5, 0.0115, 0.5, 1.44];
    let resultado = document.querySelector("#resultado");
    let tasa = document.querySelector("#tasa");
    
        window.onload = function(){
            boton.onclick = function(){
            let compra = document.querySelector("#compra").value;
            let pesos = parseInt(document.querySelector("#pesos").value);
            
            let cambio = moneda.indexOf(compra);
            let saldo = pesos * tasas[cambio];
            
            tasa.innerHTML = "100 pesos argentinos / " + tasas[cambio] + " " + compra;
            resultado.innerHTML = "Usted recibirá " + saldo + " " + compra;

    //let compra = document.querySelector("#compra").value;
    
       // let pesos = document.querySelector("#pesos"); */
        //resultado.innerHTML = pesos.value;
        
        //dialog_box = frase.value

    }
}



    



/* /*         alert("Hola, soy ExchangeBOT, su asistente de cambios!");
 */
     //   while(prompt("Desea realizar una nueva operación? (SI/NO)")=="SI"){
        
/*             let nombre = prompt("¿Cuál es su nombre?");
 */     /*        let moneda_destino = prompt(nombre + " ¿cuál moneda desea comprar? (EU/D/Y/PU/R)");
            let pesos = parseInt(prompt(nombre + " ¿cuántos pesos desea utilizar?"));
            
            let indice = cambios.indexOf(moneda_destino); 
            let cambio = pesos * tasas[indice];

            alert(nombre + " Ud recibirá: " + cambio + " " + moneda[indice]);
        }
         */
/*         alert("Gracias por usar ExchangeBOT!");    
 */    
 //*/

//}
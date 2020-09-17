window.onload = function(){
    
    let moneda = ["dólares", "reales", "euros", "pesos uruguayos", "yenes"];
    let tasas = [0.0135, 0.5, 0.0115, 0.5, 1.44];
    let resultado = document.querySelector("#resultado");
    let tasa = document.querySelector("#tasa");
    
    boton.onclick = function(){
        let compra = document.querySelector("#compra").value;
        let pesos = parseInt(document.querySelector("#pesos").value);
        
        let cambio = moneda.indexOf(compra);
        let saldo = pesos * tasas[cambio];
        
        tasa.innerHTML = "100 pesos argentinos / " + tasas[cambio] + " " + compra;
        resultado.innerHTML = "Usted recibirá " + saldo + " " + compra;

    }
}
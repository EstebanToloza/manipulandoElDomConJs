window.onload = function(){

    let frase = document.querySelector("#input-frase");
    let dialog_box = document.querySelector("#dialog-box");
    let boton = document.querySelector("#boton");

    frase.value = " ";
    dialog_box.innerHTML = " "

    boton.onclick = function(){
        let txt_frase = frase.value;

        dialog_box.innerHTML = txt_frase;
        
        //dialog_box = frase.value

    }

}
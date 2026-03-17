let contadorRegistros = 0;

function verificar() {

let nombre =  document.getElementById ("nombre").value;

let edad = parseInt(document.getElementById("edad").value);

let ciudad =document.getElementById ("ciudad").value;
 
let ficha = parseInt(document.getElementById("ficha").value);

let caja = document.getElementById("resultado");




if (nombre === "" || isNaN(edad) || ciudad === "" || isNaN(ficha) ) {
    caja.innerHTML = "⚠️ Por favor completa todos los campos.";
    return;
  } 

contadorRegistros++;
document.getElementById("contador").innerHTML=
"Registros relalizados:" + contadorRegistros;




// para validacion de campos vacios o incorrectos//

     if (nombre === "" || isNaN(edad) || ciudad === "" || isNaN(ficha) ) {
         caja.innerHTML = "⚠️ Por favor ingresa tu nombre y una edad válida.🔎"
         caja.style.color ="#e53e3e";
   
    return; 
  }

    if (edad >=18) {
       caja.innerHTML = "🤩 ¡Bienvenido/a, " + nombre + " con ficha " + ficha + " de " + ciudad + "! Eres Mayor de Edad, espera un momento porfis🩷"
       caja.style.color ="#276749";
    } else{
        caja.innerHTML = "🤩 ¡Bienvenido/a, " + nombre + " con ficha " + ficha + " de " + ciudad + "!Eres Menor de Edad, espera un momento porfis🩷"
        caja.style.color = "#c05621";
    }
setTimeout(()=> {
    window.location.href = "home.html";
},5000);


}




function limpiar() {  
    document.getElementById("nombre").value ="";
    document.getElementById("edad").value ="";
    document.getElementById("ciudad").value="";
    document.getElementById("resultado").innerHTML="";
    document.getElementById("ficha").value="";

}




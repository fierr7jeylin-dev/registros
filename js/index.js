
function ingresar() {
    const u = document.getElementById("usuario").value;
    const p = document.getElementById("pasword").value;
    const msg = document.getElementById("mensaje");

    if (u == "adso" && p === "1234") {
        msg.textContent = "!Bienvenido, " + u + " !Redirigiendo en 5 segundos...";
        msg.className = "msg-exito";
        msg.style.display = "block";

        setTimeout(()=> {
        window.location.href = "registro.html";
        },5000);

    }else{
        msg.textContent= "Error: Usuario o contraseña incorrectos.";
        msg.className= "msg-error";
        msg.style.display = "block";
    }
}



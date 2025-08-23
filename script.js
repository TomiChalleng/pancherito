const boton = document.getElementById("aiagh");
var c = 0;
var i = 0;

boton.addEventListener("click", ()=> {
    console.log("DEJEN DE CLICKEAR BOTONES! ! !");
    c++;
    if(c > 20) {
        alert("DALE SIGUE PULSANDO");
        c = 0;
        i++;
    }
    if (i > 2 && confirm("VEN TE LLEVO A UN LUGAR SEGURO")) {
        window.location.href = "https://www.youtube.com/@DragonFire666HD?sub_confirmation=1"
    }
});

var tiempo = 0
const tiempoTexto = document.getElementById("tiempo"); 

function contar() {
    setInterval(()=> {
        tiempo++;
        tiempoTexto.innerText = `Tiempo SANScurrido: ${tiempo}`
    if (tiempo == 20) {
        window.location.href = "https://www.youtube.com/@DragonFire666HD?sub_confirmation=1"
        return;
    }        
    }, 1000)
};

contar();
const boton = document.getElementById("aiagh");
var c = 0;
var i = 0;
var contador = 0;
var restante = 60;

boton.addEventListener("click", ()=> {
    console.log("DEJEN DE CLICKEAR BOTONES! ! !");
    c++;
    contador++;
    restante --;
    boton.innerText = `Te quedam ${restante} clicks! !!  APURATE`
    if(c > 20) {
        alert("DALE SIGUE PULSANDO");
        c = 0;
        restante++;
        i++;
    }
    if (i > 2 && confirm("VEN TE LLEVO A UN LUGAR SEGURO")) {
        window.location.href = "https://www.youtube.com/watch?v=IHC097KBAYk?sub_confirmation=1"
    }
});

var tiempo = 0
const tiempoTexto = document.getElementById("tiempo"); 

function contar() {
    setInterval(()=> {
        tiempo++;
        tiempoTexto.innerText = `Tiempo SANScurrido: ${tiempo}`
    if (tiempo == 20) {
        window.location.href = "https://www.youtube.com/watch?v=IHC097KBAYk?sub_confirmation=1"
        return;
    }        
    }, 1000)
};

contar();

const darkModeButton = document.getElementById("darkmodebutton");
darkModeButton.addEventListener("click", () => {
    document.querySelectorAll('a, button, p, h1, body').forEach(element => {
        element.classList.toggle('dark-mode');
})
});
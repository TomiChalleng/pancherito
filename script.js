const boton = document.getElementById("aiagh");
var c = 0;
var i = 0;

boton.addEventListener("click", ()=> {
    console.log("DEJEN DE CLICKEAR BOTONES! ! !");
    c++;
    if(c > 20) {
        alert("QUE TE BANEO DE MI PAGINA");
        c = 0;
        i++;
    }
    if (i > 2 && confirm("ÚLTIMA ADVERTENCIA")) {
        window.location.href = "https://www.youtube.com/@DragonFire666HD"
    }
});
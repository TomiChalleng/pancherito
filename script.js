const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    img.addEventListener('click', () => {
        window.location.href = 'https://youtu.be/n1-2oKvRy-M?t=378';
    });
})
var body = document.body;

function poto() {
    var random = Math.floor(Math.random() * (490 - 0 + 1));
    fetch(`https://picsum.photos/v2/list?page=${random % 100}&limit=10`)
        .then(response => response.json())
        .then(json => json.forEach(element => {
            var imagen = document.createElement("img");
            imagen.classList.add('imgdemiechica')
            imagen.src = element.download_url;
            body.appendChild(imagen);
        }
    ));
};

function biblia() {
    var texto = document.querySelector('h1');
    texto.textContent = ''
    fetch(`https://bible-api.com/john 1`)
    .then(response => response.json())
    .then(json => {
        json.verses.forEach(verse => {
            texto.textContent += verse.text
        })
    });
}

biblia();
poto();
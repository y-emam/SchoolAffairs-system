let img_div = document.getElementById('welcome_image_div');
let img = document.getElementById('welcome_image');

img.style.width = window.innerWidth + 'px';
img.style.height = window.innerHeight + 'px';

img_div.style.width = window.innerWidth + 'px';
img_div.style.height = window.innerHeight + 'px';

let button = document.getElementById('scroll');

button.onclick = function() {
    let height = window.innerHeight;
    window.scroll(0, height);
}
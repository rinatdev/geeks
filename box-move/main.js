const small_box = document.querySelector('.small_box');

let step = 0;
setInterval(() => {
    if(step <= 400){
        step++;
        small_box.style.left = `${step}px`;
    }
}, 10);
const small_box = document.querySelector('.small_box');

let positionX = 0;
let positionY = 0;
setInterval(() => {
    if(positionX <= 449 && positionY == 0){
        positionX++;
        small_box.style.left = `${positionX}px`;
    } else if(positionX >= 449 && positionY <= 449) {
        positionY++;
        small_box.style.top = `${positionY}px`;
    } else if(positionY >= 449 && positionX >= 0) {
        positionX--;
        small_box.style.left = `${positionX}px`;
    } else if(positionX <=0 && positionY >= 0) {
        positionY--;
        small_box.style.top = `${positionY}px`;
    } 
}, 1);
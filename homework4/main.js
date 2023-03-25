const btn = document.querySelector('button');
const cards = document.querySelector(".cards");

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", "people.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        
        cards.innerHTML = `
        <div class="card">
            <img src="${data[0].img}" alt="">
            <div class="name">Name: ${data[0].name}</div>
            <div class="age">Age: ${data[0].age}</div>
        </div>
        <div class="card">
            <img src="${data[1].img}" alt="">
            <div class="name">Name: ${data[1].name}</div>
            <div class="age">Age: ${data[1].age}</div>
        </div>
        <div class="card">
            <img src="${data[2].img}" alt="">
            <div class="name">Name: ${data[2].name}</div>
            <div class="age">Age: ${data[2].age}</div>
        </div>`;
    })
})
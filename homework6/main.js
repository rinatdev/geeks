const block = document.querySelector(".block");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 0;

const Alfa = (direction) => { 
    if (direction === "next") { 
        if(count === 100){
            count = 0
        }
        count++ 
    } else if (direction === "prev") { 
        if(count === 0 || count === 1){
            count = 101
        }
        count-- 
    }  
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(response => response.json()) 
        .then(data => { 
            const div = document.createElement('div') 
            div.setAttribute('class', 'card') 
            div.innerHTML = `  
            <h2>${data.title}</h2>  
            <span>${data.id}</span>  
            <h3>${data.body}</h3>  
        ` 
            block.innerHTML = '' 
            block.append(div) 
 
        }) 
} 
next.onclick = () => { 
    Alfa("next") 
} 
 
prev.onclick = () => { 
    Alfa("prev") 
}
            
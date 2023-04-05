const url = 'https://jsonplaceholder.typicode.com/posts';

const imageUrls = [
  'https://images.pexels.com/photos/16023576/pexels-photo-16023576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/11516396/pexels-photo-11516396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1886580/pexels-photo-1886580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/16057485/pexels-photo-16057485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const randomIndex = () => Math.floor(Math.random() * imageUrls.length);

const main = document.querySelector('.main');

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(user => {
      main.innerHTML += `
        <div class="card">
          <img src="${imageUrls[randomIndex()]}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5>${user.title}</h5>
            <p class="card-text">${user.body}</p>
          </div>
        </div>
      `;
    });
  } catch (error) { 
    main.innerHTML += `<h2 class="error-message"><span>Oops!</span> Something went wrong</h2>`; 
    main.classList.add("error"); 
    console.log('Error:', error);
  }
}

fetchData();

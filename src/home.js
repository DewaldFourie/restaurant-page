

function createHome(){
    const home = document.createElement("div");
    home.classList.add('home');

    const text = document.createElement('h1');
    text.textContent = 'hello';

    home.appendChild(text);

    return home
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome())
}

export default loadHome;
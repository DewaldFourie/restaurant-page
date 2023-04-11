
import chef from './assets/chef.jpeg'

function createHome(){
    const home = document.createElement("div");
    home.classList.add('home');

    function createHomeTop(){
        
        const homeTop = document.createElement('div');
        homeTop.classList.add("home-top");

        const homeTopHeading = document.createElement('h2');
        homeTopHeading.classList.add("home-top-heading");
        homeTopHeading.textContent = "Welcome to the Restaurant";

        const homeTopText = document.createElement('p');
        homeTopText.classList.add("home-top-text");
        homeTopText.innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,"
        homeTopText.innerHTML += "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"
        homeTopText.innerHTML += "numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium"
        homeTopText.innerHTML += "optio, eaque rerum! Provident similique accusantium nemo autem."

        homeTop.appendChild(homeTopHeading);
        homeTop.appendChild(homeTopText);

        return homeTop
    }

    function createHomeMiddle(){

        const homeMiddle = document.createElement('div');
        homeMiddle.classList.add('home-middle');

        const homeImage = new Image();
        homeImage.classList.add('home-image');
        homeImage.src = chef;

        const homeMiddleText = document.createElement('h3');
        homeMiddleText.classList.add('home-middle-text');
        homeMiddleText.textContent = "Visit us online or in store now!";

        homeMiddle.appendChild(homeImage);
        homeMiddle.appendChild(homeMiddleText);

        return homeMiddle;
    }

    
    home.appendChild(createHomeTop());
    home.appendChild(createHomeMiddle());
    return home;
}

    

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;
import './styles.css'
import loadHome from './home';


// header design function
function createHeader() {
    console.log("loading page");

    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('div');
    heading.classList.add('heading');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'RESTAURANT';

    header.appendChild(heading);
    heading.appendChild(title);
    header.appendChild(createNav());

    return header;
}

// navigation design function
function createNav() {
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add("button-nav");
    homeBtn.textContent = 'HOME';
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(homeBtn);
        loadHome()
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add("button-nav");
    menuBtn.textContent = 'MENU';
    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(menuBtn);
        
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add("button-nav");
    contactBtn.textContent = 'CONTACT';
    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(contactBtn);
       
    })

    navigation.appendChild(homeBtn);
    navigation.appendChild(menuBtn);
    navigation.appendChild(contactBtn)

    return navigation;
}

// functionality to control tabs by using "active" classes
function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

// the main div function
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

// Footer design Function
function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('span')
    footerText.classList.add('footer-text')
    footerText.textContent = "Copyright © Dewald Fourie 2023"

    footer.appendChild(footerText);

    return footer;
}
    
function initializeWebsite() {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveBtn(document.querySelector(".button-nav"));
    
}

export default initializeWebsite;
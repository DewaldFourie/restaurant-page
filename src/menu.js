import strawberry from './assets/icecream/strawberry.png';
import tiramisu from './assets/icecream/tiramisu.jpg';
import oreo from './assets/icecream/oreo.jpg';
import blackberry from './assets/icecream/blackberry.jpeg';
import chocolate from './assets/icecream/chocolate.jpg'
import popcorn from './assets/icecream/popCorn.jpeg'


function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
          "Strawberry Fla",
          "$ 3,99",
          "A satisfying ice cream of milky vanilla goodness and strawberry sweetness.",
          strawberry
        )
    );
    menu.appendChild(
        createMenuItem(
            "Tiramisu Caramel",
            "$ 5,50",
            "Mouthwatering ice cream with a sprinkling of sea salt and caramel.",
            tiramisu
        )
    );
    menu.appendChild(
        createMenuItem(
            "Oreo Deluxe",
            "$ 5,50",
            "The ultimate Oreo lover's dream, with smooth vanilla and crispy cookies.",
            oreo
        )
    )
    menu.appendChild(
        createMenuItem(
            "Burst of Blackberry",
            "$ 4,99",
            "A gourmet Blackberry ice cream, with succulant lavender flavours",
            blackberry
        )
    )
    menu.appendChild(
        createMenuItem(
            "Death by Chocolate",
            "$ 4,99",
            "Combining dark and milky flavours of chocolate to satisfy the cocao lovers.",
            chocolate
        )
    )
    menu.appendChild(
        createMenuItem(
            "Popping Pleasure",
            "$ 5,99",
            "Popcorn and Caramel surprise for the extra sweet tooth with smooth vanilla ice cream.",
            popcorn
        )
    )


    return menu;
}

function createMenuItem(name, price, descripttion, image) {
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    const foodElement = document.createElement('div');
    foodElement.classList.add("food-element");

    const foodName = document.createElement('h2');
    foodName.classList.add('food-name')
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('food-description');
    foodDescription.textContent = descripttion;

    const foodImage = new Image()
    foodImage.classList.add('food-image');
    foodImage.src = image;
    foodImage.alt = 'foodimage'

    const foodPrice = document.createElement('h3');
    foodPrice.classList.add('food-price');
    foodPrice.textContent = price

    foodElement.appendChild(foodName);
    foodElement.appendChild(foodPrice);

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodElement);
    menuItem.appendChild(foodDescription);

    return menuItem;
}



function loadMenu(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;
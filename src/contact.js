import telephone from './assets/telephone.png';
import location from './assets/location.png';
import maps from './assets/orlando.JPG';

function createContact(){
    const contact = document.createElement("div");
    contact.classList.add('contact');

    function createContactTop(){
        const contactHeader = document.createElement('h1');
        contactHeader.classList.add('contact-header');
        contactHeader.textContent = 'Contact Us';
        return contactHeader;
    }

    function createContactMiddle(){
        const contactMiddle = document.createElement('div');
        contactMiddle.classList.add('contact-middle');

        function createPhone(){
            const phoneDiv = document.createElement('div');
            phoneDiv.classList.add('contact-element');
            const phoneIcon = new Image();
            phoneIcon.classList.add('contact-icon');
            phoneIcon.src = telephone;
            const phone01 = document.createElement('h3');
            phone01.classList.add('phone-number');
            phone01.textContent = " +0215549698 / +0834568585";

            phoneDiv.appendChild(phoneIcon);
            phoneDiv.appendChild(phone01);
            return phoneDiv;
        }

        function createLocation(){
            const locationDiv = document.createElement('div');
            locationDiv.classList.add('contact-element');
            const locationIcon = new Image();
            locationIcon.classList.add('contact-icon');
            locationIcon.src = location;
            const locationText = document.createElement('h3');
            locationText.classList.add('location-text');
            locationText.textContent = "364 Rivonia Drive. Orlando, Florida, USA";
            
            locationDiv.appendChild(locationIcon);
            locationDiv.appendChild(locationText);
            return locationDiv;
        }    

        function createMap(){
            const mapsDiv = document.createElement('div');
            mapsDiv.classList.add('maps-element');
            const mapsImage = new Image();
            mapsImage.classList.add('maps-image');
            mapsImage.src = maps;

            mapsDiv.appendChild(mapsImage);
            return mapsDiv;
        }
        

        contactMiddle.appendChild(createPhone())
        contactMiddle.appendChild(createLocation())
        contactMiddle.appendChild(createMap());
        return contactMiddle;
    }


    contact.appendChild(createContactTop());
    contact.appendChild(createContactMiddle());
    return contact;
}

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;
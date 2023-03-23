// inserisco tutte le immagini in un array.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeItemIndex = 0;
const items = document.getElementsByClassName("item");
const description = document.getElementsByClassName("description");

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

const sliderContainer = document.querySelector(".slider-items");
createElement(images);
items[activeItemIndex].classList.add("active");
description[activeItemIndex].classList.add("active");

// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//bottone next
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener ("click", showNext);

//bottone prev
const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener ("click", showPrev);

//Autoplay
setInterval (showNext, 3000);

////////////////////////////////////////////////////////////////////////////
// FUNCTION
function createElement (imagesArrey) {
    let sliderItem="";
for (let i = 0; i < imagesArrey.length; i++) {
    let currentImage = imagesArrey[i];
    sliderItem += `
        <div class="item">
            <img src="${currentImage.image}" alt="">
        </div>
        <div class="description">
            <h2>${currentImage.title}</h2>
            <p>${currentImage.text}</p> 
        </div>`;
    sliderContainer.innerHTML = sliderItem;
}
}

function showNext() {
    items[activeItemIndex].classList.remove("active");
    description[activeItemIndex].classList.remove("active");
    if (activeItemIndex < items.length - 1) {
        // incremeto active index
        activeItemIndex++;  
    } else {
        activeItemIndex = 0;
    }
    //Aggiungo classe active all'elemento successivo
    items[activeItemIndex].classList.add("active");
    description[activeItemIndex].classList.add("active"); 

}

function showPrev() {
    //rimuovo classe active dall'elemento precedente
    items[activeItemIndex].classList.remove("active");
    description[activeItemIndex].classList.remove("active");

    if (activeItemIndex === 0 ) {
        activeItemIndex = items.length -1;       
    } else {
         // diminuisco active index
         activeItemIndex--;
    }
    //Aggiungo classe active all'elemento successivo
    items[activeItemIndex].classList.add("active");
    description[activeItemIndex].classList.add("active"); 

}





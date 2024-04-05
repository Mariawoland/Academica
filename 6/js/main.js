const searchInput = document.getElementById("searchInput");

const yesButton = document.getElementById("yes");
const allButton = document.getElementById("all");


//*************
//SEARCH FILTER
//*************

function searchFilter() {

    const searchText = searchInput.value.toLowerCase();

    const filteredCards = cards.filter(card => {

        const cardTitle = card[0].toLowerCase();

        return cardTitle.includes(searchText);

    });

    renderCards(filteredCards);

}

//***********
//CREATE CARD
//***********

const createCard = (name, imgsrc, price, description) => {

    const card = document.createElement("div");
    card.setAttribute("class", "cards");

    card.innerHTML = `
    <img src="${imgsrc}" alt="${name}" class="cardImage">
    <h1 class="cardTitle">${name}</h1>
    <p class="cardPrice">${price}</p>
    <p class="cardDescription">${description}</p>
    `;

    document.getElementById("cardContainer").appendChild(card);

};

const genericTextLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et.";

const genericTextShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua.";

const cards = [
    ["Romeo and Juliet", "Images/cardImages/Img1.png", "$22.99", genericTextLong],
    ["Don Quixote", "Images/cardImages/Img2.png", "Free", genericTextLong],
    ["The Master and Margarita", "Images/cardImages/Img3.png", "$37.49", genericTextShort],
    ["The Picture of Dorian Gray", "Images/cardImages/Img4.png", "$34.99", genericTextShort]
];

//************
//RENDER CARDS
//************

function renderCards(cardsArray) {

    document.getElementById("cardContainer").innerHTML = "";
    cardsArray.forEach(card => createCard(...card));

}

renderCards(cards);



let id = 1;

function yes() {

    if (id === 1) {

        renderCards([cards[1]]);

        id = 2;

    }

}

function all() {

    if (id === 2) {

        renderCards(cards);

        id = 1;

    }

}

searchInput.addEventListener("input", searchFilter);

yesButton.addEventListener("click", yes);
allButton.addEventListener("click", all);
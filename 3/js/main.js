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
    `
    document.getElementById("cardContainer").appendChild(card);
}

const genericTextLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua."

const genericTextShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua."



//************
//RENDER CARDS
//************

createCard("Romeo and Juliet", "Images/cardImages/Img1.png", "$22.99", genericTextLong);

createCard("Don Quixote", "Images/cardImages/Img2.png", "Free", genericTextLong);

createCard("The Master and Margarita", "Images/cardImages/Img3.png", "$37.49", genericTextShort);

createCard("The Picture of Dorian Gray", "Images/cardImages/Img4.png", "$34.99", genericTextShort);
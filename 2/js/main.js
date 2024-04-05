const card = document.createElement("div");
card.setAttribute("class", "cards");
document.getElementById("cardContainer").appendChild(card);

const img = document.createElement("img");
img.setAttribute("class", "cardImage");
img.setAttribute("src", "Images/cardImages/Img1.png");
card.appendChild(img);

const h1 = document.createElement("h1");
h1.setAttribute("class", "cardTitle");
h1.innerHTML = "Romeo and Juliet";
card.appendChild(h1);

const price = document.createElement("p");
price.setAttribute("class", "cardPrice");
price.innerHTML = "$22.99";
card.appendChild(price);

const des = document.createElement("p");
des.setAttribute("class", "cardDescription");
des.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua.";
card.appendChild(des);
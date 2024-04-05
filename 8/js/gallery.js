//*********************
//CREATE GALLERY IMAGES
//*********************

const galleryImage = (srcValue) => {

    const CardImage = document.createElement("img");

    CardImage.setAttribute("src", srcValue);

    document.getElementById("photoBox").appendChild(CardImage);

}


//*******************
//LOOP GALLERY IMAGES
//*******************

for (let i = 1; i < 41; i++) {

    galleryImage(`Images/gallery/Img${i}.png`)

}
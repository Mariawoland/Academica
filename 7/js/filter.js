const swiperRightButton = document.getElementById("swipe");
const swiperLeftButton = document.getElementById("swiped");
const change = document.querySelector(".changeBox");


//************************
//SWIPE FILTERBOX TO RIGHT
//************************

swiperRightButton.addEventListener("click", function () {

    change.removeAttribute("id", "freeGame");

    change.setAttribute("id", "freeGameSwiped");

})

//***********************
//SWIPE FILTERBOX TO LEFT
//***********************

swiperLeftButton.addEventListener("click", function () {

    change.removeAttribute("id", "freeGameSwiped");

    change.setAttribute("id", "freeGame");

})
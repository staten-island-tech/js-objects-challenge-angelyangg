// console.log("Connected");

// const header = document.querySelector(".header");

// const items = document.querySelectorAll(".list-item");
// const itemsArr = Array.from(items);
// itemsArr.forEach(element => element.style.backgroundColor = "red");
// Always convert Node List to an Array

// const header = document.getElementById("Idheader");
// const toggle = document.querySelector(".toggle");
// header.classList.add("Karen");
// header.classList.remove("Karen");

// toggle.addEventListener("click", function(){
//     header.classList.toggle("Karen");
// });

//Button click changes background to red
//Button click changes background to blue

const background = document.querySelector(".background");
const button = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

// button.addEventListener("click", function(){
//     if(background.style.backgroundColor !== "rgb(255, 0, 0)") {
//         background.style.backgroundColor = "rgb(255, 0, 0)";
//         headerTwo.textContent = "Red";
//     } else {
//         background.style.backgroundColor = "rgb(0, 0, 255)";
//         headerTwo.textContent = "Blue";
//     }
// });

//Need 3 numbers for R G and B
//Get random number, make random number usable
button.addEventListener("click", function(){
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    background.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    headerTwo.textContent = `rgb(${R}, ${G}, ${B})`;
});


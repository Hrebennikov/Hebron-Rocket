const button = document.getElementById("button");
const text = document.getElementById("text");
const none = document.getElementById("none");
const input = document.getElementById("input");
const done = document.getElementById("done")
const toggleBtn2 = document.getElementById("btn2");
const menu = document.getElementById("menu");
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Task 1
function btn() {
    let styleCss = getComputedStyle(text);

    if (styleCss.display === "none") {
        document.getElementById("text").style.display = "block";
        button.innerText = "Hide text";
    } else if (styleCss.display !== "none") {
        document.getElementById("text").style.display = "none";
        button.innerText = "Show text";
    }
}

// Task 2
function btn1() {
    none.style.display = "none";
}

// Task 3
// done.addEventListener("click", () => {
//     let age = input.value;
//     input.value = "";
    
//     if (age >= 18) {
//         alert("Ваш вік досяг 18 років!");
//     } else {
//         alert("Ваш вік менший за 18 років!");
//     }
// });

// Task 4 
// let isMenuVisible = false;

// toggleBtn2.addEventListener("click", () => {
//     if (isMenuVisible) {
//         menu.style.display = "none"
//         toggleBtn2.textContent = "Розгорнути меню";
//     } else {
//         menu.style.display = "block"
//         toggleBtn2.textContent = "Згорнути меню";
//     }

//     isMenuVisible = !isMenuVisible;
// });

// sliders = new sliders("sliders");
// slider = sliders.root.getElementById("slider");

// Task 5 - sliders
const slides = Array.from(slider.querySelectorAll("h1"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider()
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider()
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = "block"
        } else {
            slide.style.display = "none"
        }
    });
}

updateSlider()
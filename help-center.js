let button = document.getElementById("toggle-btn");
const box = document.getElementById("menue");
const T_content= document.getElementsByClassName('toggle-content')[0];

function myFunc(){
   box.style.display="block"
   box.style.border="none" // displays the box
    event.stopPropagation();
}

button.addEventListener("click", myFunc)

document.addEventListener("click", function() {
    box.style.display = "none"; // Hide the box
});

box.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent box clicks from closing it
});




let inputbtn = document.getElementById("input-Click");
const menueBox = document.getElementById("Menue");
const Input= document.getElementById('inputClick');

function searchFunc(){
    menueBox.style.display = "block"; // displays the box
    inputbtn.style.boxShadow = "0 3px 30px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1)"
    inputbtn.style.backgroundColor = "white"
    inputbtn.style.border = "none"
    Input.style.backgroundColor="transparent"
    
    event.stopPropagation();
}

inputbtn.addEventListener("click", searchFunc)

document.addEventListener("click", function() {
    menueBox.style.display = "none" // Hide the box
    inputbtn.style.boxShadow = "none"
    inputbtn.style.backgroundColor = "#f0f0f0"
    inputbtn.style.border = "1px solid rgb(218, 218, 218);"
});

menueBox.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent box clicks from closing it
});





let firstContent = document.getElementById("firstContent");
let firstButton = document.getElementById("firstButton");

let secondContent = document.getElementById("secondContent");
let secondButton = document.getElementById("secondButton");

let thirdContent = document.getElementById("thirdContent");
let thirdButton = document.getElementById("thirdButton");

let fourthContent = document.getElementById("fourthContent");
let fourthButton = document.getElementById("fourthButton");

let myLine = document.querySelector(".indicator");


firstButton.addEventListener("click", function(){
    firstContent.style.display = "block"
    secondContent.style.display = "none"
    thirdContent.style.display = "none"
    fourthContent.style.display = "none"
    myLine.style.transform = "translateX(8px)"
    myLine.style.width = "50px"
})

secondButton.addEventListener("click", function(){
    secondContent.style.display = "block"
    firstContent.style.display = "none"
    thirdContent.style.display = "none"
    fourthContent.style.display = "none"
    myLine.style.transform = "translateX(73px)"
    myLine.style.width = "50px"
})

thirdButton.addEventListener("click", function(){
    thirdContent.style.display = "block"
    firstContent.style.display = "none"
    secondContent.style.display = "none"
    fourthContent.style.display = "none"
    myLine.style.transform = "translateX(140px)"
    myLine.style.width = "120px"
})

fourthButton.addEventListener("click", function(){
    fourthContent.style.display = "block"
    secondContent.style.display = "none"
    firstContent.style.display = "none"
    thirdContent.style.display = "none"
    myLine.style.transform = "translateX(290px)"
    myLine.style.width = "90px"
})

// phone view js

const phone= window.matchMedia("(max-width:568px)")
let Phone_input=document.getElementsByClassName("phone-input-search")[0]
function phone_screen(event){
    if (!phone) return;
    if(event.matches){
        Phone_input.addEventListener("click", ()=>{
            searchFunc()
            menueBox.style.position="absolute"
            menueBox.style.left="20px"
            menueBox.style.top="35%"
        })
    }
} 
phone_screen(phone)
Phone_input.addEventListener("click",phone_screen)






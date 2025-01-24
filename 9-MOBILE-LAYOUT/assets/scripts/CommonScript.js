
// COMMON SCRIPT

let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row5 = document.getElementById("row5");
console.log(clickedMenu);
console.log(round5);

let rowisClicked = false;
// mainContainer.style.display = "block";
row1.style.display = "flex";
row2.style.display = "flex";
row3.style.display = "flex";
row5.style.display = "flex";

function showMenuCommon() {
    console.log("showMenu2 called");
    // isClicked = !isClicked;
    console.log(rowisClicked);
    
    if(rowisClicked == false) {
        row1.style.display = "none";
        row2.style.display = "none";
        row3.style.display = "none";
        row5.style.display = "none";   
        rowisClicked = true;

    } else {
        row1.style.display = "flex";
        row2.style.display = "flex";
        row3.style.display = "flex";
        row5.style.display = "flex";  
          
        rowisClicked = false;
    }
}


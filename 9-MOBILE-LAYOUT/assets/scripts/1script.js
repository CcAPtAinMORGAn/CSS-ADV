// THIS IS SHOWING THE BLACK CONTAINER WHEN WE CLICK IT'S PARENT THAT IS WHY WE HAVE KEPT DISPLAY AS FLEX AS WE ARE TARGETING THE CHILD IN A PARENT

let ClickedMenuParent1 = document.getElementById("ClickedMenuParent1");
//let round5 = document.getElementById("round5");
//console.log(clickedMenu);
// console.log(round5);

let isClicked4 = false;
ClickedMenuParent1.style.display = "none";

function showMenu1() {
    console.log("showMenu called");
    // isClicked = !isClicked;
    console.log(isClicked);
    
    if(isClicked4 == false) {
        ClickedMenuParent1.style.display = "flex";
        isClicked4 = true;

    } else {
        ClickedMenuParent1.style.display = "none";
        isClicked4 = false;
    }
}
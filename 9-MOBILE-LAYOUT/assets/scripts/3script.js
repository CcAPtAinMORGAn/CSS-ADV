// THIS IS SHOWING THE BLACK CONTAINER WHEN WE CLICK IT'S PARENT THAT IS WHY WE HAVE KEPT DISPLAY AS FLEX AS WE ARE TARGETING THE CHILD IN A PARENT

let ClickedMenuParent3 = document.getElementById("ClickedMenuParent3");
//let round5 = document.getElementById("round5");
//console.log(clickedMenu);
// console.log(round5);

let isClicked2 = false;
ClickedMenuParent3.style.display = "none";

function showMenu3() {
    console.log("showMenu called");
    // isClicked = !isClicked;
    console.log(isClicked);
    
    if(isClicked2 == false) {
        ClickedMenuParent3.style.display = "flex";
        isClicked2 = true;

    } else {
        ClickedMenuParent3.style.display = "none";
        isClicked2 = false;
    }
}
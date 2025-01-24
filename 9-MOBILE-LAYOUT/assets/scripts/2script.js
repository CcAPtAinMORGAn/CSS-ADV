// THIS IS SHOWING THE BLACK CONTAINER WHEN WE CLICK IT'S PARENT THAT IS WHY WE HAVE KEPT DISPLAY AS FLEX AS WE ARE TARGETING THE CHILD IN A PARENT

let ClickedMenuParent2 = document.getElementById("ClickedMenuParent2");
//let round5 = document.getElementById("round5");
//console.log(clickedMenu);
// console.log(round5);

let isClicked3 = false;
ClickedMenuParent2.style.display = "none";

function showMenu2() {
    console.log("showMenu called");
    // isClicked = !isClicked;
    console.log(isClicked);
    
    if(isClicked3 == false) {
        ClickedMenuParent2.style.display = "flex";
        isClicked3 = true;

    } else {
        ClickedMenuParent2.style.display = "none";
        isClicked3 = false;
    }
}
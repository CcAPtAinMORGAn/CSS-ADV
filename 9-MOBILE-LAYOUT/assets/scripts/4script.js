// THIS IS SHOWING THE BLACK CONTAINER WHEN WE CLICK IT'S PARENT THAT IS WHY WE HAVE KEPT DISPLAY AS FLEX AS WE ARE TARGETING THE CHILD IN A PARENT

let ClickedMenuParent4 = document.getElementById("ClickedMenuParent4");
//let round5 = document.getElementById("round5");
//console.log(clickedMenu);
// console.log(round5);

let isClicked1 = false;
ClickedMenuParent4.style.display = "none";

function showMenu4() {
    console.log("showMenu called");
    // isClicked = !isClicked;
    console.log(isClicked);
    
    if(isClicked1 == false) {
        ClickedMenuParent4.style.display = "flex";
        isClicked1 = true;

    } else {
        ClickedMenuParent4.style.display = "none";
        isClicked1 = false;
    }
}
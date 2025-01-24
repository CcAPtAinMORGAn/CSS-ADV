// let clickedMenu = document.getElementById("clickedMenu");
// //let round5 = document.getElementById("round5");
// //console.log(clickedMenu);
// // console.log(round5);

// let isClicked = false;
// clickedMenu.style.display = "none";

// function showMenu() {
//     console.log("showMenu called");
//     // isClicked = !isClicked;
//     console.log(isClicked);
    
//     if(isClicked == false) {
//         clickedMenu.style.display = "block";
//         isClicked = true;

//     } else {
//         clickedMenu.style.display = "none";
//         isClicked = false;
//     }
// }


// ------------------------------------------------------------------------------------------------------------------------------------
// THIS IS SHOWING THE BLACK CONTAINER WHEN WE CLICK IT'S PARENT THAT IS WHY WE HAVE KEPT DISPLAY AS FLEX AS WE ARE TARGETING THE CHILD IN A PARENT


let ClickedMenuParent5 = document.getElementById("ClickedMenuParent5");
//let round5 = document.getElementById("round5");
//console.log(clickedMenu);
// console.log(round5);

let isClicked = false;
ClickedMenuParent5.style.display = "none";

function showMenu5(){
    console.log("showMenu called");
    // isClicked = !isClicked;
    console.log(isClicked);
    
    if(isClicked == false) {
        ClickedMenuParent5.style.display = "flex";
        isClicked = true;

    } else {
        ClickedMenuParent5.style.display = "none";
        isClicked = false;
    }
}



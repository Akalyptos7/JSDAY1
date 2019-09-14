// total sales : F = E * C
// total profit G = E * D
// console.log("Running");

let unitCol = document.querySelector("#units");
console.log(unitCol);
// // Change Style:
// unitCol.style.backgroundColor = "red";
// unitCol.style.border = "2px solid black"
// // Change Content:
// unitCol.textContent = "5888";

//HTMLElement.addEventListener( Event:String, CAllBACK:function);
unitCol.addEventListener("input", handleClick);

function handleClick(e) {
    //G = E * D;
    //E: 
    let unitsProjected = e.target;
    // G:
    let G = unitsProjected.nextElementSibling.nextElementSibling;

    // D:
    let D = unitsProjected.nextElementSibling.previousElementSibling;

    let valE = unitsProjected.textContent;
    let valD = D.textContent;
    valE = parseFloat(valE);
    valD = parseInt(valD);
    console.log(typeof valE, typeof valD);
    console.log("G = ", valE * valD);
    G.textContent = valE * valD;
}





// function demo() {
//     function show() {
//         console.log("show")
//     }
//     show();
// }






//**************
//setInterval function example
/////

// function handler() {
//     console.log("check")
// }

// setInterval(handler, 1000);


// setInterval(function handler(){
//     console.log("match")
// }, 2000);
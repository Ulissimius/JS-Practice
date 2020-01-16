const object = {a: 1, b: 2, c: 3};

for (const property in object) {
    let dataString = `${property}: ${object[property]}`
    console.log(dataString);
  
    pCreate(dataString);
}

//var pound = "#";

// for (let i = 0; i < 7; i++) {
//     logMe();
// }

// for (let i = 1; i < 101; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz Buzz");
//         pCreate("fizz Buzz")   
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//         pCreate("Buzz") 
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//         pCreate("fizz") 
//     } else {
//         console.log(i);
//         pCreate(i) 
//     }
// }

// function logMe() {
//     console.log(pound);
//     pCreate(pound);
//     pound = pound + "#";
// }

function pCreate(data) {
    var para = document.createElement("p");
    var node = document.createTextNode(data);
    para.appendChild(node);

    var element = document.getElementById("bodyId");
    element.appendChild(para);
}
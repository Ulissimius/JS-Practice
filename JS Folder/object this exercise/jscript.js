function calculator() {
    let newObj = read()
    let totalSum = sum(newObj)
    let totalMul = mul(newObj)
    console.log(totalSum + "<-- Sum | Mul -->" + totalMul)

    function read() {
        a = prompt('Enter a number:', '')
        b = prompt('Enter another number:', '')

        let newObj = {
            value1:a,
            value2:b
        }
    
        return newObj
    }
    
    function sum(newObj) {
        
        let totalSum = parseInt(newObj.value1) + parseInt(newObj.value2)
    
        return totalSum
    }
    
    function mul(newObj) {
        let totalMul = parseInt(newObj.value1 * newObj.value2)
    
        return totalMul
    }
}

calculator()


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

// function pCreate(data) {
//     var para = document.createElement("p");
//     var node = document.createTextNode(data);
//     para.appendChild(node);

//     var element = document.getElementById("bodyId");
//     element.appendChild(para);
// }
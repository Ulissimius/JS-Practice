let rateMe = document.getElementById('rating')
let button1 = document.getElementById('btn')
let result = document.createElement("p")
let reff = document.getElementById("special")
//if rateMe = 0-5 0% tip - 25% tip
var dict = {
    0: 0,
    1: 0.05,
    2: 0.10,
    3: 0.15,
    4: 0.20,
    5: 0.25
}

//fill rateMe with 0-5 drop down
for (let i = 0; i < 6; i++) {
    rateMe.innerHTML += `<option value="${i}" id="rt${i}">${i}</option>`
}

function calculateTip () {
    let balance = document.getElementById('total').value
    let numPeople = document.getElementById('numPpl').value
    let tipAmt = dict[rateMe.value]

    let totalAmt = (balance * (tipAmt + 1)) / numPeople
    
    result.innerHTML = "Your total per person (tip included) is: $" + totalAmt.toFixed(2)
    reff.parentNode.insertBefore(result, reff.nextSibling)
    
    console.log(totalAmt)
}
button1.onclick = function () {calculateTip()}
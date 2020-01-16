//#2

let usrInput = prompt('enter a number.', '');
if (usrInput > 0) {
    alert("Greater than 0.")
} else if (usrInput < 0) {
    alert("Less than 0.")
} else if (usrInput == 0) {
    alert("Exactly 0.")
} else {
    alert("Please enter a number.")
}

//----------------------------------------------------------------
//#3
let a, b = Math.random() * 10
let result = (a + b < 4) ? 'Below' : 'Over'

//----------------------------------------------------------------
//#4
let login
let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : ''
let pala = prompt("Enter a palindrome", '')

for (let i = 0, arrL = pala.length - 1; i < Math.ceil(pala.length / 2); i++, arrL--) {
    if (pala[i] == pala[arrL]) {
        console.log(i)
    } else {
        console.log("Word is not a palindrome")
        break
    }

    if (i+1 == Math.ceil(pala.length / 2)) {
        console.log("Word is a palindrome")
    }
}
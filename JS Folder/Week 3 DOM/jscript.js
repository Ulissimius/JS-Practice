//Used for both 2 and 3
let headArea = document.querySelector("head")
headArea.innerHTML = `<style> .listitem { color: red; } .list { color: green; } </style>`

//Exercise 1:
// function newFunc () {
//     let google = document.getElementById('hplogo')
//     google.srcset = ""
//     google.src = "https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"

//     let googlebtn = document.getElementsByClassName("gNO89b")
//     googlebtn[1].value = "Yahoo!"
// }

//Exercise 2:
let bodyChange = document.querySelector('body')
bodyChange.style.fontFamily = "Arial, sans-serif"
let classChange = document.querySelectorAll('li')
classChange.forEach(element => {
    element.className = "listitem"
});
let h2Area = document.querySelector("h2")
h2Area.innerHTML += `<br><img src="http://www.gstatic.com/tv/thumb/persons/1366/1366_v9_bb.jpg" alt="" height="150px" width="auto">`

var arr = ["Matt", "Programing", "Snow Shoe"]

let spanChange = document.querySelectorAll('span')
for (let i = 0; i < 3; i++) {
    spanChange[i].innerHTML = arr[i]
}

//Exercise 3:
var bookArr = []
let ulGrab = document.getElementById('bookList')
var inputGrab = document.getElementsByClassName('input')
var placeHold

inputGrab[4].onclick = function() {bookFill((inputGrab[0].value),(inputGrab[1].value),(inputGrab[2].value),(inputGrab[3].checked))}

function bookFill (a, b, c, d) {
    var countI = 3
    var bookObj = new Object

    bookObj = {
        "Title": a,
        "Author": b,
        "URL": c,
        "Read": d
    }

    bookArr.push(bookObj)
    ulGrab.innerHTML = ""
    bookArr.forEach(element => {
        ulGrab.innerHTML += `<li><p>Title: ${element.Title}</p></li>
        <li><p>Author: ${element.Author}</p></li>
        <li><img src="${element.URL}" alt="" width="auto" height="75px"></li>
        <hr>
        <br>`

        for (let i = 0; i < 2; i++) {
            if (element.Read == true) {
                let somethingnew = document.querySelectorAll('li')
                somethingnew[countI].className = 'list'
            }
            countI += 1   
        }
        countI += 1
    });
}
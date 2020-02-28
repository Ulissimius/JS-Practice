const apiKey = '07a8d49233e2d6834a6b61b32890cac6'
const searchArr = document.querySelectorAll(".search-txt")
const subBtn = document.getElementById("submitbtn")
const contElem = document.getElementById("content")
const sortOp = document.querySelector("#sort")

subBtn.addEventListener('click', e => {
    e.preventDefault()
    var locArr = []

    let request = new XMLHttpRequest();
    //search for ID's
    if (searchArr[0].value != "") {
        request.open("GET", encodeURI("https://developers.zomato.com/api/v2.1/locations?query=" + searchArr[0].value + "&count=1"))
    } else {
        request.open("GET", "https://developers.zomato.com/api/v2.1/locations?query=State%20College&count=1")
    }
    request.setRequestHeader("user-key",apiKey);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            const result = JSON.parse(request.response)
            if (result.location_suggestions.length != 0) {
                locArr.push(result.location_suggestions[0].entity_id, result.location_suggestions[0].entity_type)
                secondCall(locArr)
            } else {
                contElem.innerHTML = ""
                contElem.innerHTML = "<h1>No Place Found!<h1>"
            }
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }     
    }
})

function secondCall(locArr) {
    contElem.innerHTML = ""
    var sortOption = sortOp.value

    if (sortOption == "rating" || sortOption == "cost") {
    } else {
        sortOption = "rating"
    }

    let request = new XMLHttpRequest();
    //Fill in the ID's
    console.log(searchArr[2].value)
    if (searchArr[2].value == "") {
        request.open("GET", encodeURI("https://developers.zomato.com/api/v2.1/search?entity_id="+ locArr[0] +"&entity_type=" + locArr[1] + "&count=10&sort=" + sortOption))
    } else {
        request.open("GET", encodeURI("https://developers.zomato.com/api/v2.1/search?entity_id="+ locArr[0] +"&entity_type=" + locArr[1] + "&q=" + searchArr[2].value + "&count=10&sort=" + sortOption))
    }
    request.setRequestHeader("user-key",apiKey);
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            const result = JSON.parse(request.response)
            console.log(result)

            result.restaurants.forEach(res => {
                var short = res.restaurant

                cardBuilder(short)
            });

            var all = document.querySelectorAll(".shadow-div");

            for(var i = 0; i < all.length; i++) {
                all[i].onclick = function() {
                    if (this.style.zIndex != 1) {
                        var len = String((window.screen.width / 2) - (250 / 2)) + "px"
                        var wid = String((window.screen.height / 2) - (350)) + "px"

                        this.style.top = "0px"
                        this.style.position = 'fixed'
                        this.style.zIndex = '1'
                        this.style.width = "100%"
                        this.style.height = "100%"
                        this.style.backgroundColor = "rgba(0,0,0,0.75)"

                        this.firstChild.style.position = 'absolute';
                        this.firstChild.style.left = len
                        this.firstChild.style.top = wid;
                        this.firstChild.style.zIndex = '2';

                        cardInfoReveal(this)
                    } else {
                        this.firstChild.removeAttribute("style")
                        this.removeAttribute("style")
                        cardInfoReveal(this)
                    }
                }
            }
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }   
}

function cardBuilder(short) {
    const NEA = document.createElement("div") //card container
    const NEB = document.createElement("img") //features image
    const NEC = document.createElement("div") //info container
    const NED = document.createElement("h3") //Title: name
    const NEE = document.createElement("p") //Hours
    const NEF = document.createElement("p") //Rating
    const NEG = document.createElement("div") //Hours container
    const NEH = document.createElement("hr") //Divider between title/info
    const NEI = document.createElement("div") //Shadows content

    NEA.setAttribute("class","card")
    NEB.setAttribute("class","card-img")
    NEC.setAttribute("class","card-container")
    NED.setAttribute("class","card-title")
    NEE.setAttribute("class","card-hours")
    NEF.setAttribute("class","card-rating")
    NEG.setAttribute("class","card-hours-container hide visible")
    NEH.setAttribute("class", "hr")
    NEI.setAttribute("class", "shadow-div")

    if (short.featured_image == "") {
        NEB.setAttribute("src","./images/placeholder.png")
    } else {
        NEB.setAttribute("src", short.featured_image)
    }

    NED.innerHTML = short.name

    if (short.user_rating.aggregate_rating != "0") {
        NEF.innerHTML = "Average Rating: "+short.user_rating.aggregate_rating+"/5"
    } else {
        NEF.innerHTML = "Average Rating: N/A"
    }

    if (short.timings != "") {
        NEE.innerHTML = "Hours:<br>"+short.timings
    } else {
        NEE.innerHTML = "Hours: N/A"
    }

    if (short.location.address != "") {
        NEE.innerHTML += "<br><br>Address: " + short.location.address
    } else {
        NEE.innerHTML += "<br><br>Address: N/A"
    }

    NEE.innerHTML += "<br><br># of Reviews: " + short.all_reviews_count


    NEG.append(NEE)
    NEC.append(NED, NEH, NEF, NEG)
    NEA.append(NEB, NEC)
    NEI.append(NEA)
    contElem.appendChild(NEI)
}

function cardInfoReveal(parent) {
    var show = parent.querySelectorAll(".hide")

    show.forEach(elem => {
        elem.classList.toggle("visible")
    })
}
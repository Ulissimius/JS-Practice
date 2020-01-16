const keyAPI = 'MFwpPcW4pOSaH0JeEXZnH2aFnQMu2Kkl'
const search = document.getElementById("search")
var submitBtn = document.getElementsByClassName('submit')
const body = document.getElementById("body")
const container = document.getElementById("container")
const featured = document.getElementById("featured")
const searchBar = document.getElementById("searchBar")
const searchRes = document.getElementById("searchRes")
const limit = document.getElementById("limit")
var flag = false
var counter


var request = new XMLHttpRequest();
request.open('GET', `https://api.giphy.com/v1/gifs/trending?api_key=${keyAPI}&limit=5`, true);
request.onload = function () {
  // Begin accessing JSON data here
  var resultOut = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    let h = document.createElement('h1')
    h.innerHTML = "Trending"
    container.prepend(h)

    resultOut.data.forEach(gif => {

      let d = document.createElement("div")
      d.setAttribute('class', 'fGif')

      let g = document.createElement("img")
      g.setAttribute(`src`, `${gif.images.fixed_height.url}`)
      g.setAttribute('class', 'fImg')

      featured.appendChild(d)
      d.appendChild(g)
    });

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    body.appendChild(errorMessage);
  }
}
request.send();


submitBtn[0].addEventListener('click', e => {
  searchGifs()
})

submitBtn[1].addEventListener('click', e => {
  searchGifs(false)
})

function searchGifs(clear) {
  if (search.value == "" || limit.value == "") {
    return
  }

  if (clear != false) {
    counter = 0
    searchRes.innerHTML = ''
  } else {
    counter += parseInt(limit.value)
    console.log(counter)
  }

  if (flag != true) {
    let h = document.createElement('h1')
    h.innerHTML = "Search Results"
    searchBar.appendChild(h)

    submitBtn[1].style.display = "block"

    flag = true
  }
  //Make the loadmore use Offset, this skips loading gifs
  var request = new XMLHttpRequest();
  request.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=${keyAPI}&q=${search.value}&limit=${limit.value}&offset=${counter}`, true);
  request.onload = function () {
    // Begin accessing JSON data here
    var resultOut = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

      resultOut.data.forEach(gif => {
        let d = document.createElement('div')
        d.setAttribute('class', 'fGif')

        let g = document.createElement("img")
        g.setAttribute(`src`, `${gif.images.fixed_height.url}`)
        g.setAttribute('class', 'fImg')

        searchRes.appendChild(d)
        d.appendChild(g)
      });

    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Gah, it's not working!`;
      body.appendChild(errorMessage);
    }
  }
  request.send();
}

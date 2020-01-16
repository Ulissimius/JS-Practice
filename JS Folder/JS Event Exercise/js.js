//carousel
var carousel = document.getElementById('pres')
var lftBtn = document.getElementById('lftBtn')
var rgtBtn =  document.getElementById('rgtBtn')
var position = document.getElementById("pres")
var imgFile = 'images/'
var img = [imgFile+"bush.jpg", imgFile+"carter.jpg", imgFile+"clinton.jpg", imgFile+"fdr.jpg", imgFile+"grant.jpg", imgFile+"harding.jpg", imgFile+"harrison.jpg", imgFile+"nixon.jpg", imgFile+"obama.jpg", imgFile+"roosevelt.jpg"]

shuffle(img) //Randomizes the image order on load

//Builds the image list
img.forEach(element => {
    var b = document.createElement('img')
    b.setAttribute('src', element)
    b.setAttribute('class', "presImg")
    b.setAttribute('onclick', 'jumbotronLoad(this)')
    carousel.appendChild(b)
});

lftBtn.addEventListener("click", leftBtn)
rgtBtn.addEventListener("click", rightBtn)

function leftBtn() {
  //set left +175
  var leftVal = findLeft()

  if (leftVal < 0) {
    position.style.left = leftVal + 175 + "px"
  }
}

function rightBtn() {
  //set left -175
  var rightVal = findLeft()

  if (rightVal > -1225) {
    position.style.left = rightVal - 175 + "px"
  }
}

function findLeft() {
  var a
  return a = parseInt(position.style.left.slice(0, position.style.left.length-2))
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
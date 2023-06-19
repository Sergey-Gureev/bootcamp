

const getRandomColor = function() {
    const niceColors = ["black", "purple", "pink", "green", "red", "white", "cyan", "yellow", "orange"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
  }

const list = document.getElementById("container")


const addItem = function () {
    var newItem = document.createElement("div")
    newItem.setAttribute('class', 'box')
    newItem.innerHTML = "A new item!"
    newItem.style.backgroundColor = `${getRandomColor()}`
    list.appendChild(newItem)
}

for (var i=0; i<2; i++) {
    addItem();
}

var boxList = Array.from(document.getElementsByClassName("box"))

const getColor = function() {
    this.innerHTML = "hovered!";
    this.style.backgroundColor = `${getRandomColor()}`;
}
var curColor


for (var box of boxList) {
    box.addEventListener('mouseover', function (e) {
        this.innerHTML = "hovered!";
        this.style.backgroundColor = `${getRandomColor()}`;
        curColor = this.style.backgroundColor
        checkAll()
        console.log(boxList.every(box => box.style.backgroundColor == curColor))
    })
} 

function checkAll() {
    if (boxList.every(box => box.style.backgroundColor == curColor)) {
        setTimeout( function ( ) { alert( "wow super cool" ); }, 10 );
    }
}


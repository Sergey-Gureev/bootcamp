
const box = document.getElementById("box")
box.style.position = 'relative';
box.style.left = '20px';
box.onclick = function () {
    box.innerHTML = "clicked"
}
box.onmouseenter = function() {
  box.style.fontSize = '1.2em'
}

box.onmouseout = function() {
  box.style.fontSize = '1em'
}

const playingField = document.getElementById('playing-field')
const ball = document.getElementById('ball')
const STEP = 25;
const ballWidth = parseInt(ball.offsetWidth)
const fieldWidth = parseInt(playingField.offsetWidth)

const moveRight = function(){
    var positionLeft = parseInt(ball.style.left) || 0
    positionLeft += STEP
    if (positionLeft >= fieldWidth - ballWidth) {
      positionLeft = fieldWidth - ballWidth + parseInt(playingField.style.borderWidth);
    }
    ball.style.left = positionLeft + 'px'
}

const moveLeft = function(){
  var positionLeft = parseInt(ball.style.left) || 0
  positionLeft -= STEP
  if (positionLeft <= 0) {
    positionLeft = 0;
  }
  ball.style.left = positionLeft + 'px'
}

const moveDown = function(){
  var moveDown = parseInt(document.getElementById("ball").style.top) || 0
  moveDown += 5
  if (moveDown >= 83) {
    moveDown = 83;
  }
  document.getElementById("ball").style.top = (moveDown) + '%'
}

const moveUp = function(){
  var position = parseInt(document.getElementById("ball").style.top) || 0
  position -= 5
  if (position <= 0) {
    position = 0;
  }
  document.getElementById("ball").style.top = (position) + '%'
}

const up = document.getElementById('up')
up.onclick = moveUp

const down = document.getElementById('down')
down.onclick = moveDown

const left = document.getElementById('left')
left.onclick = moveLeft

const right = document.getElementById('right')
right.onclick = moveRight

document.addEventListener(
    "keydown", (event) => {
        const keyName = event.key;
        if (keyName == 'ArrowDown') {
          moveDown()
        } else if (keyName == 'ArrowUp') {
          moveUp()
        } else if(keyName == 'ArrowRight') {
          moveRight()
        } else if (keyName == 'ArrowLeft') {
          moveLeft()
        }
})

const header = document.createElement("h1")
const gameField = document.getElementById('playing-field')
// header.className = 
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"

const subHeader = document.createElement('h2')
subHeader.innerHTML = "The  creator: Sergey Gureev"
subHeader.setAttribute("class", "sub-header")
subHeader.style.color = 'green'
subHeader.style.fontFamily = "Helvetica"

el = document.createElement('div')
el.setAttribute('class', 'row');
document.body.insertBefore(el, document.body.firstChild);
el.appendChild(header, document.body.firstChild);
el.appendChild(subHeader, document.body.firstChild);



// Reservations
const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const check = function(customerName) {
  if (customerName in reservations && reservations[customerName]?.claimed == false) {
    customerName[0] = customerName[0].toUpperCase()
    alert('welcome, ' + customerName)
  } else if (!(customerName in reservations)) {
    reservations[customerName] = {'claimed' : true}
    alert(customerName + ' we will add you, welcome ')
  } else if (reservations[customerName]['claimed']) {
    alert(customerName + ', it seems like you already inside !?')
  } 
}

var submit = document.getElementById('submit')

console.log(customer)
submit.onclick = function () {
  var customer = document.getElementById("customer")
  check(customer.value)
} 

// Form
console.log('form ')

const form = document.getElementById('form');
const formButton = document.getElementById('formButton')
console.log(formButton)
const validate = function() {
  console.log('validate ')
  const form = document.getElementById('form');
  console.log(form)

  result = ''
  const name = document.getElementById('name').value
  console.log(name)

  const salary = document.getElementById('salary').value
  console.log(salary)

  const birthday = document.getElementById('birthday').value
  console.log(birthday)

  const myPhone = document.getElementById('phone').value
  console.log(myPhone)


  console.log('name' + name)
  console.log('salary' + salary)
  console.log('birthday' + birthday)
  console.log('phone' + myPhone)

  if (name.length <= 2) {
    result += "Name should have more than 2 char! \n"
  } if (10000 < salary || salary > 16000 || salary === '') {
    result += "we can't afford that salary, best of luck!\n"
  } if (birthday.length < 1) {
    result += "birthday is required \n"
  } if (!(Number.isInteger(Number(myPhone)) && (myPhone.length === 10))) {
    result += 'phone number should be 10 digit'
  } 
  var responce = document.getElementById('responce')
  responce.innerHTML = result
  responce.style.color= 'brown'
  // if form is valid
  if (result === '') {
    form.style.display = 'none'
    alert('submitted')
  } 
}

formButton.onclick = function () {
  validate()
}

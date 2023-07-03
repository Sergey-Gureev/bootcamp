const header = $("h1")
header.css('color', 'blue')

const red = $('.red-div')
red.css('color', 'red')

const li1 = $('ul li:first-child')
li1.css('color', 'green')

const li2 = $('ul li:last-child')
li2.css('color', 'pink')

const brown = $('#brown-div')
brown.css('color', 'brown')

const b1 = $('#b1')
const b2 = $('#b2')

b1.addClass('box')
b2.addClass('box')

const box = $('.box')
box.css('width', '100px')
box.css('height', '100px')
box.css('margin', '10px')
box.css('background-color', 'red')

console.log($('#my-input').val('Terabyte'))

// const color = $("div").data().color  
// console.log(color) //prints #2980b9

const test = $('#test')
const barcode = test.data().barcode
const expiration = test.data().expirationDate

console.log(barcode, expiration)
console.log(expiration)

$("#b1").hover(function () {
    $("#b1").css("background-color", "blue")
})

const alertValue = function() {
    alert($('#my-input-2').val())
}

$('button').click(alertValue)

$("#b1").hover(function () {
    console.log($(this))
})

$('.box-3').hover(function() {
    $(this).css("background-color", "blue")
})

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')
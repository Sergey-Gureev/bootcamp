$('body').append('<div id="first">\
                    <ul id="names"><li>Quimby</li></ul>\
                    <input placeholder="put name here"></input>\
                    <button>Add human</button>\
                </div>')

$('body').on('click', '#first button', function(){
    let name = $('input').val()
    $('#names').append(`<li>${name}</li>`)
    $('input').val('')

})

$('body').on('click', '#names li', function() {
    $(this).remove()
})

$('body').append('<div class="box"></div><div class="box"></div>')

let colors = ['rgb(128, 0, 128)', 'rgb(0, 0, 255)']
let a;
$('body').on('mouseenter', '.box', function() {
    console.log($(this).css('background-color'))
    if ($(this).css('background-color') == colors[0]){
        $('.box').css('background-color', colors[1])
        $(this).css('background-color', colors[0])
    } else {
        $('.box').css('background-color', colors[1])
        $(this).css('background-color', colors[0])
    }
})

$('.item').on('click',  function(){
    if ($(this).data().instock) {
        console.log($(this).text())
        let text = $(this).text()
        $('#cart').append($(`<div class=cart-item>${text}</div>`))
    }
})

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

fruits.forEach(fruit =>
    $('#basket').append(`<div class="${fruit.color}">${fruit.name}</div>`)
)
var elems = $('#colors span')
$('#colors span').css('padding', '10px')
var color
for (let elem of elems) {
    color = $(elem).data().color
    $(elem).css('background-color', `${color}`)
}
$('#colors span').css('margin', '10px')
$('#colors span').css('border-radius', '10px')
$('#colors span').css('border', '1px solid rgb(0,0,0)')
console.log(color)
$('#box22').css('background-color', `${color}`)

$('#colors span').on('click', function(){
    bgColor = $(this).css('background-color')
    $('#box22').css('background-color', `${bgColor}`)
})

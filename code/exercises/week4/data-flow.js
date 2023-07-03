let _posts = [{name: 'Sergey', text:'I wish a ball for plating basketball'},]

const render = function() {
    $('#post-container').empty()
    for (let post of _posts) {
        $('#post-container')
        .append(`<div class="post"><p class="name"><b>${post.name}</b></p><p class="text">${post.text}</p></div>`)
    }
}

render()

$('button').on('click', function() {
    // some validations needed
    let name = $('#name').val()
    let text = $('#text').val()
    _posts.push({name, text})
    console.log(_posts)
    render()
})

$('#post-container').on('click', '.post', function() {
    // console.log($(this).find('.name'))

    let name = $(this).find('.name').text()
    let text = $(this).find('.text').text()
    console.log(name, '&&&',text)
    // var _posts = _posts.filter(function(post) { return post.name != name && post.text != text; });
    _posts = _posts.filter(post => (post.name != name || post.text != text));
    render()
})




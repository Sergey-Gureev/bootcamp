function Renderer() {
    const renderPosts = function (posts) {
        $('#posts').empty()
        // todo add addingposts func
    }
    const addPost = function(post) {
        $('#posts').append(`<div class="post" id="${post.id}"><p class="text"><b>${post.text}</b></p><div class="comments"></div></div>`)
        for (let com of comments) {
            $('.post')[-1].find('.comments').append(`<p id="${com.id}">${com.text}</p>`)
        }
    }
    return renderPosts
}
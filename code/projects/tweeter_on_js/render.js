const Renderer = function()  {
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let post of posts) {
            renderPost(post)
        }
    }
    const renderPost = function(post) {
        $('#posts').append(`<div class="post" data-id="${post.id}"><p class="text"><b>${post.text}</b><span class="delete">X</span></p><div class="comments"></div><input class="input-comment"><button class="put-comment">Comment</button></div>`)
        for (let com of post.comments) {
            $('.post').last().find('.comments').append(`<div class="comment" data-id="${com.id}"><p>${com.text}<span class="delete-comment">X</span></p></div>`)
        }
    }
    return {renderPosts, renderPost}
}
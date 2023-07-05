const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$('#container').on('click', '#post',function() {
    const postText = $('#input').val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
})

$('#container').on('click', '.delete', function() {
    const postId = $(this).closest($('.post')).data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#container').on('click', '.delete-comment',function() {
    const postId = $(this).closest($('.post')).data().id
    const commentId = $(this).closest($('.comment')).data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#container').on('click', '.put-comment', function() {
    const postId = $(this).closest($('.post')).data().id
    var commentText = $(this).siblings('.input-comment').val()
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(tweeter.getPosts())
})
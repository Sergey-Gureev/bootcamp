const Tweeter = function() {
    var _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    var postIdCounter = _posts.length;
    var counter = 0
    for (let post of _posts) {
        counter += post.comments.length
    }
    var commentIdCounter = counter;
    
    const getPosts = function() {return JSON.parse(JSON.stringify(_posts));} 
    
    const addPost = function(text) { 
        postIdCounter += 1
        post = {
          id: 'p' + (postIdCounter),
          text: text,
          comments: [],
        }
        _posts.push(post) 
      }
    
    const removePost = function(postID) {
        _posts = _posts.filter(post => post.id !== postID)  
    }
    
    const getPostById = function(postID){
        post = _posts.filter(post => post.id === postID)[0] 
        return post
    }

    const addComment = function(postID, textComment) {
        post = getPostById(postID)
        commentIdCounter += 1;
        comment = {   
            id: 'c' + (commentIdCounter),
            text: textComment
        }
        post.comments.push(comment)
    }

    const removeComment = function(postID, commentId) {
        post = getPostById(postID)
        post.comments = post.comments.filter(comment => comment.id !== commentId)
    }

    
    return {getPosts, addPost, removePost, addComment, removeComment}
}

var _posts = []

var postIdCounter = 2;

var commentIdCounter = 6;

const getPosts = function() {return _posts;}


const addPost = function(text) { 
    post = {
      id: 'p' + (postIdCounter+1),
      text: text,
      comments: [],
    }
    postIdCounter += 1
    _posts.push(post) 
  }

const removePost = function(postID) {
    // postID = postID.slice(1)
    _posts = _posts.filter(x => x.id !== postID)
}

const addComment = function(postID, text) {
    post = _posts.filter(x => x.id === postID)
    comment = {
        id: 'c' + (commentIdCounter + 1),
        text: text
    }
    commentIdCounter += 1;
    post.comments.push(comment)
}
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

addPost("This is my own post!")
console.log(getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

removePost("p1")
console.log(getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}


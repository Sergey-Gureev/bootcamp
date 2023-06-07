const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (i in names ){
    people.push({'name': names[i], 'age':ages[i]})
}
console.log(people)

//exercise 2

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

for (i in posts){
    if (posts[i]['id'] == 2) {
        delete posts[i]
    }
}
console.log(posts)

//   3
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ] 

  for (post of posts){
    if (post['id'] == 2) {
        for (commentId in post['comments']) {
            if (post['comments'][commentId].id == 3) {
                console.log(post['comments'][commentId], 'to be deleted')
                delete post['comments'][commentId]
            }
            
        }
    }
}
console.log(posts)

// 444 4 4 4 4 4
const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }


Object.entries(dictionary).forEach(([key, value]) => {
    console.log('Words that begin with ' + key + ':');
    for (word of value) {
        console.log('     ', word)
    }
 });
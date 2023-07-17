//ex 1
$.get('https://random-word-api.herokuapp.com/word')
.then((word) => {
    console.log(word[0])
    $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word[0]}`)
    .then(book => {
        console.log(book)
    })
})

//ex2
$.get('https://random-word-api.herokuapp.com/word').then(word => {
    console.log(word[0])
    const API_KEY = 'KBJ9heNSXriM7bZ3nAw9prsgujGCvS7F'
    $.get(`//api.giphy.com/v1/gifs/search?q=${word}&api_key=${API_KEY}&limit=1`).then(response => {
        let url = response.data[0].embed_url
    })

})
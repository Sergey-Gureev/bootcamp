// Exercise 1 
let fetch = function () {
    let isbn = $('#isbn').val()
    console.log(isbn)
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data.items[0].volumeInfo.title)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

//Exercise 2
let fetch2 = function () {
    let queryType = $('#queryType').val()
    let queryValue = $('#queryValue').val()

    console.log(queryType, queryValue)
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            data.items.forEach((item) => {
                // ex 3
                console.log(item.volumeInfo.title)
                console.log(item.volumeInfo.authors)
                console.log(item.volumeInfo.industryIdentifiers)
            })
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

const API_KEY = 'KBJ9heNSXriM7bZ3nAw9prsgujGCvS7F'


function generate() {
    let theme = $('#gif').val()
    console.log( theme )

    $.ajax({
        method: 'GET',
        url: `//api.giphy.com/v1/gifs/search?q=${theme}&api_key=${API_KEY}&limit=1`,
        success: function (response) {
            console.log(response)
            $('iframe').attr('src', response.data[0].embed_url)
        }
    })
}

// var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=${API_KEY}&limit=1`);
//     xhr.done(function(response) { console.log("success got data", response.data[0].url); });
const urllib = require('urllib')

const  aClick = async function () {
    console.log('asdasdasd')
    $('.a').css('background-color', "#f39c12")
    // x = await $.get('http://data.nba.net/10s/prod/v1/2016/players.json')
    x = await $.get('http://data.nba.net/prod/v1/2016/players/201935_profile.json')
    console.log(x)
}


// import { request } from 'urllib';

// urllib.request('http://data.nba.net/prod/v1/2016/players/201935_profile.json').then(res=>{
//     console.log(res)
//     // console.log(res.toString())
//     // console.log(data.toString())
// })
    
urllib.request('http://www.omdbapi.com/?i=tt3896198&apikey=4384afbf&t=The+Lion+King').then(res=>{
    console.log(JSON.parse(res.data.toString())["Released"])
    // console.log(res.toString())
    // console.log(data.toString())
})

console.log('sdfsdf')
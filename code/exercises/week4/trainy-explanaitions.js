$(".feedme").on("click", function(){
    let divCopy = $(this).clone()
    // let divCopy = `<div class=feedme> ${$(this).text()} </div>`
    $("body").append(divCopy)
  })

// An Example:
//   const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

for(let name of names){
  $("body").append(`<div>${name.first} ${name.last}</div>`)
}

$("#plague").hover(function(){
    $("#plague").remove()
})

$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
})
  
$("#blogs").on("click", ".blog", function(){
    $(".blog").text("blargh") 
})
//better:
$("#blogs").on("click", ".blog", function(){
    $(this).text("uncool blog") 
})


const addDiv = function() {
    $("body").append("<div class=box></div>");
};
  
$("button").on("click", function() {
    addDiv();
});
  
$("body").on("click", ".box", function() {
    alert("hi");
});
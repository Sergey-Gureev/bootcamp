let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018  

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4){
        console.log('Would you like an upgrade?')
    } else {
        console.log('Are satisfied your Tesla?')
    }
} else if (boughtTesla && !isUSCitizen) {
    console.log('Would  you like to move to the US')
} else if (boughtTesla) {
    console.log('Would you like to buy Tesla?')
}


// Exercize 1

const numbers = [1,2,3,4,5,6,7,8,9,10]
//delete the second and third elements
numbers.splice(1, 2)

//change the fourth element to 1
numbers.splice(3, 1, 1)

//delete the last 4 elements
numbers.splice(-4, 4)

//add another element 0 to the beginning of the array
numbers.splice(0,0,0)
console.log('expected: ', [0,1,4,5,1])
console.log(numbers)


let p1 = {
    name: 'Jill',
    age: 25,
    city: 'Tel-Aviv',
}


let p2 = {
    name: 'Robert',
    age: 27, 
    city: 'Ramat Gan'
}

if (p1.age == p2.age) {
    console.log('Wow! they have same age!')
}
if (p1.city == p2.city) {
    console.log('Wow! they live in the same city!')
}
console.log(p1.name + ' wanted to date ' + p2.name)
if (p1.city !== p2.city) {
    console.log(p1.name + ' wanted to date ' + p2.name + "but couldn't")
}



// Exercise 2

class Book {
    constructor(autor, title) {
        this.autor = autor
        this.title = title
    }
}

let js = new Book('Nir', 'hello world js')
let python = {author:'Mark Lutz', title:'Python hello world'}

let library = {
    books: []
}

library.books.push(js)
library.books.push(python)

console.log(library) 

// exercise 3
/* Note that prompt will show a popup on your screen and allow you to input some text - that text will be stored inside name
The above code is a reservation system where people can claim their reservations when they arrive.
After receiving the name from the prompt,
If the reservation exists and is unclaimed, welcome the user (console log or use alert)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use ‘Bob’ and ‘Ted’ to test your code:
When you test Bob, it should say “Welcome, Bob”
When you test Ted, it should say “Hmm, someone already claimed this reservation”
If you try a different name, it should say “You have no reservation”
Note: Definitely upload this code to Github, you might want to use it later on ;)*/

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}
  
const customerName = prompt('Please enter the name for your reservation').toLowerCase();

if (customerName in reservations && reservations[customerName]?.claimed == false) {
    customerName[0] = customerName[0].toUpperCase()
    console.log('welcome ', customerName)
} else if (!(customerName in reservations)) {
    reservations[customerName] = {'claimed' : true}
    console.log('we will add you, welcome ', customerName)
} else if (reservations[customerName]['claimed']) {
    console.log('it seems like you already inside !?')
} 

// Extentions
/* You’re going to console log these four options conditionally, based on the values you selected for hasOven and works:
hasOven: true and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.
hasOven: false and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.
hasOven: true and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
hasOven: false and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property. 
Also, she’ll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.*/
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
  
const hasOven = ''
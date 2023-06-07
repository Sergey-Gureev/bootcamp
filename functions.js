const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }

  person.speak("cheese toast")

  // exercise 1
const isEven = function(number){
    if (number%2) {
        console.log(true)
        return number
    }
    console.log(false)
}

  // exercise 2
const filterOddNumbers = function(arr) {
    for (num of arr) {
        isEven(num)
    }
}

// exersize 3
const checkExists = function(myArray, myNumber) {
    if (myNumber in myArray) {
        return true
    }
    return false
}

//exersize 4
const calculator = {

    add: function (a, b){
        return a + b
    },

    subtract: function (a, b){
        return a - b
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// Exersize 5
function  increaseByNameLength(money, name) {
    return money * name.length
}

function makeRegal(my_name) {
    return "His Royal Highness, " + my_name
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"


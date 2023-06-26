//Exercise 1 - Callbacks
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
console.log("pulling it!")
}
  
const pushPull = function(func) {
    func()
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

//Exercise 2 - Callbacks
const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = function(alertFunc) {
    const time = new Date()
    alertFunc(time)
}
  
getTime(returnTime)

//Exercise 3 - Callbacks
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};
  
const logData = function(data) {
    console.log(data)
}

displayData(alert, logData, "I like to party")

//Exercise 4 - Arrow Functions
// Create an arrow function that receives three parameters and 
// returns their sum - it should be one line.
add = (a, b, c) => {a+b+c}

//Exercise 5 - Arrow Functions  
capitalize = (str) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str2
}

// Exercise 6 - Arrow functions
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
}

commentOnWeather = (temp) => {
    console.log("it's " + determineWeather(temp))
}

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

//Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
const shineLight = function()  {
    box = document.getElementsByTagName('body')[0]
    box.setAttribute('id', 'box')
    box.style.backgroundColor = "yellow"
}
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
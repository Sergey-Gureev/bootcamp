const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should alert "I'm no longer hungry"

//   Exercise 2
// Fix the errors to make this work. Here there are two errors in this one.
const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
const garage = {
car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
},
car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
}
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ',  garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//Exercise 3
// There are 2 errors to fix here:
const pumpFuel = function (plane) {
    plane.fuel += 1;
};
  
const airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
        return 'on the ground!';
        }
        else {
        return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

// Exercise 4
// Create a method called stealCoins that takes a number parameter and decreases the tipJar’s 
// coins by that amount:

const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },

    stealCoins: function(number){
        this.coinCount -= number

    }

  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



  //Exercise 5
// Aside from the usual, this code also has 3 syntax errors. Fix everything:
const revealSecret = function () {
    return this.secret;
  };
  
const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result)
};

const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
};

const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);


// Exercise 6
// Read over it, then complete the makeDrink method so that it:
// Only allows you make a drink if it’s a drink in the drinkRequirements object. 
// Otherwise alert: "Sorry, we don’t make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink
// EXERCISE 6.1
// Don’t use any nested if statements!


const coffeeShop = {
    beans: 40,
    money: 0,
  
    drinkRequirements: {
        latte: {beanRequirement: 10, price: 15},
        americano: {beanRequirement: 10, price: 12},
        doubleShot: {beanRequirement: 10, price: 18},
        frenchPress: {beanRequirement: 10, price: 15}
    },

    buyBeans: function (numBeans) {
        // price 1:1
        this.beans += numBeans;
        this.money -= numBeans;
    },

    sellDrink: function (drinkType) {
        if (!(drinkType in this.drinkRequirements)) {
            alert("Sorry, we don't make " + drinkType)
            return
        } 
        
        this.money += this.drinkRequirements[drinkType].price;
        if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
            this.buyBeans(this.money)
        } 
        this.makeDrink(drinkType);
    },

    makeDrink: function (drinkType) {
       
        if (drinkType in this.drinkRequirements && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
            this.beans -= this.drinkRequirements[drinkType].beanRequirement;
            alert('done');
        } 
        // else if (drinkType in this.drinkRequirements && this.beans < this.drinkRequirements[drinkType]) {
        //     alert("Sorry, we're all out of beans!")
        // } else {
        //     alert("Sorry, we don't make " + drinkType);
        // }
    }
}
  
coffeeShop.sellDrink("latte"); 
coffeeShop.sellDrink("americano");
coffeeShop.sellDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.sellDrink("doubleShot");
coffeeShop.sellDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
console.log(coffeeShop.money)
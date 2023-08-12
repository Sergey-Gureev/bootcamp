import pkg from 'validator';
const { isEmail, isMobilePhone, blacklist: _blacklist } = pkg;

import {faker} from '@faker-js/faker';

//Exercise block1:
//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(isEmail('shoobert@dylan')); //=> false
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(isMobilePhone('786-329-9958'));
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(_blacklist(text, blacklist).toLowerCase())

// Exercise block2
const makeHuman = function(number) {
    let arr = []
    for (let i=0; i<number; i++) {
        arr.push(onePerson())
    }
    return arr
}

const onePerson = function() {
    return {
        username: faker.person.fullName(),
        avatar: faker.image.avatar(),
        company: faker.company.name()
    };
}

console.log(makeHuman(2))
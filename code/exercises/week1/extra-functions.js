people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

const capitalize = function(str){
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
  }

const getAge = function(age){
    if (age < 21){
        return 'Underage'
    }
    else if (age > 55) {
        return '55+'
    }
    else {
        return age
    }
 }

 const getProfession = function(profession){
    let professionCapitalised = ''
    let words = profession.split(' ')
    for (word of words) {
        professionCapitalised += `${capitalize(word)} `
    }
    return professionCapitalised
 }

const getPlace = function(country, city){
    place = "" + capitalize(country) + " " + capitalize(city) + "."
    return place
}

const getCatchphrase = function (phrase){
    return capitalize(phrase)
}

const getSummary = function(person){
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += getProfession(person.profession)//call function for profession
    summary += ` from ${getPlace(person.country, person.city)} `//call function for country + city
    summary += `${capitalize(person.name)} loves to say "${getCatchphrase(person.catchphrase)}".` //call function for catchphrasereturn summary
    return summary
  }

  console.log(getSummary(people_info[2]))
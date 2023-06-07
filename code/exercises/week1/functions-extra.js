const story = "In the beginning there was light. Then there were wolves. \
      Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, \
      the fire caused one heck of a lot of damage."
    const specialChars = [",", ".", "'", '"',"?", "!", ";"]
    var wordCounts = {}

wordList = story.split(' ');


for (word of wordList){
    for (char of specialChars){
        if (word.includes(char)){
            word = word.replace(char, '')
        }
    }
    if (word in wordCounts){
        wordCounts[word.toLowerCase()] += 1
    } else{
        wordCounts[word.toLowerCase()] = 1
    }
}
console.log(wordCounts)
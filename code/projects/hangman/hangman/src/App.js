import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Score from './components/Score.js'
import Letters from './components/Letters.js'
import InputText from './components/InputText.js'


function App() {
  const [solution, _] = useState([
    {word: 'FOUR', hint: 'number after 3'},
    {word: 'SIX', hint: 'number after 5'}
  ])
  let word = solution[0].word
  let hint = solution[0].hint

  function generateLetterStatuses(){
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
        letterStatus[String.fromCharCode(i).toUpperCase()] = false
    }
    return letterStatus
  }  
  const [letters, setLetter] = useState(generateLetterStatuses())
  const [answer, setAnswer] = useState(Array.from(word, () => {return '_'}))
  const [score, setScore] = useState([100])

  function check(letter) {
    let newScore = (word.includes(letter) ? Number(score) + 5 : Number(score) -20)  
    setScore(newScore)        

    let newlettersList = {...letters};
    newlettersList[letter] = true

    setLetter(newlettersList)
    checkAnswer(newlettersList)
  }

  function checkAnswer(newlettersList){
    let newAnswer = Array.from(word, (char) => {
      if (newlettersList[char] === true) { 
        return char
      } else {       
        return ('_')
      }
    });
    setAnswer(newAnswer)
  }
  function checkEndGame() {
    if (answer.includes('_') && score <= 0 ){
      return <div Style="background-color: red; color:white; padding:30px 45%; font-size:2rem">game over</div>
    } else if (!answer.includes('_') && score > 0 ){
      return <div Style="background-color: green; color:white; padding:30px 45%; font-size:2rem">congratulations</div>
    } else {
      return ''
    }
  }

  return (
    <div>
      <Score score={score}/>
      <div>secret word: { answer.map(el => {return <span>{el} </span> }) }</div>
      <div>hint: {hint}</div>

      <Letters letters={letters} check={check}/>
      <>{checkEndGame()}</>
      <InputText />
    </div>
  );
}

export default App;

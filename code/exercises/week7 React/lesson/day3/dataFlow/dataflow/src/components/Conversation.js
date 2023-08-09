import React  from 'react';

export default function Conversation ({sender, convo, backToList}) {
    let answer = []
    console.log('str 5:' + convo)
    for (let message of convo){
        let row
        if (message.sender == 'self') {
            row = <p><bold>Me: </bold>{message.text}</p>
        } else {
            row = <p class="sender"><bold>{sender}: </bold>{message.text}</p>
        }
        answer.push(row)
    }
    
    return <div>
            {answer}      <button onClick={backToList}>back</button>
    </div>
  }
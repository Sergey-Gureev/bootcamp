import React, { useState } from 'react';
import Conversation from './Conversation.js'
import List from './List.js'



export default function Exercise2 () {
    const [list, setList] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    });    
    let convo 
    function backToList() {
        let myList = {...list}
        myList.displayConversation = null;
        setList(myList)
    }

    function displayConvo(e, name){
        let myList = {...list}
        myList.displayConversation = name;
        myList.myConvo = myList.conversations.filter((el) => {return el.with === myList.displayConversation})[0].convo
        setList(myList)
    }
    let nameList = list.conversations.map((el) => {return el.with})
    let sender = list.displayConversation
    

    return <div>
        { list.displayConversation 
        ? <Conversation sender={sender} convo={list.myConvo} backToList={backToList}/> 
        : <List nameList={nameList} show={displayConvo}/>}   
    </div>
}
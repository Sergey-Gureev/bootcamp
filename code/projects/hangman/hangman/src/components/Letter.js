import React from 'react'


export default function Letter({l, value, check}) {
    function getLetter(l) {
        if (value == true) {
            return (<button className='true' onClick={checkLetter} Style="padding: 20px; border-radius:5px; background-color: gray;   pointer-events: none;
            ">
            <span Style="color: white">{l.toUpperCase() + ' '} </span></button>);
        } else {
            return (<button className='false' onClick={checkLetter} Style="padding: 20px; border-radius:5px; background-color: white">
            <span Style="color: black">{l.toUpperCase() + ' '}</span></button>)
        }
    }
    const checkLetter = () => check(l)
    
    return (getLetter(l))
}
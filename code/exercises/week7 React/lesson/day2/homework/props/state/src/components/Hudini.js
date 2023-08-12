import React, { Component, useState } from 'react';


export default function Hudini(props) {
    let [show, setShow] = useState(false)
    let positive = "Now you see me"
    let negative = "Now you don't"
    let toggle = () => {
        let newShow = show ? false : true
        setShow(newShow)
    }
    return (
    <div>
        <button onClick={toggle}>Toggle</button>
        <div>{show ? positive : negative}</div>
    </div>
    
    )
}
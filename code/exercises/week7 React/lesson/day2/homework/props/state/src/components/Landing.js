import React, { Component, useState } from 'react';


export default function Landing(props) {
    // let [user, setUser] = useState(props.user)
    
    return (
    <div>
        <div>Hello {props.user}! The hottest item today: {props.hottest.item} for {props.hottest.price}</div>
    </div>
    
    )
}
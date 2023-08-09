import React from 'react';


export default function Contact ({name, show}) {
    return (<p>{name} <button onClick={(e) => {
        show(e, name);
     }}>show</button></p>)
}
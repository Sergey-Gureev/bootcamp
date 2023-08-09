import Contact from "./Contact";
import React from 'react';


export default function List ({nameList, show}) {
    return nameList.map((name) => <Contact name={name} show={show}/> )
}

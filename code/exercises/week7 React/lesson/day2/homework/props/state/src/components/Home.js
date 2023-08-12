import React, { Component, useState } from 'react';
import Item from './Item';


export default function Home(props) {
    
    return (
    <div>
        {props.store.map(item => <Item 
        item={item.item} 
        price={item.price} 
        shouldDiscount={props.shouldDiscount} 
        discount={item.discount}
        key={item.item}/>)}
    </div>
    
    )
}
import React, { Component, useState } from 'react';


export default function Item(item) {
    // let [show, setShow] = useState(false)
    let priceAfterDiscount = item.price * (1 - item.discount)
    let striketrough = <span><strike>{item.price}</strike>  {priceAfterDiscount}</span>
    let newPrice = <span>{item.shouldDiscount ? striketrough : item.price}</span>
    return (
    <div>
        <div>item: {item.item}, price: {newPrice}</div>
    </div>
    )
}
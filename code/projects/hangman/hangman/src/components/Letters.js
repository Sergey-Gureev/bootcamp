import React  from 'react'
import Letter from './Letter.js'

export default function Letters({letters, check}) {
    return (
        <div><p>Available letters:</p>
        {Object.keys(letters).map((l) => {
            return <Letter l={l} value={letters[l]} check={check} />
        })}
        </div>
    )
}
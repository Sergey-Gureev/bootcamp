import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" option onChange={(e) => setFruit(e.target.value)} value={fruit}>
                <option value="banana">banana</option>
                <option value="apple">apple</option>
                <option value="pear">pear</option>
            </select>
            <div>{fruit}</div>
        </div>
    );
}
export default Exercise2;
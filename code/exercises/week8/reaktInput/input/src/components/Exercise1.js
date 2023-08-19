import { useState } from 'react';

const Exercise1 = () => {
    const [person, setPerson] = useState({ name: "", age: "" });

    function handleAlert(){
        alert(`Come in ${person.name}, you're ${person.age} - that's good enough`)
    }
    const handleChange = (event, property) => {
        setPerson({ ...person, [property]: event.target.value });
    }
    return (
        <div>
            <input id="name-input" placeholder="name:" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input id="age-input" placeholder="age:" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button onClick={handleAlert}>Go to Bar</button>
        </div>
    );
}
export default Exercise1;
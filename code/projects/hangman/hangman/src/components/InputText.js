import React, { useState } from 'react'

const InputText = () => {
    const [text, setText] = useState("login:")
    const [agree, setAgree] = useState(false)

    const updateText = (event) => {
        setText(event.target.value)
    }
    function customAlert(){
        if (agree == true) {
            alert(text)
        } else {
            alert('add checkbox for permission: ' + agree)
        }
    }
    function updateCheckbox(event){
        setAgree(event.target.checked)
    }
    return (
        <div>
            {/* <input type="text" value={this.text} onChange={this.updateText}/> */}

            <input type="text" placeholder={text} onChange={updateText} />
            <div><input type="checkbox" onChange={updateCheckbox}/>I'm agree for everithyng</div>
            <button onClick={customAlert}>Alert</button>
        </div>
    )
}

export default InputText

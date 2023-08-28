import styles from "./module.css";
import { useState } from 'react';

const API_KEY = 'KBJ9heNSXriM7bZ3nAw9prsgujGCvS7F'


const Modal = ({setModalOpen, action, filmName}) => {
    let [gifURL, setGifURL] = useState(null)
    getGifURL()
    function getGifURL(){
        fetch(`//api.giphy.com/v1/gifs/search?q=${filmName}&api_key=${API_KEY}&limit=1`)
        .then(response => {
            response.json()
            .then(resp => {
                setGifURL(resp.data[0].embed_url)
            })
        })
    }

    return (
        <div className="modal">
            <button  onClick={() => setModalOpen(false)}>X</button>       
            <div className='modal-content'>{action} <b>{filmName}</b> succesfully </div> 
            <iframe src={gifURL} Style="width:100%"></iframe>
        </div>
    )

}
export default Modal;

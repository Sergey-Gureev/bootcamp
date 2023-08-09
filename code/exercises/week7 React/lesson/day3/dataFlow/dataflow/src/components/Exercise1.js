import React, { useState } from 'react';


export default function Exercise1() {
    const [exercise, setImages] = useState({
        images: [
          "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
          "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    });

    const shiftImageBack = () => {
        let newImages = {...exercise}
        newImages.currentImg -= 1
        setImages(newImages)
    }
    const shiftImageForward = () => {
        let newImages = {...exercise}
        newImages.currentImg += 1 
        setImages(newImages)

    }

    return <div>
        <button onClick={shiftImageBack}>back</button>
        <img src={exercise.images[exercise.currentImg]} width="300px" alt="" srcset="" />
        <button onClick={shiftImageForward}>forward</button>
        </div>

}

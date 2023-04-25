import React, {useState} from "react";
import "../css/carousel.css";

export default function carousel({options}){
    
    const [title, setTitle] = useState(0)

    function previousImage(activeTitle){
        setTitle(activeTitle === 0 ? options.length - 1 : activeTitle-1)
    }

    function nextImage(activeTitle){
        setTitle(activeTitle === options.length -1 ? 0 : activeTitle+1)
    }



    return (
        <>
            <div className="containerCarousel">
                <div className="carousel">

                    <img src="../../assets/image/icons/top-arrow.png" alt="arrow to top" className="imageCarousel next" onClick={() => previousImage(title)}/>

                    <div className="contents">
                        <a href={options[title].url} target="_blank" >
                            <img src={options[title].image} alt="Akame project image" className="imageProject"/>
                        </a>
                        
                        <div className="description">
                            <h2>{options[title].name}</h2>
                            <h4>{options[title].description}</h4>
                        </div>
                        
                    </div>

                    <img src="../../assets/image/icons/botton-arrow.png" alt="arrow to top" className="imageCarousel previous" onClick={() => nextImage(title)}/>
                </div>

                <img src="../../assets/image/icons/undraw_Landscape_photographer_ohgf.png" alt="" className="observerImage" />

            </div>
        </>
    )
}
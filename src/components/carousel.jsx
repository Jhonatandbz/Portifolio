import React, {useEffect, useRef, useState} from "react";
import "../css/carousel.css";
import { writeString } from "../components/funcoes.js";

export default function Carousel({options}){
    
    const textCarousel = useRef(null);
    const [title, setTitle] = useState(0);

    useEffect(() => {

        function write (){
            if(window.scrollY >= 900 && window.scrollY <= 920 && !textCarousel.current.textContent){
                writeString(textCarousel.current, "Aqui estão alguns dos meus projetos!!!")
            }
        }

        console.log("teste")

        window.addEventListener('scroll', write);
        return () => {window.removeEventListener('scroll', write);}
    }, [])



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

                    <img src="./assets/image/icons/top-arrow.png" alt="arrow to top" className="imageCarousel next" onClick={() => previousImage(title)}/>

                    <div className="contents">
                        <a href={options[title].url} target="_blank" rel="noopener noreferrer">
                            <img src={options[title].image} alt="Akame project" className="imageProject"/>
                        </a>
                        
                        <div className="description">
                            <h2>{options[title].name}</h2>
                            <h4>{options[title].description}</h4>
                        </div>
                        
                    </div>

                    <img src="./assets/image/icons/botton-arrow.png" alt="arrow to top" className="imageCarousel previous" onClick={() => nextImage(title)}/>
                </div>

                <div className="containerDialog">

                    <div className="dialogBoxCarousel">

                        <img src="./assets/image/icons/dialog-box.png" alt="" className="dialogBox"/>
                        <p ref={textCarousel} className="apresentationText"></p>
                    </div>

                    <img src="./assets/image/icons/undraw_observer.png" alt="" className="observerImage" />
                </div>
            </div>
        </>
    )
}
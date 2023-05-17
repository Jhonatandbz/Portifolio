import React, {useEffect, useRef, useState} from "react";
import "../css/projects.css";
import { writeString } from "./funcoes.js";

export default function Carousel({proj, tec}){

    const textCarousel = useRef(null);
    const [title, setTitle] = useState(0);
    const [tecno, setTecno] = useState([]);

    useEffect(() => {

        function write (){
            if(window.scrollY >= 900 && window.scrollY <= 920 && !textCarousel.current.textContent){
                writeString(textCarousel.current, "Aqui estão alguns dos meus projetos!!!")
            }
        }

        tecs();

        window.addEventListener('scroll', write);
        return () => {window.removeEventListener('scroll', write);}
    }, [])



    function tecs(){
        let text = proj[title].tec.split(', ');
        let updatedTecno = [];
        for (let index = 0; index < tec.length; index++) {
            if(text.includes(tec[index].name) && !updatedTecno.includes(tec[index].rout)){
                updatedTecno.push(tec[index].rout);
            }
        }
        setTecno(updatedTecno)
    }

    function previousImage(activeTitle){
        setTitle(activeTitle === 0 ? proj.length - 1 : activeTitle-1)
    }

    function nextImage(activeTitle){
        setTitle(activeTitle === proj.length -1 ? 0 : activeTitle+1)
    }

    useEffect(()=>{
        tecs();
    }, [title])

    return (
        <>
            <div className="containerCarousel">
                <div className="carousel">

                    <img src="./assets/image/icons/top-arrow.png" alt="arrow to top" className="imageCarousel next" onClick={() => previousImage(title)}/>

                    <div className="contents">
                        <a href={proj[title].url} target="_blank" rel="noopener noreferrer">
                            <img src={proj[title].image} alt="Project" className="imageProject"/>
                        </a>
                        
                        <div className="description">
                            <h2>{proj[title].name}</h2>
                            <h4>{proj[title].description}</h4>
                            
                            <div className="tecProj">
                                {tecno.map((item, index) =>(
                                    <img src={item} alt={index} className="tecProjImg" key={index}/>
                                ))}
                            </div>
                            
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
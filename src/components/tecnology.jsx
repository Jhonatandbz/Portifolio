import React, {useEffect, useRef} from "react";
import "../css/tecnology.css";
import { writeString } from "../components/funcoes.js";

export default function Tecnology({options}){

    const textTec = useRef(null)
    const timerRef = useRef(null)
    const images = options;
    
    useEffect(()=>{
        const pElement = textTec.current;
        

        function write (){
            if(window.scrollY >= 300 && window.scrollY <= 310 && !pElement.textContent){
                pElement.textContent = ''
                timerRef.current = writeString(pElement, "Possuo conhecimento nas seguintes linguagens de programação:", timerRef.current)
            }
        }

        window.addEventListener('scroll', write);
        return () => {
            window.removeEventListener('scroll', write);
        }
    }, [])  

    function writeTec(description){
        textTec.current.textContent = ''
        timerRef.current = writeString(textTec.current, description, timerRef.current)   
    }

    return (
        <>

        <div className="containerTec">

            <div className="descriptionTec">
                <div className="dialogBoxTec">
                    
                    <img src="./assets/image/icons/dialog-box.png" alt="" />

                    <p ref={textTec} className="apresentationText"></p>
                </div>

                <img src="./assets/image/icons/undraw_Virtual_reality_re_yg8i.png" alt="" className="observe" />
            </div>

            <div className="carouselTec">

                {images.map((item) => {

                    const {id, rout, name, description} = item;
                
                    return (

                        <div className="imagesTec" key={id}>
                            <div className="tecnology" key={id}>
                                <img src={rout} alt={name} onClick={()=>writeTec(description)} key={id}/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        </>
    )
}
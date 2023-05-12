import React, {useEffect, useRef} from "react";
import "../css/tecnology.css";
import { writeString } from "../components/funcoes.js";

export default function Tecnology({options}){

    const textTec = useRef(null)
    const images = options;
    
    useEffect(()=>{
        const pElement = textTec.current;

        function write (){
            if(window.scrollY >= 300 && window.scrollY <= 320 && !pElement.textContent){
                writeString(pElement, "Possuo conhecimento nas seguintes linguagens de programação:")
            }
        }


        window.addEventListener('scroll', write);
        return () => {window.removeEventListener('scroll', write);}
        

    }, [])  

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

                {images.map((item, index) => {

                    const {id, rout, name} = item;
                
                    return (

                        <div className="imagesTec">
                            <div className="tecnology" key={id}>
                                <img src={rout} alt={name}/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        </>
    )
}
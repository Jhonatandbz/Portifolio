import React, {useState, useEffect, useRef} from "react";
import "../css/tecnology.css";
import { writeString } from "../components/funcoes.js";

export default function tecnology({options}){

    const textTec = useRef(null)
    const images = options;
    
    useEffect(()=>{
        const pElement = textTec.current;

        console.log(pElement)

        function write (){
            if(window.scrollY == 300 && !pElement.textContent){
                writeString(pElement, "Possuo conhecimento nas seguintes linguagens de programação:")
            }
        }


        window.addEventListener('scroll', write);
        return () => {window.removeEventListener('scroll', handleScroll);}

    }, [])  

    return (
        <>

        <div className="containerTec">

            <div className="descriptionTec">
                <div className="dialogBoxTec">
                    
                    <img src="../../assets/image/icons/dialog-box.png" alt="" />

                    <p ref={textTec} className="apresentationText"></p>
                </div>

                <img src="../../assets/image/icons/undraw_Virtual_reality_re_yg8i.png" alt="" className="observe" />
            </div>

            <div className="carouselTec">

                {images.map((item, index) => {

                    const {id, rout, name} = item;
                
                    return (

                        <div className="imagesTec">
                            <div className="tecnology" key={id}>
                                <img src={rout}/>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
        </>
    )
}
import React, {useState, useEffect, useRef} from "react";
import "../css/tecnology.css";

export default function tecnology({options}){

    const images = options;


    function teste(index){
        console.log(index)

        if (index%4 === 0) {
            return (<br/>)
        }
        
    }

    return (
        <>

        <div className="containerTec">

            <div className="descriptionTec">
                <img src="../../assets/image/icons/dialog-box.png" alt="" className="dialogBox"/>
                <span></span>
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
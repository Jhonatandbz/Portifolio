import React, {useState, useEffect, useRef} from "react";
import "../css/tecnology.css";
import WriteText from "../components/funcoes";

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

                <div className="dialogBoxTec">
                    
                    <img src="../../assets/image/icons/dialog-box.png" alt="" />

                    <p><WriteText description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, voluptas temporibus nobis doloremque nisi pariatur, at reiciendis recusandae perspiciatis consequatur similique ab eveniet deleniti, vel natus neque dicta vero consequuntur?"></WriteText></p>
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
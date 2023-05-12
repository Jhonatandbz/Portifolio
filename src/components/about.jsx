import React, {useEffect, useRef} from "react";
import "../css/home.css";
import { writeString } from "../components/funcoes";

export default function About(){

    const textHome = useRef(null)

    useEffect(() => {
        
        writeString(textHome.current, "Olá, meu nome é Jhonatan e sou estudante no ultimo ano de Engenharia da Computação da Universidade Federal do Pará (UFPA). Estou em busca de um estágio para aplicar minhas habilidades e expandir meus conhecimentos. Sou apaixonado por tecnologia e estou sempre buscando aprender mais sobre as tendências e boas práticas de mercado.")

    }, [])

    return(
        <>
        <div className="containerHome">
                <div className="myName">

                    <img src="./assets/image/icons/paper.png" alt="paper" className="imagePaper"/>
                    <figcaption className="name">Jhonatan Oliveira</figcaption>
                    <figcaption className="dev"> <em>Dev junior</em></figcaption>
                
                </div>

                <div className="apresentationImage">
                    <div className="dialogBoxStart">
                        <img src="./assets/image/icons/dialog-box.png" alt="" className="dialogBox"/>

                        <p ref={textHome} className="apresentationText"></p>
                    </div>

                    <img src="./assets/image/icons/undraw_tree.png" alt="man next to a tree" />

                </div>
            </div>
        </>
    )
}
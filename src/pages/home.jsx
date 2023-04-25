import React, {useState} from "react";
import Carousel from "../components/carousel";
import Tecnology from "../components/tecnology";
import "../css/home.css";

const tecnology = [
    {   
        id: 1,
        rout: '../../assets/image/tecnology/html-5.png',
        name: 'html 5',
    },
    {   
        id: 2,
        rout: '../../assets/image/tecnology/css-3.png',
        name: 'css 3',
    },
    {   
        id: 3,
        rout: '../../assets/image/tecnology/js.png',
        name: 'Java Script',
    },
    {   
        id: 4,
        rout: '../../assets/image/tecnology/react.png',
        name: 'React',
    },
    {   
        id: 5,
        rout: '../../assets/image/tecnology/python.png',
        name: 'Python',
    },
    {   
        id: 6,
        rout: '../../assets/image/tecnology/c.png',
        name: 'C',
    },
    {   
        id: 7,
        rout: '../../assets/image/tecnology/java.png',
        name: 'Java',
    },
    {   
        id: 8,
        rout: '../../assets/image/tecnology/mysql.png',
        name: 'MySql',
    },

];

const project = [
    {
        name: "Akame ga kill project",
        url: "https://jhonatandbz.github.io/projeto-akame-ga-kill/",
        image: "../../assets/image/projects/akame-project.PNG",
        description: "O primeiro projeto com a utilização das tecnologias HTML5 e CSS3.",
    },
    {
        name: "Interactive card details form main",
        url: "https://jhonatandbz.github.io/interactive-card-details-form-main/",
        image: "../../assets/image/projects/interactive-card.PNG",
        description: "Cartão de credito interativo utilizando HTML5, CSS3 e JavaScript",
    },
    // {
    //     name: "Social network offline",
    //     url: "https://github.com/Jhonatandbz/projeto-rede-social",
    //     image: "",
    //     description: "",
    // },
    // {
    //     name: "",
    //     url: "",
    //     image: "",
    //     description: "",
    // },
];


export default function home(){

    return (
        <>
            <div className="containerHome">
                <div className="myName">

                    <img src="/assets/image/icons/paper.png" alt="" className="imagePaper"/>
                    <figcaption className="name">Jhonatan Oliveira</figcaption>
                    <figcaption className="dev"> <em>Dev junior</em></figcaption>
                
                </div>
            </div>

            <div className="tec">
                    <Tecnology options={tecnology}/>
            </div>


            <div className="projects">
                    <Carousel options={project}/>
            </div>
        </>
    )
}
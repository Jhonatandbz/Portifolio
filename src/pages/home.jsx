import React, {useEffect, useRef} from "react";
import Carousel from "../components/carousel";
import Tecnology from "../components/tecnology";
import "../css/home.css";
import { writeString } from "../components/funcoes";


const tecnology = [
    {   
        id: 1,
        rout: '/Portifolio/assets/image/tecnology/html-5.png',
        name: 'html 5',
    },
    {   
        id: 2,
        rout: '/Portifolio/assets/image/tecnology/css-3.png',
        name: 'css 3',
    },
    {   
        id: 3,
        rout: '/Portifolio/assets/image/tecnology/js.png',
        name: 'Java Script',
    },
    {   
        id: 4,
        rout: '/Portifolio/assets/image/tecnology/react.png',
        name: 'React',
    },
    {   
        id: 5,
        rout: '/Portifolio/assets/image/tecnology/python.png',
        name: 'Python',
    },
    {   
        id: 6,
        rout: '/Portifolio/assets/image/tecnology/c.png',
        name: 'C',
    },
    {   
        id: 7,
        rout: '/Portifolio/assets/image/tecnology/java.png',
        name: 'Java',
    },
    {   
        id: 8,
        rout: '/Portifolio/assets/image/tecnology/mysql.png',
        name: 'MySql',
    },

];

const project = [
    {
        name: "Akame ga kill project",
        url: "https://jhonatandbz.github.io/projeto-akame-ga-kill/",
        image: "/Portifolio/assets/image/projects/akame-project.PNG",
        description: "O primeiro projeto com a utilização das tecnologias HTML5 e CSS3.",
    },
    {
        name: "Interactive card details form main",
        url: "https://jhonatandbz.github.io/interactive-card-details-form-main/",
        image: "/Portifolio/assets/image/projects/interactive-card.PNG",
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

export default function Home() {
    
    const textHome = useRef(null)

    useEffect(() => {

        
        writeString(textHome.current, "Olá, meu nome é Jhonatan e sou estudante no ultimo ano de Engenharia da Computação da Universidade Federal do Pará (UFPA). Estou em busca de um estágio para aplicar minhas habilidades e expandir meus conhecimentos. Sou apaixonado por tecnologia e estou sempre buscando aprender mais sobre as tendências e boas práticas de mercado.")

    }, [])

    return (
        <>
            <div className="containerHome">
                <div className="myName">

                    <img src="/Portifolio/assets/image/icons/paper.png" alt="paper" className="imagePaper"/>
                    <figcaption className="name">Jhonatan Oliveira</figcaption>
                    <figcaption className="dev"> <em>Dev junior</em></figcaption>
                
                </div>

                <div className="apresentationImage">
                    <div className="dialogBoxStart">
                        <img src="/Portifolio/assets/image/icons/dialog-box.png" alt="" className="dialogBox"/>

                        <p ref={textHome} className="apresentationText"></p>
                    </div>

                    <img src="/Portifolio/assets/image/icons/undraw_tree.png" alt="man next to a tree" />

                </div>
            </div>

            <div className="tec">
                    <Tecnology options={tecnology}/>
            </div>
            

            <div className="projects">
                    <Carousel options={project}/>
            </div>

            <aside className="sideMenu">
            <ul className="sideMenuList">
                <li>
                    <a href="https://github.com/Jhonatandbz" rel="noopener noreferrer" target="_blank" >
                        <img src="/Portifolio/assets/image/icons/github.svg" alt="Icone Github" className="icon"/>
                     </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/jhonatan-oliveira-4bb975211/" rel="noopener noreferrer" target="_blank">
                        <img src="/Portifolio/assets/image/icons/linkedin-in.svg" alt="Icone linkedin" className="icon"/>
                    </a>
                </li>
            </ul>
            </aside>
        </>
    )

}



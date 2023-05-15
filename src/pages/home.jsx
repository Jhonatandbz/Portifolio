import React from "react";
import Carousel from "../components/carousel";
import Tecnology from "../components/tecnology";
import About from "../components/about"


const tecnology = [
    {   
        id: 1,
        rout: './assets/image/tecnology/html-5.png',
        name: 'html 5',
        description: 'HTML5 é a versão mais recente da linguagem usada para criar conteúdo na web. Ela oferece novos recursos, como suporte a áudio e vídeo sem plugins, semântica melhorada e maior compatibilidade com dispositivos móveis. Com HTML5, é possível criar páginas web interativas e responsivas.',
    },
    {   
        id: 2,
        rout: './assets/image/tecnology/css-3.png',
        name: 'css 3',
        description: 'CSS3 é a versão mais recente da linguagem usada para definir a aparência e o layout de uma página web. Ela introduz novos recursos, como bordas arredondadas, gradientes, sombras e transições, além de suporte para animações, flexbox e grid layouts, permitindo criar designs mais sofisticados e responsivos.',
    },
    {   
        id: 3,
        rout: './assets/image/tecnology/js.png',
        name: 'Java Script',
        description: 'JavaScript é uma linguagem de programação usada para criar comportamentos interativos em páginas web. Ela permite a validação de formulários, animações e atualização de conteúdo em tempo real. JavaScript é fácil de aprender e possui muitas bibliotecas e frameworks que facilitam o desenvolvimento de aplicativos web.',
    },
    {   
        id: 4,
        rout: './assets/image/tecnology/react.png',
        name: 'React',
        description: 'React é uma biblioteca JavaScript para criação de interfaces de usuário em aplicativos web, utilizando uma abordagem baseada em componentes e o conceito de virtual DOM para atualizações mais eficientes. É amplamente utilizado para desenvolver interfaces modernas e escaláveis.',
    },
    {   
        id: 5,
        rout: './assets/image/tecnology/python.png',
        name: 'Python',
        description: 'Python é uma linguagem de programação de alto nível, interpretada e fácil de aprender. É utilizada em diversas áreas, como inteligência artificial, análise de dados, desenvolvimento web e automação de tarefas. Possui uma sintaxe simples e legibilidade, além de contar com uma grande comunidade de desenvolvedores e bibliotecas.',
    },
    {   
        id: 6,
        rout: './assets/image/tecnology/c.png',
        name: 'C',
        description: 'C é uma linguagem de programação de baixo nível, de propósito geral e eficiente, amplamente utilizada em sistemas operacionais, drivers de dispositivos e aplicações de desempenho crítico.',
    },
    {   
        id: 7,
        rout: './assets/image/tecnology/java.png',
        name: 'Java',
        description: 'Java é uma linguagem de programação orientada a objetos, independente de plataforma e amplamente utilizada para desenvolver aplicativos de desktop, web e móveis. É conhecida por sua portabilidade, segurança e facilidade de manutenção.',
    },
    {   
        id: 8,
        rout: './assets/image/tecnology/mysql.png',
        name: 'MySql',
        description: 'MySQL é um sistema de gerenciamento de banco de dados de código aberto, amplamente utilizado em aplicações web e de negócios para armazenar e manipular grandes quantidades de dados.',
    },{   
        id: 9,
        rout: './assets/image/tecnology/php.png',
        name: 'PHP',
        description: 'PHP é uma linguagem de programação de código aberto usada para desenvolvimento de aplicações web dinâmicas do lado do servidor. É fácil de aprender, suporta vários bancos de dados e é compatível com diversas plataformas. É usado em muitos sites populares, como Facebook e Wikipedia.',
    },

];

const project = [
    {
        name: "Akame ga kill project",
        url: "https://jhonatandbz.github.io/projeto-akame-ga-kill/",
        image: "./assets/image/projects/akame-project.PNG",
        description: "O primeiro projeto com a utilização das tecnologias HTML5 e CSS3.",
    },
    {
        name: "Interactive card details form main",
        url: "https://jhonatandbz.github.io/interactive-card-details-form-main/",
        image: "./assets/image/projects/interactive-card.PNG",
        description: "Cartão de credito interativo utilizando HTML5, CSS3 e JavaScript",
    },
    {
        name: "Social network offline",
        url: "https://github.com/Jhonatandbz/projeto-rede-social",
        image: "./assets/image/projects/social-media-c.png",
        description: "O intuito foi criar uma rede social local utilizando a linguagem C",
    },
    // {
    //     name: "",
    //     url: "",
    //     image: "",
    //     description: "",
    // },
];

export default function Home() {

    return (
        <>
            <div className="about">
                <About></About>
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
                        <img src="./assets/image/icons/github.svg" alt="Icone Github" className="icon"/>
                     </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/jhonatan-oliveira-4bb975211/" rel="noopener noreferrer" target="_blank">
                        <img src="./assets/image/icons/linkedin-in.svg" alt="Icone linkedin" className="icon"/>
                    </a>
                </li>
            </ul>
            </aside>
        </>
    )

}



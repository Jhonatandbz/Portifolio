(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(3),s=t.n(o),r=(t(13),t(1));t(15);function c(e,a,t){var i=0;clearInterval(t);var n=setInterval(function(){i>=a.length?clearInterval(n):(e.innerHTML+=a.charAt(i),i++,e.scrollTop=e.scrollHeight)},20);return n}function l(e){var a=e.proj,t=e.tec,o=Object(i.useRef)(null),s=Object(i.useState)(0),l=Object(r.a)(s,2),m=l[0],d=l[1],u=Object(i.useState)([]),p=Object(r.a)(u,2),g=p[0],v=p[1];function b(){for(var e=a[m].tec.split(", "),i=[],n=0;n<t.length;n++)e.includes(t[n].name)&&!i.includes(t[n].rout)&&i.push(t[n].rout);v(i)}return Object(i.useEffect)(function(){function e(){window.scrollY>=900&&window.scrollY<=920&&!o.current.textContent&&c(o.current,"Aqui est\xe3o alguns dos meus projetos!!!")}return b(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}},[]),Object(i.useEffect)(function(){b()},[m]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"containerCarousel"},n.a.createElement("div",{className:"carousel"},n.a.createElement("img",{src:"./assets/image/icons/top-arrow.png",alt:"arrow to top",className:"imageCarousel next",onClick:function(){var e;d(0===(e=m)?a.length-1:e-1)}}),n.a.createElement("div",{className:"contents"},n.a.createElement("a",{href:a[m].url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:a[m].image,alt:"Project",className:"imageProject"})),n.a.createElement("div",{className:"description"},n.a.createElement("h2",null,a[m].name),n.a.createElement("h4",null,a[m].description),n.a.createElement("div",{className:"tecProj"},g.map(function(e,a){return n.a.createElement("img",{src:e,alt:a,className:"tecProjImg",key:a})})))),n.a.createElement("img",{src:"./assets/image/icons/botton-arrow.png",alt:"arrow to top",className:"imageCarousel previous",onClick:function(){var e;d((e=m)===a.length-1?0:e+1)}})),n.a.createElement("div",{className:"containerDialog"},n.a.createElement("div",{className:"dialogBoxCarousel"},n.a.createElement("img",{src:"./assets/image/icons/dialog-box.png",alt:"",className:"dialogBox"}),n.a.createElement("p",{ref:o,className:"apresentationText"})),n.a.createElement("img",{src:"./assets/image/icons/undraw_observer.png",alt:"",className:"observerImage"}))))}t(18);function m(e){var a=e.options,t=Object(i.useRef)(null),o=Object(i.useRef)(null),s=a;return Object(i.useEffect)(function(){var e=t.current;function a(){window.scrollY>=300&&window.scrollY<=310&&!e.textContent&&(e.textContent="",o.current=c(e,"Possuo conhecimento nas seguintes linguagens de programa\xe7\xe3o:",o.current))}return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"containerTec"},n.a.createElement("div",{className:"descriptionTec"},n.a.createElement("div",{className:"dialogBoxTec"},n.a.createElement("img",{src:"./assets/image/icons/dialog-box.png",alt:""}),n.a.createElement("p",{ref:t,className:"apresentationText"})),n.a.createElement("img",{src:"./assets/image/icons/undraw_Virtual_reality_re_yg8i.png",alt:"",className:"observe"})),n.a.createElement("div",{className:"carouselTec"},s.map(function(e){var a=e.id,i=e.rout,s=e.name,r=e.description;return n.a.createElement("div",{className:"imagesTec",key:a},n.a.createElement("div",{className:"tecnology",key:a},n.a.createElement("img",{src:i,alt:s,onClick:function(){return function(e){t.current.textContent="",o.current=c(t.current,e,o.current)}(r)},key:a})))}))))}t(20);function d(){var e=Object(i.useRef)(null);return Object(i.useEffect)(function(){c(e.current,"Ol\xe1, meu nome \xe9 Jhonatan e sou estudante no ultimo ano de Engenharia da Computa\xe7\xe3o da Universidade Federal do Par\xe1 (UFPA). Estou em busca de um est\xe1gio para aplicar minhas habilidades e expandir meus conhecimentos. Sou apaixonado por tecnologia e estou sempre buscando aprender mais sobre as tend\xeancias e boas pr\xe1ticas de mercado.")},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"containerHome"},n.a.createElement("div",{className:"myName"},n.a.createElement("img",{src:"./assets/image/icons/paper.png",alt:"paper",className:"imagePaper"}),n.a.createElement("figcaption",{className:"name"},"Jhonatan Oliveira"),n.a.createElement("figcaption",{className:"dev"}," ",n.a.createElement("em",null,"Dev junior"))),n.a.createElement("div",{className:"apresentationImage"},n.a.createElement("div",{className:"dialogBoxStart"},n.a.createElement("img",{src:"./assets/image/icons/dialog-box.png",alt:"",className:"dialogBox"}),n.a.createElement("p",{ref:e,className:"apresentationText"})),n.a.createElement("img",{src:"./assets/image/icons/undraw_tree.png",alt:"man next to a tree"}))))}var u=[{id:1,rout:"./assets/image/tecnology/html-5.png",name:"html 5",description:"HTML5 \xe9 a vers\xe3o mais recente da linguagem usada para criar conte\xfado na web. Ela oferece novos recursos, como suporte a \xe1udio e v\xeddeo sem plugins, sem\xe2ntica melhorada e maior compatibilidade com dispositivos m\xf3veis. Com HTML5, \xe9 poss\xedvel criar p\xe1ginas web interativas e responsivas."},{id:2,rout:"./assets/image/tecnology/css-3.png",name:"css 3",description:"CSS3 \xe9 a vers\xe3o mais recente da linguagem usada para definir a apar\xeancia e o layout de uma p\xe1gina web. Ela introduz novos recursos, como bordas arredondadas, gradientes, sombras e transi\xe7\xf5es, al\xe9m de suporte para anima\xe7\xf5es, flexbox e grid layouts, permitindo criar designs mais sofisticados e responsivos."},{id:3,rout:"./assets/image/tecnology/js.png",name:"Java Script",description:"JavaScript \xe9 uma linguagem de programa\xe7\xe3o usada para criar comportamentos interativos em p\xe1ginas web. Ela permite a valida\xe7\xe3o de formul\xe1rios, anima\xe7\xf5es e atualiza\xe7\xe3o de conte\xfado em tempo real. JavaScript \xe9 f\xe1cil de aprender e possui muitas bibliotecas e frameworks que facilitam o desenvolvimento de aplicativos web."},{id:4,rout:"./assets/image/tecnology/ts.png",name:"Type Script",description:"TypeScript \xe9 uma linguagem de programa\xe7\xe3o baseada em JavaScript que adiciona recursos avan\xe7ados, como tipagem est\xe1tica, ao desenvolvimento web. Com TypeScript, \xe9 poss\xedvel identificar erros e bugs antes mesmo de executar o c\xf3digo, resultando em aplicativos mais confi\xe1veis e de alta qualidade. "},{id:5,rout:"./assets/image/tecnology/react.png",name:"React",description:"React \xe9 uma biblioteca JavaScript para cria\xe7\xe3o de interfaces de usu\xe1rio em aplicativos web, utilizando uma abordagem baseada em componentes e o conceito de virtual DOM para atualiza\xe7\xf5es mais eficientes. \xc9 amplamente utilizado para desenvolver interfaces modernas e escal\xe1veis."},{id:6,rout:"./assets/image/tecnology/python.png",name:"Python",description:"Python \xe9 uma linguagem de programa\xe7\xe3o de alto n\xedvel, interpretada e f\xe1cil de aprender. \xc9 utilizada em diversas \xe1reas, como intelig\xeancia artificial, an\xe1lise de dados, desenvolvimento web e automa\xe7\xe3o de tarefas. Possui uma sintaxe simples e legibilidade, al\xe9m de contar com uma grande comunidade de desenvolvedores e bibliotecas."},{id:7,rout:"./assets/image/tecnology/c.png",name:"C",description:"C \xe9 uma linguagem de programa\xe7\xe3o de baixo n\xedvel, de prop\xf3sito geral e eficiente, amplamente utilizada em sistemas operacionais, drivers de dispositivos e aplica\xe7\xf5es de desempenho cr\xedtico."},{id:8,rout:"./assets/image/tecnology/java.png",name:"Java",description:"Java \xe9 uma linguagem de programa\xe7\xe3o orientada a objetos, independente de plataforma e amplamente utilizada para desenvolver aplicativos de desktop, web e m\xf3veis. \xc9 conhecida por sua portabilidade, seguran\xe7a e facilidade de manuten\xe7\xe3o."},{id:9,rout:"./assets/image/tecnology/mysql.png",name:"MySql",description:"MySQL \xe9 um sistema de gerenciamento de banco de dados de c\xf3digo aberto, amplamente utilizado em aplica\xe7\xf5es web e de neg\xf3cios para armazenar e manipular grandes quantidades de dados."},{id:10,rout:"./assets/image/tecnology/php.png",name:"PHP",description:"PHP \xe9 uma linguagem de programa\xe7\xe3o de c\xf3digo aberto usada para desenvolvimento de aplica\xe7\xf5es web din\xe2micas do lado do servidor. \xc9 f\xe1cil de aprender, suporta v\xe1rios bancos de dados e \xe9 compat\xedvel com diversas plataformas. \xc9 usado em muitos sites populares, como Facebook e Wikipedia."},{id:11,rout:"./assets/image/tecnology/cs.png",name:"C#",description:"C# \xe9 uma linguagem de programa\xe7\xe3o moderna, orientada a objetos e multiplataforma, desenvolvida pela Microsoft. Com uma sintaxe simples e recursos avan\xe7ados, \xe9 amplamente usado para o desenvolvimento de aplicativos desktop, web e mobile. Sua integra\xe7\xe3o com a plataforma .NET oferece interoperabilidade com outras linguagens e tecnologias. C# \xe9 popular devido \xe0 sua facilidade de aprendizado, poder e suporte da comunidade."}],p=[{name:"CRUD using C#",url:"https://github.com/Jhonatandbz/CSharp_CRUD",image:"./assets/image/projects/crud-cs.png",description:"Projeto CRUD utilizando C#.",tec:"C#"},{name:"Akame ga kill project",url:"https://jhonatandbz.github.io/projeto-akame-ga-kill/",image:"./assets/image/projects/akame-project.PNG",description:"O primeiro projeto com a utiliza\xe7\xe3o das tecnologias HTML5, CSS3 e JS.",tec:"html 5, css 3, Java Script"},{name:"Interactive card details form main",url:"https://jhonatandbz.github.io/interactive-card-details-form-main/",image:"./assets/image/projects/interactive-card.PNG",description:"Cart\xe3o de credito interativo utilizando HTML5, CSS3 e JavaScript",tec:"html 5, css 3, Java Script"},{name:"Social network offline",url:"https://github.com/Jhonatandbz/projeto-rede-social",image:"./assets/image/projects/social-media-c.png",description:"O intuito foi criar uma rede social local utilizando a linguagem C",tec:"C"},{name:"Game Wumpus using AI",url:"https://github.com/Jhonatandbz/wumpus-IA",image:"./assets/image/projects/wumpusGame.png",description:"Este \xe9 o jogo do incr\xedvel mundo de wumpus utilizando Inteligencia artificial para solucion\xe1-lo",tec:"Python"},{name:"Portif\xf3lio",url:"https://jhonatandbz.github.io/Portifolio/",image:"./assets/image/projects/portifolio.PNG",description:"O portif\xf3lio que estamos agora, que \xe9 meu projeto mais recente utilizando React",tec:"html 5, css 3, Java Script, React"},{name:"Meu Time",url:"https://jhonatandbz.github.io/time/",image:"./assets/image/projects/meu-time.png",description:"Projeto usando API-Football para apresentar dados de times de diferentes ligas e temporadas",tec:"html 5, css 3, Type Script, React"},{name:"Century Game",url:"https://github.com/Jhonatandbz/century-game",image:"./assets/image/projects/century-game.PNG",description:"Jogo criado utilizando as bibliotecas Pygame e OpenGL da linguagem python",tec:"Python"}];function g(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"about"},n.a.createElement(d,null)),n.a.createElement("div",{className:"tec"},n.a.createElement(m,{options:u})),n.a.createElement("div",{className:"projects"},n.a.createElement(l,{proj:p,tec:u})),n.a.createElement("aside",{className:"sideMenu"},n.a.createElement("ul",{className:"sideMenuList"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/Jhonatandbz",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"./assets/image/icons/github.svg",alt:"Icone Github",className:"icon"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/jhonatan-oliveira-4bb975211/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"./assets/image/icons/linkedin-in.svg",alt:"Icone linkedin",className:"icon"}))))))}var v=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,24)).then(function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,o=a.getLCP,s=a.getTTFB;t(e),i(e),n(e),o(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(n.a.createElement(g,null)),v()},4:function(e,a,t){e.exports=t(23)}},[[4,3,2]]]);
//# sourceMappingURL=main.7cb1470b.chunk.js.map
import React, {useState ,useEffect} from "react";

function writeText(props){

    const [description, setDescription] = useState('')

    useEffect(() => {

        
        // console.log(scroll)
        var text = props.description.split('').reverse()
        var aux = ''


        function handleScroll(){
            // window.scrollY
            var typer = setInterval(function(){
                if(!text.length) return clearInterval(typer);
                var next = text.pop();
                aux += next;
                setDescription(aux);
            }, 100)
        }

    }, [])

    return (
        <>
            {description}
        </>
    );
}

export default writeText;
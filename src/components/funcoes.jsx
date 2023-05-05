import React, {useState ,useEffect} from "react";

function writeText(props){

    var text = props.description.split('').reverse()
    var aux = ''
    const [description, setDescription] = useState('')

    useEffect(() => {

        var typer = setInterval(function(){
            if(!text.length) return clearInterval(typer);
            var next = text.pop();
            aux += next
            setDescription(aux)
        }, 2)

    }, [])

    return (
        <>
            {description}
        </>
    );
}

export default writeText;
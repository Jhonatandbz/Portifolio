import React from "react";

function writeText(props){

    var description = props.description
    var text = description.split('').reverse()
    var aux = ''

    var typer = setInterval(function(){
        if(!text.length) return clearInterval(typer);
        var next = text.pop();
        aux += next;
    }, 100);

    return (
        <>
            {aux}
        </>
    );
}

export default writeText;
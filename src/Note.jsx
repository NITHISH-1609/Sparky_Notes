import React from "react";
import notes from "./Notes";

function singlenote(props){
    return (
        <div className="note">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
        </div>
    );
}


function Note(){
    return (

        <div>

            {notes.map(singlenote)}

        </div>
        
    );
}

export default Note;
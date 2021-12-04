import React from "react";


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


function Note(props){
    return (

        <div>

            {singlenote(props)}

        </div>
        
    );
}

export default Note;
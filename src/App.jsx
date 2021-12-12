import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";



function App() {
    
const [Notes,SetNotes] = useState([]);

function addnote(event){
    SetNotes(ele=>{
        return [...ele,event];
    });
}

function delenote(event){
    SetNotes(ele=>{
        return ele.filter((values,index)=>{
            return index!==event;
        })
    })
}

return ( <div>
    < Header />
    <CreateArea addnotex={addnote} /> 
    {Notes.map((ele,index)=>{
        return (
            <Note key={index} id={index} deletex={delenote} title={ele.title} content={ele.content} /> 
        );
    })}
    < Footer />

</div>);
}
export default App;
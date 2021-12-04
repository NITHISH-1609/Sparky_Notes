import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./Notes";

function contents(props){
    
    return <Note key={props.key} title={props.title} content={props.content} />

}

function App() {
return ( <div>
    < Header />
    {notes.map(contents)}
    < Footer />

</div>);
}
export default App;
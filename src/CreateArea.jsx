import React, { useState } from "react";



function CreateArea(propsx) {
const [Title, setTitle] = useState({title:"",content:""});

const Changing = (props) =>{
  
  const {name, value} = props.target;
    setTitle((prev)=>{return {...prev,[name]:value};});
    
}

const onClicking = (event) => {
  propsx.addnotex(Title);
  setTitle({title:"",content:""});
  event.preventDefault();
}

  return (
    <div >
      <form className="create-note">
        <input onChange={Changing} name="title" placeholder="Title" value={Title.title} />
        <textarea onChange={Changing} name="content" placeholder="Take a note..." rows="3" value={Title.content}/>
        <button onClick={onClicking} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

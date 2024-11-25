
import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  
  const [inputText,setInput]=useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value}=event.target;
    setInput(prevValue=>({
      ...prevValue,
      [name]:value
    }))
  }
  function handleAddbtn(event){
      props.onAdd(inputText)
      setInput({
        title:"",
        content:""
      }
      )
      event.preventDefault();
    
  }
  const [handleFab,setFab]=useState(false);
  function handeContent(){
    setFab(true);
  }
  
  return (
    <div>
      <form className="create-note">
        {handleFab&&<input name="title" placeholder="Title" onChange={handleChange} value={inputText.title} />}
        <textarea name="content" placeholder="Take a note..." rows={handleFab?"3":"1"} onChange={handleChange} value={inputText.content} onClick={handeContent}/>
        <Zoom in={handleFab}><Fab  onClick={handleAddbtn}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

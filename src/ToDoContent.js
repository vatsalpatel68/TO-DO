import React, { useState } from "react";

 function ToDoContent(props) {

    const [name, setName] = useState("");
    const [list ,addList] = useState([]);
   
    const handleSubmit = (evt) => {
      evt.preventDefault();
      addList([...list,name])
      setName('');
  }
  const removeFromTheArray = (list,value) =>
  {
        return list.filter(function(ele){
            return ele !== value;
        })
  }
  const removedata = (event) =>{
      addList(removeFromTheArray(list,event.target.value))
  }
  var counter = 0;
  return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className = {"inputField"}
                value={name}
                onChange={e => setName(e.target.value)  }
            
                />
            <input className = {'SubmitButton'}type="submit" value="Submit" />
            </form>

            <ul>
                {
                   list.map(dt => <li key ={counter++}className = "list-items"><button onClick = {removedata} value={dt}>{dt}</button></li>)
                }
            </ul>
        </React.Fragment>
  
  );
}

export default ToDoContent;
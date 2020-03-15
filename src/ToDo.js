import React from 'react';
import ToDoHeading from './ToDoHeading.js';
import ToDoContent from './ToDoContent.js';
import './Heading.css';
function ToDo(){

    return(
        <React.Fragment>
            <ToDoHeading />
            <ToDoContent />
        </React.Fragment>
    )
}

export default ToDo;
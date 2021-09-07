import React, { useState } from 'react';

import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChance = (e) => {
        // console.log(e.target.value);  mostra as alterações no console
        setInputData(e.target.value);
    };

    const hundleAddTaskClick = () =>{
        handleTaskAddition(inputData);
        setInputData("");
    }
    return ( 
        <div className="add-task-container">
            <input onChange={handleInputChance} value={inputData} className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={hundleAddTaskClick}>Adicionar</Button>
            </div>    
        </div>
     );
}
 
export default AddTask;
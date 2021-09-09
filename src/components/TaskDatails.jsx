import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import "./TaskDatails.css";

const TaskDatails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (  
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse architecto dicta maxime sit, aut est, tempore deserunt nisi itaque ipsa corporis, commodi voluptas! Doloremque maiores tenetur perferendis facilis? Odit, 
              totam?  
            </p>
        </div>
        </>
    );
}
 
export default TaskDatails;
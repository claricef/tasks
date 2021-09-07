import React from 'react';

import './Button.css'
const Button = ({children, onClick }) => { //children é tudo que fica dentro de um componente quando ele é chamado
    return (
        <button onClick={onClick} className="add-button">
            {children}
       </button>
    );
};


export default Button;

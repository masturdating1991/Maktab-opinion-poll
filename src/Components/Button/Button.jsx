import React from 'react';
import './Button.scss'
import { Link } from "react-router-dom";
import Data from "../db/db";


function Button({ index, text, click }) {


    return (
        <Link to={`${index === Data.questions.length - 1 ? '/end' : index + 1}`} >
            {
                <button onClick={click} className='inner-btn-text'>
                    {text}
                </button>
            }

        </ Link>
    )
}

export default Button;
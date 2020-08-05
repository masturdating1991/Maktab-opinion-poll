import React from 'react';
import './Button.scss'
import { Link } from "react-router-dom";
import Data from "../db/db";


function Button({ index, text }) {
    return (
        <button>
            {
                <Link to={`${index === Data.questions.length - 1 ? '/end' : index + 1}`}>
                    {text}
                </Link>
            }
        </button>
    )
}

export default Button;
import React from 'react';
import Data from "../db/db";
import './Background.scss'

function Background(props) {
    return (
        <div className='Background'>
            <img className='bgc' src={Data.background_url} alt='Background'/>
            {props.children}
        </div>
    );
}

export default Background;
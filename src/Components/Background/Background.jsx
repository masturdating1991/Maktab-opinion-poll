import React from 'react';
import Data from "../db/db.js";
import './Background.scss'

function Background(props) {

    return (
        <div className='Background'>
            <img className='bgc' src={Data.background_url} alt='Background' />
            <div className="stepper">
                <span
                    className={`${window.location.pathname === '/' ? 'stepper-circle st-0' : 'stepper-circle'}`}>
                </span>

                <span
                    className={`${window.location.pathname === '/0' ? 'stepper-circle st-0' : 'stepper-circle'}`}>
                </span>

                <span
                    className={`${window.location.pathname === '/1' ? 'stepper-circle st-0' : 'stepper-circle'}`}>
                </span>

                <span
                    className={`${window.location.pathname === '/2' ? 'stepper-circle st-0' : 'stepper-circle'}`}>
                </span>

                <span
                    className={`${window.location.pathname === '/end' ? 'stepper-circle st-end' : 'stepper-circle'}`}>
                </span>

                <span className={`${window.location.pathname === '/0' ? 'stepper-color-0' :
                    window.location.pathname === '/1' ? 'stepper-color-1' :
                        window.location.pathname === '/2' ? 'stepper-color-2' :
                            window.location.pathname === '/end' ? 'stepper-color-end' : 'stepper-color'}`}> </span>
            </div>
            {props.children}
        </div>
    );
}

export default Background;
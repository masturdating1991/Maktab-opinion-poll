import React from 'react'
import Data from '../../db/db.js'
import './End.scss'
import Background from "../../Background/Background";
import {Link} from "react-router-dom";

function End() {
    return (
        <Background>
            <div className='End'>
                <button className='home'>
                    <Link to='/'>Home</Link>
                </button>
                <div className="stepper">
                    <span className='stepper-circle st1'> </span>
                    <span className='stepper-circle st2'> </span>
                    <span className='stepper-circle st3'> </span>
                    <span className='stepper-circle st4'> </span>
                    <span className='stepper-circle st5'> </span>
                    <span className='stepper-color'></span>
                </div>

                <div className="backdrop">
                    <h1 dir='rtl'>با تشکر از وقتی که صرف پاسخگویی به سوالات کردید.</h1>
                    <img src={Data.logo_url} alt='Logo'/>
                </div>

                <div className='footer'>
                    <div className='footer-intro'>
                        <button>Soally</button>
                        <p>قدرت گرفته از</p>
                    </div>
                    <p>پلتفرم طراحی فرم های CRM آنلاین</p>
                </div>
            </div>
        </Background>
    )
}

export default End

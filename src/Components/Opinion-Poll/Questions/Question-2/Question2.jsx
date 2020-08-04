import React from 'react'
import Data from '../../../db/db.js'
import {Link} from "react-router-dom";
import './Question2.scss'
import Background from "../../../Background/Background";

function Question2() {
    return (
        <Background>
            <div className='Question2'>
                <div className="stepper">
                    <span className='stepper-circle st1'> </span>
                    <span className='stepper-circle st2'> </span>
                    <span className='stepper-circle st3'> </span>
                    <span className='stepper-circle st4'> </span>
                    <span className='stepper-circle st5'> </span>
                    <span className='stepper-color'></span>
                </div>

                <div className='question-ask'>
                    <h2>{Data.questions[1].text}</h2>
                </div>
                <div className='question-answer'>
                    <button><Link to='/ques3'>{Data.questions[1].options[0].text}</Link></button>
                    <button><Link to='/ques3'>{Data.questions[1].options[1].text}</Link></button>
                    <button><Link to='/ques3'>{Data.questions[1].options[2].text}</Link></button>
                </div>

                <footer>
                    <div className='footer-left'>
                        <div className='footer-left-intro'>
                            <button>Soally</button>
                            <p>قدرت گرفته از</p>
                        </div>
                        <p dir='rtl'>پلتفرم طراحی فرم های CRM آنلاین</p>
                    </div>

                    <div className="footer-right">
                        <img src={Data.logo_url} alt='Logo'/>
                    </div>
                </footer>
            </div>
        </Background>
    )
}

export default Question2

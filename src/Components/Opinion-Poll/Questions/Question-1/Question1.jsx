import React from 'react'
import Data from '../../../db/db'
import './Question1.scss'
import Background from "../../../Background/Background";

function Question1() {
    return (
        <Background>
            <div className='Question1'>
                <div className='question-ask'>
                    <h2>{Data.questions[0].text}</h2>
                </div>
                <div className='question-answer'>
                    <button>{Data.questions[0].options[0].text}</button>
                    <button>{Data.questions[0].options[1].text}</button>
                    <button>{Data.questions[0].options[2].text}</button>
                </div>

                <footer>
                    <div className="footer-right">
                        <img src={Data.logo_url} alt='Logo'/>
                    </div>


                    <div className='footer-left'>
                        <div className='footer-left-intro'>
                            <p>قدرت گرفته از</p>
                            <button>Soally</button>
                        </div>
                        <p>پلتفرم طراحی فرم های CRM آنلاین</p>
                    </div>
                </footer>
            </div>
        </Background>
    )
}

export default Question1

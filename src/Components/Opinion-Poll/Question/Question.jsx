import React from 'react'
import Data from '../../db/db.js'
import './Question.scss'
import Background from "../../Background/Background";
import Button from "../../Button/Button";


function Question({ data, index }) {


    return (
        <Background>
            <div className='Question'>

                <div className='question-ask'>
                    {
                        <h2>{data.text}</h2>
                    }
                </div>
                <div className='question-answer'>
                    {
                        data.options.map(item =>
                            <Button
                                key={item.key}
                                text={item.text}
                                index={index}
                            />
                        )
                    }

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
                        <img src={Data.logo_url} alt='Logo' />
                    </div>
                </footer>
            </div>
        </Background>
    )
}

export default Question

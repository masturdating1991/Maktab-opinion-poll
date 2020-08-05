import React from 'react';
import Data from "../db/db";
import './QuestionFooter.scss'

function QuestionFooter() {
    return (
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
    );
}

export default QuestionFooter;
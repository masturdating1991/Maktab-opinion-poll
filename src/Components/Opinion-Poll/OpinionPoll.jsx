import React from 'react'
import Data from '../db/db'
import './OpinionPoll.scss'

function OpinionPoll() {
    return (
        <div className='OpinionPoll'>
            <img className='bgc' src={Data.background_url} alt='Background'/>
            <div className="backdrop">
                <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                <img src={Data.logo_url} alt='Logo'/>
                <button>شروع</button>

                <div className='footer'>
                    <div className='footer-intro'>
                        <p>قدرت گرفته از</p>
                        <a href='#'>Soally</a>
                    </div>
                    <p>پلتفرم طراخی فرم های CRM آنلاین</p>
                </div>
            </div>
        </div>
    )
}

export default OpinionPoll

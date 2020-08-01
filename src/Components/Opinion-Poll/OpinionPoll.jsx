import React from 'react'
import Data from '../db/db'
import './OpinionPoll.scss'

function OpinionPoll() {
    return (
        <div className='OpinionPoll'>
            <img className='bgc' src={Data.background_url} />
            <div class="backdrop">
                <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                <img src={Data.logo_url} />
                <button>شروع</button>
            </div>
        </div>
    )
}

export default OpinionPoll

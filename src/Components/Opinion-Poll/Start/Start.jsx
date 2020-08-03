import React from 'react'
import Data from '../../db/db'
import './Start.scss'
import Background from "../../Background/Background";

function Start() {
    return (
        <Background>
            <div className='Start'>
                <div className="backdrop">
                    <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <img src={Data.logo_url} alt='Logo'/>
                    <button>
                        شروع
                    </button>
                </div>

                <div className='footer'>
                    <div className='footer-intro'>
                        <p>قدرت گرفته از</p>
                        <button>Soally</button>
                    </div>
                    <p>پلتفرم طراحی فرم های CRM آنلاین</p>
                </div>
            </div>
        </Background>
    )
}

export default Start

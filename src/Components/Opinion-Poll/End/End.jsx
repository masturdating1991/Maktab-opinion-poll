import React from 'react'
import Data from '../../db/db'
import './End.scss'
import Background from "../../Background/Background";

function End() {
    return (
        <Background>
            <div className='End'>
                <div className="backdrop">
                    <h1>با تشکر از وقتی که صرف پاسخگویی به سوالات کردید.</h1>
                    <img src={Data.logo_url} alt='Logo'/>
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

export default End

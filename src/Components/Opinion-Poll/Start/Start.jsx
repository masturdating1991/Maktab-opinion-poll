import React from 'react'
import Data from '../../db/db.js'
import {Link} from "react-router-dom";
import './Start.scss'
import Background from "../../Background/Background";
import Footer from "../../Footer/Footer";

function Start() {
    return (
        <Background>
            <div className='Start'>
                <div className="backdrop">
                    <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <img className='logo' src={Data.logo_url} alt='Logo'/>
                    <button className='start'>
                        <Link to={`/0`}>شروع</Link>
                    </button>
                </div>

                <Footer/>
            </div>
        </Background>
    )
}

export default Start

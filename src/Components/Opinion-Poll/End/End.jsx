import React from 'react'
import Data from '../../db/db.js'
import './End.scss'
import Background from "../../Background/Background";
import {Link} from "react-router-dom";
import Footer from "../../Footer/Footer";

function End() {
    return (
        <Background>
            <div className='End'>
                <button className='home'>
                    <Link to='/'>Start Again</Link>
                </button>


                <div className="backdrop">
                    <h1 dir='rtl'>با تشکر از وقتی که صرف پاسخگویی به سوالات کردید.</h1>
                    <img src={Data.logo_url} alt='Logo'/>
                </div>


                <Footer/>
            </div>
        </Background>
    )
}

export default End

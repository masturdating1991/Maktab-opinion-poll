import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InitialData from "../db/db";
import Start from "./Start/Start";
import Question from './Question/Question'
import End from "./End/End";


function OpinionPoll() {
    const [saveAnswer, setSaveAnswer] = useState([])
    return (
       
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Start />
                </Route>

                {
                    InitialData.questions.map((data, index) =>
                        <Route key={data.id} path={`/${index}`}>
                            <Question
                                saveAnswer={saveAnswer}
                                setSaveAnswer={setSaveAnswer}
                                data={data}
                                index={index}
                            />
                        </Route>
                    )
                }


                <Route path='/end'>
                    <End />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default OpinionPoll;
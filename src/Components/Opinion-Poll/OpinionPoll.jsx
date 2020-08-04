import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import InitialData from "../db/db";
import Start from "./Start/Start";
import Question from './Question/Question'
import End from "./End/End";


function OpinionPoll() {

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
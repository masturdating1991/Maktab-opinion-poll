import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Start from "./Start/Start";
import Question1 from './Questions/Question-1/Question1'
import Question2 from './Questions/Question-2/Question2'
import Question3 from './Questions/Question-3/Question3'
import End from "./End/End";


function OpinionPoll() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Start/>
                </Route>

                <Route path='/ques1'>
                    <Question1/>
                </Route>

                <Route path='/ques2'>
                    <Question2/>
                </Route>

                <Route path='/ques3'>
                    <Question3/>
                </Route>

                <Route path='/end'>
                    <End/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default OpinionPoll;
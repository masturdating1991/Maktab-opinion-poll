import React from 'react';
 // import End from "./End/End"
// import Question1 from './Questions/Question-1/Question1'
//  import Question2 from './Questions/Question-2/Question2'
import Question3 from './Questions/Question-3/Question3'
// import Start from "./Start/Start";

// import MultiStep from 'react-multistep'

function OpinionPoll() {
    // const steps = [
    //     {name: 'Start', component: <Start/>},
    //     {name: 'Question1', component: <Question1/>},
    //     {name: 'Question2', component: <Question2/>},
    //     {name: 'Question3', component: <Question3/>},
    //     {name: 'End', component: <End/>}
    // ];
    return (
        <>
            {/*<Multistep showNavigation steps={steps}/>*/}
            <Question3/>
        </>
    );
}

export default OpinionPoll;
import React, { useState } from 'react'
import './Question.scss'
import Background from "../../Background/Background";
import Button from "../../Button/Button";
import QuestionFooter from "../../Question Footer/QuestionFooter";


function Question({ data, index }) {

    const [saveAnswer, setSaveAnswer] = useState([])


    const handleAnswer = (text) => {
        setSaveAnswer([...saveAnswer, {
            id: index,
            text
        }])
        console.log(saveAnswer)
    }

    return (
        <Background>
            <div className='Question'>

                <div className='question-ask'>
                    {
                        <h2>{data.text}</h2>
                    }
                </div>
                <div className='question-answer'>
                    {
                        data.options.map(item =>
                            <Button
                                
                                click={() => handleAnswer(item.text)}
                                key={item.key}
                                text={item.text}
                                index={index}
                            />
                        )
                    }

                </div>

                <QuestionFooter />
            </div>
        </Background>
    )
}

export default Question

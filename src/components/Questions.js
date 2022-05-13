import React from 'react';


export default function Questions({ question, index, answer, resp, setResp, answers, questions, result, setResult, base, setBase}) {

    const [indexSel, setIndexSel] = React.useState('')
    const [questionSel, setQuestionSel] = React.useState('')
    const [answerSel, setAnswerSel] = React.useState('')
    const [correction, setCorrcetion] = React.useState('')

    function selectorQuestion(answer, question, index) {
        setQuestionSel(question)
        setAnswerSel(answer)
        setIndexSel(index)
        setResp('question')
    }

    function selectorAnswer() {
        setResp('answer')
    }

    function corretion(type) {
        let u = result        
        if (type === 'not') {
            setCorrcetion('not')
            u.push('E')
        }
        if (type === 'almost') {
            setCorrcetion('almost')
            u.push('M')
        }
        if (type === 'yes') {
            setCorrcetion('yes')
            u.push('C')
        }
        setResult(u)
        if(result.length===8){
            setBase('base done')
        }
        setResp('correction')
    }

    function Selected({ index }) {
        if (index === indexSel) {
            if (correction === 'not') {
                return (
                    <div className="card">
                        <div className="question wrong">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="close-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
            if (correction === 'almost') {
                return (
                    <div className="card">
                        <div className="question middle">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="help-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
            if (correction === 'yes') {
                return (
                    <div className="card">
                        <div className="question correct">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
        }
    }

    if (resp === 'initial') {
        return (
            <div className="card">
                <div className="question front">
                    <h2>Pergunta {index + 1}</h2>
                    <ion-icon name="play-outline" onClick={() => selectorQuestion(answer, question, index)}></ion-icon>
                </div>
            </div>

        )
    }
    if (resp === 'question') {

        if (correction !== '') {
            return (
                <div>
                    < Selected index={index} />
                </div>
            )
        }
        else {
            if (question === questionSel) {
                return (
                    <div className="card">
                        <div className="answer front">
                            <h2>{question}</h2>
                            <img src="./IMG/setinha.png" onClick={selectorAnswer} />
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="card">
                        <div className="question front">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </div>

                )
            }
        }
    }
    if (resp === 'answer') {
        if (correction !== '') {
            return (
                <div>
                    < Selected index={index} />
                </div>
            )
        }
        if (answer === answerSel) {
            return (
                <div className="answer back">
                    <h2>{answer}</h2>

                    <div className="buttons">
                        <button className="not" onClick={() => corretion('not')}>Não lembrei!</button>

                        <button className="almost" onClick={() => corretion('almost')}>Quase não lembrei!</button>

                        <button className="yes" onClick={() => corretion('yes')}>Zap!</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="card">
                    <div className="question front">
                        <h2>Pergunta {index + 1}</h2>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>

            )
        }

    }
    if (resp === 'correction') {
        if (index === indexSel) {
            if (correction === 'not') {
                return (
                    <div className="card">
                        <div className="question wrong">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="close-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
            if (correction === 'almost') {
                return (
                    <div className="card">
                        <div className="question middle">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="help-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
            if (correction === 'yes') {
                return (
                    <div className="card">
                        <div className="question correct">
                            <h2>Pergunta {index + 1}</h2>
                            <ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    </div>
                )

            }
        }
        else {
            return (
                <div className="card">
                    <div className="question front">
                        <h2>Pergunta {index + 1}</h2>
                        <ion-icon name="play-outline" onClick={() => selectorQuestion(answer, question, index)}></ion-icon>
                    </div>
                </div>
            )
        }
    }

}
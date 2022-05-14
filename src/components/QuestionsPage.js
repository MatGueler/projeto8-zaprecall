// import Questions from "./Questions"
import React from 'react';

import Questions from './ChooseQuestions';


export default function OpenQuestions({objct}) {

    const [result, setResult] = React.useState([])

    const [resp, setResp] = React.useState('initial')

    const [base, setBase] = React.useState('base')

    const [pontuation, setPontuation] = React.useState(0)

    function Finish() {
        if (result.length !== 8) {
            return (
                <></>
            )
        }
        else {
            if (pontuation === 0) {
                return (
                    <>
                        <div className="resultado">
                            <img src="./IMG/party.png" />
                            <h3>Parabéns!</h3>
                        </div>
                        <h3>Você não esqueceu de nenhum flashcard!</h3>
                    </>
                )
            }
            else {
                return (
                    <>
                        <div className="resultado">
                            <img src="./IMG/sad.png" />
                            <h3>Putz!</h3>
                        </div>
                        <h3>Ainda faltam alguns...
                            Mas não desanime!</h3>
                    </>
                )
            }
        }
    }

    function IconsResult({ index, element }) {
        if (element === 'C') {
            return (
                <div className='correct'><ion-icon className="correct" name="checkmark-circle"></ion-icon></div>
            )
        }
        if (element === 'E') {
            return (
                <div className='wrong'><ion-icon className="wrong" name="close-circle"></ion-icon></div>

            )
        }
        if (element === 'M') {
            return (
                <div className='middle'><ion-icon className="middle" name="help-circle"></ion-icon></div>

            )
        }
    }

    return (
        <>
            <div className="page-questions">
                <div className="top-questions">
                    <img src="./IMG/logo.png" />
                    <h1>ZapRecall</h1>
                </div>


                <div className="questions done">
                    {objct.map(function (element, index) { return (<Questions key={index} question={element.question} index={index} answer={element.answer} resp={resp} setResp={setResp} result={result} setResult={setResult} setBase={setBase} setPontuation={setPontuation}/>) })}
                </div>

                <div className={base}>
                    <Finish />
                    <h3>{result.length}/8 CONCLUÍDOS</h3>
                    <div className="icons-result">
                        {result.map(function (element, index, result) { return (<IconsResult key={index} element={element} />) })}
                    </div>
                </div>
            </div>
        </>
    )
}
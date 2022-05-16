// import Questions from "./Questions"
import React from 'react';

import Questions from './ChooseQuestions';

import logo from '../Assets/IMG/logo.png'

import party from '../Assets/IMG/party.png'

import sad from '../Assets/IMG/sad.png'


export default function OpenQuestions({ objct, setPage , qtd}) {

    const [result, setResult] = React.useState([])

    const [resp, setResp] = React.useState('initial')

    const [base, setBase] = React.useState('base')

    const [boxQuestions, setboxQuestions] = React.useState('questions')

    const [pontuation, setPontuation] = React.useState(0)


    // pode ser um componente
    function Finish() {
        if (result.length !== 8) {
            return (
                <><h3>{result.length}/8 CONCLUÍDOS</h3>
                    <div className="icons-result">
                        {result.map(function (element, index, result) { return (<IconsResult key={index} element={element} />) })}
                    </div>
                </>
            )
        }
        else {
            if (pontuation === 0) {
                return (
                    <>
                        <div className="resultado">
                            <img src={party} />
                            <h3>Parabéns!</h3>
                        </div>
                        <h3>Você não esqueceu de nenhum flashcard!</h3>
                        <h3>{result.length}/8 CONCLUÍDOS</h3>
                        <div className="icons-result">
                            {result.map(function (element, index, result) { return (<IconsResult key={index} element={element} />) })}
                        </div>
                        <button onClick={() => setPage('initial')}>REINICIAR RECALL</button>
                    </>
                )
            }
            else {
                return (
                    <>
                        <div className="resultado">
                            <img src={sad} />
                            <h3>Putz...</h3>
                        </div>
                        <h3>Ainda faltam alguns...
                            Mas não desanime!</h3>
                        <h3>{result.length}/8 CONCLUÍDOS</h3>
                        <div className="icons-result">
                            {result.map(function (element, index, result) { return (<IconsResult key={index} element={element} />) })}
                        </div>
                        <button onClick={() => setPage('initial')}>REINICIAR RECALL</button>
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
                    <img src={logo} />
                    <h1>ZapRecall</h1>
                </div>


                <div className={boxQuestions}>
                    {objct.map(function (element, index) { return (<Questions key={index} question={element.question} index={index} answer={element.answer} resp={resp} setResp={setResp} result={result} setResult={setResult} setBase={setBase} setPontuation={setPontuation} setboxQuestions={setboxQuestions}/>) })}
                </div>

                <div className={base}>
                    <Finish />
                </div>
            </div>
        </>
    )
}